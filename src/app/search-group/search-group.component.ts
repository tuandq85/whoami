import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { GroupDomain } from '../domain/GroupDomain';
import { GroupService } from '../services/group.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-search-group',
  templateUrl: './search-group.component.html',
  styleUrls: ['./search-group.component.scss']
})
export class SearchGroupComponent implements OnInit {

  // Declare Variable.
  group: GroupDomain = new GroupDomain();
  errorMessage = '';

  constructor(private router: Router, private service: GroupService, private common: CommonService) { }

  ngOnInit() {
  }

  // Submit form.
  onSubmit() {
    // Call to save method.
    this.service.findGroupByName(this.group).subscribe(
      (data: GroupDomain) => {                 // Successful action
        console.log(data.group_id);
        this.router.navigate(['login', data.group_id]);
      },
      (error) => {
        this.errorMessage = error.message;
        console.log("Error happen.");
        console.log('status :', error.status);    // Error happen.
        console.log('Error content :', error.error);    // Error happen.
        console.log(this.common.getMessageContent("A"));
      }
    );
  }

  // Save Employee to DB.
  save() {

  }
}
