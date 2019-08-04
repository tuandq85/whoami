import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserRequest } from "../entities/UserRequest";
import { LoginService } from "../services/login.service";

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
  loginAndRegist: UserRequest = new UserRequest();
  submitted = false;
 
  constructor(private _socioAuthServ: AuthService, private router: Router, private service: LoginService) { }
 
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

  gotoMainPage() {
    this.router.navigate(['main']);
  }

  // Register user
  newUser(): void {
    this.submitted = false;
    this.loginAndRegist = new UserRequest();
  }

  save() {
    this.service.registerUser(this.loginAndRegist)
      .subscribe(data => console.log(data), error => console.log(error));
    this.loginAndRegist = new UserRequest();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
