import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "src/app/services/employee.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

 class Emp {
    name: string;
    salary:number;
    constructor(name: string,salary:number) {
        this.name = name;
        this.salary=salary;
    }
}
export class AddComponent implements OnInit {

  constructor(private employeeService:EmployeeService ) { }

  ngOnInit(): void {
  }

  ename:string;
  esalary:number;
  
employee:Emp;
  addEmp(empName:string,empSalary:number)
  {
    this.ename = empName;
     this.esalary=empSalary;
     this.employee=new Emp(this.ename,this.esalary);
    this.employeeService.addEmployee(this.employee)
    .subscribe((res:any)=> {
      console.log(res);
    })
  }

}
