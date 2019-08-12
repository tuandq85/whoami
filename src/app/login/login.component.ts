import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { GroupDomain } from '../domain/GroupDomain';
import { ResponseDataAPI } from '../domain/ResponseData';
import { CommonService } from '../services/common.service';
import { LoginDomain } from '../domain/LoginDomain';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: LoginDomain = new LoginDomain();
  errorMessage = '';
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
    console.log("Detail response : ", this.service.loginSystem(this.user));
    // .subscribe(
    //   (data) => {                 // Successful action
    //     console.log(data);
    //     // this.group = data.data as GroupDomain;
    //     // this.router.navigate(['login', this.group.group_id]);
    //   },
    //   (error) => {
    //     console.log('Error happen');
    //     this.errorMessage = error.message;
    //     console.log(this.common.getMessageContent("A"));
    //   }
    // );

    alert('Login success');
  }
}
