import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "src/app/services/employee.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
  }
showMessage:boolean=false;
  updateEmployee(name:string,salary:number)
  {
this.employeeService.updateEmployee(name,salary)
.subscribe(res=>{
  console.log(res);
      /*if(res.status == 200){
        this.showMessage = true;
        console.log("Message",this.showMessage);
      }*/
    });
  }
}
