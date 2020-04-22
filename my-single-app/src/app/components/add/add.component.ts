import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "src/app/services/employee.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LogService } from "src/app/services/log.service";
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
 

showMessage:boolean=false;
showMsg:boolean=false;
editMode:boolean=false;
myForm: FormGroup;
  constructor(private employeeService:EmployeeService,private route: ActivatedRoute,public logService:LogService) {

    this.myForm=new FormGroup(
      {
        'id':new FormControl('',Validators.required),
        'name':new FormControl('',Validators.required),
        'salary':new FormControl('',[Validators.min(10000),Validators.required])
      }
    )


   }

  ngOnInit(): void {

     this.route.paramMap.subscribe(params => {
      console.log('***', params.get('id'));
      if(params.get('id') != null){
         this.editMode = true;
      }
      this.myForm.controls['id'].setValue(params.get('id'));
      this.myForm.controls['name'].setValue(params.get('name'));
      this.myForm.controls['salary'].setValue(params.get('salary'));
    });
  }


addEmployee()
{
console.log(this.myForm)
console.log(this.myForm.controls['name'])
this.employeeService.addEmployee(this.myForm.value)
.subscribe(res=>{
  console.log(res)
      if(res.status == 200){
        this.showMessage = true;
        console.log("Message",this.showMessage);
      }
    });

}

updateEmp()
{
  console.log(this.myForm)
console.log(this.myForm.controls['name'])
this.employeeService.updateEmployeeById(this.myForm.value)
.subscribe(res=>{
  console.log(res)
      if(res.status == 202){
        this.showMsg = true;
        console.log("Message",this.showMsg);
      }
    });
}

  log(message: string){
    this.logService.add(message)
  }
}

