import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
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
  private groupId: string;
  info: UserInfoDomain = new UserInfoDomain();
  constructor(private router: Router, 
              private service: LoginService,
              private common: CommonService,
              private activeRouter: ActivatedRoute) { }

  ngOnInit() {
  }

  // Submit form.
  onSubmit() {
    // Call to login method.
    this.service.loginSystem(this.user).subscribe(
      (data: ResponseDataAPI) => {                 // Successful action
        console.log(data);
        this.info = data.data as UserInfoDomain;
        console.log("User information :", this.info);
        console.log("path value : ")
        this.router.navigate(['/main', this.activeRouter.snapshot.params['group-id']]);
      },
      (error) => {
        this.errorMessage = error.message;
        console.log(this.common.getMessageContent("A"));
      }
    );
  }
}
