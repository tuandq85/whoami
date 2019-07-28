import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // Declare URL redirect
  API_URL: string = "/";

  constructor(private http: HttpClient) { }

  // START declare Method to proccess.
  gotoLogin() {
    //return this.http.get(this.API_URL + 'editor')
  }

  gotoLoginWithParam(userid) {
    //return this.http.get(`${this.API_URL + 'contacts'}/${userid}`)
  }

  // Add header basic login.
  addHeader() {
    
    // Header basic authen.
    const headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('username' + ':' + 'password')
      })
    };

    this.http
      .get('{{url}}', headerOptions)
      .subscribe(
        data => { // json data
          console.log('Success: ', data);
        },
        error => {
          console.log('Error: ', error);
        });
  }

  // END declare.
}
