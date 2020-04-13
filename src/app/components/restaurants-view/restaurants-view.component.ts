import { Component, OnInit, Input } from '@angular/core';
import { MsalAuthService } from 'src/app/services/msal-auth.service';

@Component({
  selector: 'app-restaurants-view',
  templateUrl: './restaurants-view.component.html',
  styleUrls: ['./restaurants-view.component.css']
})
export class RestaurantsViewComponent implements OnInit {

  @Input() public users;
  @Input() public selectedUsers;

  constructor(public user : MsalAuthService) { }

  ngOnInit() {
    console.log(this.users);
  }

  isSelectedUsers(){
    return this.users === this.selectedUsers
  }

}
