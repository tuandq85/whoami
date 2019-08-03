import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-search-group',
  templateUrl: './search-group.component.html',
  styleUrls: ['./search-group.component.scss']
})
export class SearchGroupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoLoginPage() {
    this.router.navigate(['login']);
  }
}
