import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GroupDomain } from '../domain/GroupDomain';
import { ResponseDataAPI } from '../domain/ResponseData';
import { HttpHeaders } from '@angular/common/http';
import { ChannelDomain } from '../domain/ChannelDomain';
import { LoginResponInfoDomain } from '../domain/UserDomain';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  // Declare URL mapping Back-End.
  private adminUrl = 'http://localhost:8080/groups';

  constructor(private http: HttpClient, private headers: HttpHeaders) { }
  
  findGroupByName(group: GroupDomain): Observable<GroupDomain> {
    // Set JSON content type.
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    let options = {
      headers: httpHeaders
    };

    // Convert object to JSON.
    var json = JSON.stringify(group);
    console.log("Json value: ", json);
    return this.http.post<GroupDomain>(`${this.adminUrl}/find-group`, json, options);
  }

  saveTempGroup(group: GroupDomain): Observable<ResponseDataAPI> {
    // Set JSON content type.
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    let options = {
      headers: httpHeaders
    };

    // Convert object to JSON.
    var json = JSON.stringify(group);
    console.log("Json value: ", json);
    return this.http.post<ResponseDataAPI>(`${this.adminUrl}/temp-group`, json, options);
  }

  getChannelByGroup(groupId:string, userInfo: LoginResponInfoDomain): Observable<ResponseDataAPI> {

    // Set JSON content type.
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Authorization': 'Bearer ' + userInfo.access_token
    });
    let options = {
      headers: httpHeaders
    };
    return this.http.get<ResponseDataAPI>(`${this.adminUrl}/${groupId}`, options);
  }
  // END Declare.
}
