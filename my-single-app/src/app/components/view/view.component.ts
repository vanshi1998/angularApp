import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "src/app/services/employee.service";
import { Router } from '@angular/router';
import { Employee } from "src/app/models/employee";
import { LogService } from "src/app/services/log.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private employeeService:EmployeeService,private router: Router,private logService:LogService) { }
employees:Array<any>
showMessage:boolean=false;
  ngOnInit(): void {
    this.employeeService.fetchEmployees()
.subscribe((res:any)=> {
      console.log(res);
      this.employees = res;
    })
  }
deleteEmployee(id:number)
{
  this.employeeService.deleteEmployee(id)
  .subscribe((res:any)=> {
      console.log(res);
     if(res.status==200)
     this.showMessage=true;
       this.employees = this.employees.filter((employee)=> employee.id!=id)
    })
}

editEmployee(employee:Employee)
{
  this.router.navigate(['add',employee])
}

 log(message: string){
    this.logService.add(message)
  }

}
