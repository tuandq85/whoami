import { Component, OnInit } from '@angular/core';
// Declare Service and router.
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  contact: any;

  // Declare service and router
  constructor(private loginService: LoginService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      //console.log(params.get('userid'))
       //this.loginService.gotoLoginWithParam(params.get('userid')).subscribe(c =>{
//          console.log(c);
//          this.contact = c;
//      })   
      });
  }

}
