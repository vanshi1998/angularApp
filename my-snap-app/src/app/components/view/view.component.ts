import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "src/app/services/employee.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }
employees:Array<any>
  ngOnInit(): void {
this.employeeService.fetchEmployees()
.subscribe((res:any)=> {
      console.log(res);
      this.employees = res;
    })
}
}