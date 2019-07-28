import { Injectable } from '@angular/core';
// Import common libs.
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  // Declare URL mapping Back-End.
  private baseUrl = '/api/groups';

  // Change input params.
  constructor(private http : HttpClient) { }

  // Declare method interact with Back-end.
  // URL : GET '/api/groups/{groupId}'
  getGroupById(groupId : string) : Observable<Object> {
    return this.http.get(`${this.baseUrl}/${groupId}`);
  }

  // URL : POST '/api/groups/'
  // Parameter : groupDto
  createGroup(groupDto : Object) : Observable<Object> {
    return this.http.post(`${this.baseUrl}/`, groupDto);
  }

  // URL : PUT '/api/groups/{groupId}'
  // Parameter : id & groupDto
  updateGroup(groupId : string, groupDto : Object) : Observable<Object> {
    return this.http.put(`${this.baseUrl}/${groupId}`, groupDto);
  }

  // URL : DELETE '/api/groups/{groupId}'
  deleteGroup(groupId : string) : Observable<any> {
    return this.http.delete(`${this.baseUrl}/${groupId}`, {responseType : 'text'});
  }

  // URL : GET '/api/groups/'
  getGroups() : Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  // END Declare.
}
