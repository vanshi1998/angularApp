import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Employee } from "src/app/models/employee";

const baseUrl = 'http://localhost:8000/api/employee/'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
   fetchEmployees()
  {
    return this.http.get(baseUrl);
  }

  addEmployee(employee:Employee)
  {
    return this.http.post(baseUrl,
    employee,{observe : 'response'})
  }

  deleteEmployee(id:number)
  {
    return this.http.delete(baseUrl+id,{observe : 'response'}) 
  }

  updateEmployee(name:string,salary:number)
  {
    return this.http.put(baseUrl+name+'/'+salary,{observe : 'response'}) 
  }

  updateEmployeeById(employee:Employee)
  {
    return this.http.put(baseUrl,
    employee,{observe : 'response'})
  }
}
