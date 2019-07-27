import { Injectable } from '@angular/core';
//import { HttpClient } from “@angular/common/http”;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // Declare URL redirect
  API_URL: string = "/";

  constructor() { }

  // START declare Method to proccess.
  gotoLogin() {
    //return this.http.get(this.API_URL + 'editor')
  }

  gotoLoginWithParam(userid) {
    //return this.http.get(`${this.API_URL + 'contacts'}/${userid}`)
  }

  // END declare.
}
