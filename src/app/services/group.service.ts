import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GroupDomain } from '../domain/GroupDomain';
import { ResponseDataAPI } from '../domain/ResponseData';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  // Declare URL mapping Back-End.
  private adminUrl = 'http://localhost:8080/groups';

  constructor(private http: HttpClient) { }
  
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
  // END Declare.
}
