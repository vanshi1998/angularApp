import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first3-employees',
  templateUrl: './first3-employees.component.html',
  styleUrls: ['./first3-employees.component.css']
})
export class First3EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 @Input('title') heading:string=""
  @Input('summary') summary:string=""

}
