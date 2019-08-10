import { Component, OnInit } from '@angular/core';
// Import common libs.
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
// Import relate libs.
import { GroupService } from './../../services/group.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  // Declare object list
  // groups: Observable<GroupDTO[]>;

  // Change input params
  constructor(private service: GroupService, private router: Router) { }

  ngOnInit() {
    // Methods called when form has been load.
    this.loadData();
  }

  // Declare method.
  loadData() {
    // Call to service
    //this.groups = this.service.getGroups();
    

    // Mocking data.
    /*this.groups = new Observable(observer => {
      setTimeout(() => {
        observer.next(GROUPS);
      }, 1000);
    });
    ;*/
    console.log('Call to load method success.');
  }

  deleteGroup(id: string) {
    /*this.service.deleteGroup(id)
      .subscribe(
        data => {
          console.log(data);
          this.loadData();
        },
        error => console.error()
      );
      */
    alert("Delete success");

    // Save information to LocalStorage.
    //window.localStorage.setItem('storageKey', 'Test value');

    // Test move to home page.
    this.router.navigate(['demo']);
  }
}
