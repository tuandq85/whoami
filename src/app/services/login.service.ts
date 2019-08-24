import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDomain } from '../domain/UserDomain';
import { ResponseDataAPI } from '../domain/ResponseData';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // Declare URL redirect
  private adminUrl = 'http://localhost:8080/common';

  constructor(private http: HttpClient) { }

  // START declare Method to proccess.
  loginSystem(user: LoginDomain): Observable<ResponseDataAPI> {
    // Set JSON content type.
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    let options = {
      headers: httpHeaders
    };

    // Convert object to JSON.
    var json = JSON.stringify(user);
    console.log("Json value: ", json);
    return this.http.post<ResponseDataAPI>(`${this.adminUrl}/login`, json, options);
  }

  logout() {
    
  }

  // END declare.
}
