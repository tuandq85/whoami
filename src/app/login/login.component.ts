import { Component, OnInit } from '@angular/core';

// Import facebook login.
import { AuthService, FacebookLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = 'Angular Socio login via Facebook!';
  user: any;
 
  constructor(private _socioAuthServ: AuthService) { }
 
  // Method to sign in with facebook.
  signIn(platform: string): void {
    platform = FacebookLoginProvider.PROVIDER_ID;
    this._socioAuthServ.signIn(platform).then(
      (response) => {
        console.log(platform + " logged in user data is= ", response);
        this.user = response;
      }
    );
  }
 
  // Method to log out.
  signOut(): void {
    this._socioAuthServ.signOut();
    this.user = null;
    console.log('User signed out.');
  }

  ngOnInit() {
  }

}
