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
    .then((res: any) =>{
      console.log(res);
      this.courses=res;
    })

  }
    title = 'my-first-app';
   courses: Array<any> = []
}