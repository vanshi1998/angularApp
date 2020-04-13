import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public http:HttpClient) { }
   fetchIndia(){
    return this.http.get('assets/india.json').toPromise();
   }
  fetchUSA(){
    return this.http.get('assets/USA.json').toPromise();
  }
}
