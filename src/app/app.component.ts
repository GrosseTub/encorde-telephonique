  
import { Component } from '@angular/core';
import { MsalAuthService } from './services/msal-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Encord�e T�l�phonique";
  constructor(public auth: MsalAuthService){
  }

}