import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { GroupDomain } from '../domain/GroupDomain';
import { ResponseDataAPI } from '../domain/ResponseData';
import { CommonService } from '../services/common.service';
import { LoginDomain, UserInfoDomain } from '../domain/UserDomain';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: LoginDomain = new LoginDomain();
  errorMessage = '';
  info: UserInfoDomain = new UserInfoDomain();
  constructor(private router: Router, private service: LoginService, private common: CommonService) { }

  ngOnInit() {
  }

  // Submit form.
  onSubmit() {
    this.user.client_id = "whoami-client";
    this.user.client_secret = "whoami-secret";
    this.user.grant_type = "password";
    this.user.scope = "read";

    console.log(this.user);

    // Call to save method.
    this.service.loginSystem(this.user).subscribe(
      (data: ResponseDataAPI) => {                 // Successful action
        console.log(data);
        this.info = data.data as UserInfoDomain;
        console.log("User information :", this.info);
      },
      (error) => {
        this.errorMessage = error.message;
        console.log(this.common.getMessageContent("A"));
      }
    );
  }
}
