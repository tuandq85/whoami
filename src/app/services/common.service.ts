import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private map: Map<string, string> = new Map([
    ["A", "content A"],
    ["B", "Content B"],
    ["C", "Content C"]
  ]);

  constructor() {
  }

  getMessageContent(errCode: string): string {
    return this.map.get(errCode);
  }
}
