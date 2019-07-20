import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-golean',
  templateUrl: './golean.component.html',
  styleUrls: ['./golean.component.scss']
})
export class GoleanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  redirectDetailItem(): void {
        alert("Redirect button has been clicked.");
  };
}
