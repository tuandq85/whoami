import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDomain } from '../domain/LoginDomain';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // Declare URL redirect
  private adminUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  // START declare Method to proccess.
  loginSystem(user: LoginDomain): Promise<Object> {
    console.log("User detail :", user);
    return this.http.post(`${this.adminUrl}/oauth/token`, user).toPromise();
  }

  // END declare.
}
