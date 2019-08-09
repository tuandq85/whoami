import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private router: Router,
    private formBuider: FormBuilder
  ) {
  }

  ngOnInit() {
  }  
}
