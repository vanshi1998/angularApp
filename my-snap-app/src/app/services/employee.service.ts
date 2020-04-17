import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


const baseUrl = 'http://localhost:8000/api/employee/'
@Injectable({
  providedIn: 'root'
})

class Emp {
    name: string;
    salary:number;
    constructor(ename: string,esalary:number) {
        this.name = ename;
        this.salary=esalary;
    }
}
export class EmployeeService {

  constructor(private http:HttpClient) { }

  fetchEmployees()
  {
    return this.http.get(baseUrl);
  }

 addEmployee(employee1:Emp)
  {
    console.log("Adding the employee",employee1);
    return this.http.post(baseUrl,employee1);
  }

}
