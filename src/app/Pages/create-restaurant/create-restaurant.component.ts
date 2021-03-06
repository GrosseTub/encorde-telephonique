import { Component, OnInit, ErrorHandler } from '@angular/core';
import { OnmangeouService, Restaurant, Person, Users } from 'src/app/services/onmangeou.service';
import { Router } from '@angular/router';
import { MsalAuthService } from 'src/app/services/msal-auth.service';
import { RestaurantViewerComponent } from '../restaurant-viewer/restaurant-viewer.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.css']
})
export class CreateRestaurantComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  public userss: Users[] = [{
    _id: "",
    name: "",
    calledUser: "",
    comment: "",
    __v: ""
  }];

  public users = null;

  public newRestaurant: Restaurant = {
    id: "",
    name: "",
    type: "",
    descr: "",
    persons: []
  };
  public person: Person = {
    id: "",
    name: "",
    comment: ""
  };

  public selectedUsers = null;


  constructor(private onMangeOuService: OnmangeouService, private router: Router, private _user: MsalAuthService, private _errorHandler: ErrorHandler, private formBuilder: FormBuilder) { }


  private loadData() {

    const myUsersObserver = {
      next: (x: Users[]) => {
        this.userss = x;
        this.selectedUsers = this.users[0];
      },
      error: err => this._errorHandler.handleError(err),
      complete: () => console.log('Restaurants Observer got a complete notification '),
    };

  //  this.onMangeOuService.getAllOldRestaurants().subscribe(myRestaurantsObserver);

  }

  ngOnInit() {
    this.loadData();
    
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required]
  });
  }

  selectUsers(users) {
    this.selectedUsers = users;
  }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }


  createRestaurant() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    
    console.log(this.newRestaurant);
    //this.onMangeOuService
     // .addRestaurant(this.newRestaurant)
     // .subscribe((data: Restaurant) => {
     //   this._user.vote(data.id, this.person.comment)
    //    this.router.navigate(['']);
   //   },
   //     (err) => this._errorHandler.handleError(err)
 //    )

  }

  public vote() {
    this._user.vote(this.selectedUsers.id, this.person.comment);
    this.router.navigate(['']);
    this.person.comment = "";
  }

}