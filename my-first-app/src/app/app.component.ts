import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CourseService } from './services/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  constructor(public courseService:CourseService)
  {

  }

  ngOnInit()
  {
    //initialization code here
    //this.http.get('http://localhost:8000/api/employee').toPromise()
    this.courseService.fetchAllCourses()
    .subscribe((res: any) =>{
      console.log("Emloyees are")
      console.log(res);
      this.courses=res;
      this.first3=this.courses.slice(0,3);
      console.log("First three")
      console.log(this.first3);
    })

  }
    title = 'my-first-app';
   courses: Array<any> = []
   first3:  Array<any>=[]

}