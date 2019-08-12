import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { GroupDomain } from '../domain/GroupDomain';
import { ResponseDataAPI } from '../domain/ResponseData';
import { GroupService } from '../services/group.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-register-group',
  templateUrl: './register-group.component.html',
  styleUrls: ['./register-group.component.scss']
})
export class RegisterGroupComponent implements OnInit {

  // Declare Variable.
  group: GroupDomain = new GroupDomain();
  errorMessage = '';

  constructor(private router: Router, private service: GroupService, private common: CommonService) { }

  ngOnInit() {
  }

  // Submit form.
  onSubmit() {
    // Call to save method.
    this.service.saveTempGroup(this.group).subscribe(
      (data: ResponseDataAPI) => {                 // Successful action
        console.log(data.data);
        this.group = <GroupDomain> data.data;
        this.router.navigate(['login', this.group.group_id]);
      },
      (error) => {
        console.log('Error happen');
        this.errorMessage = error.message;
        console.log(this.common.getMessageContent("A"));
      }
    );
  }

}
