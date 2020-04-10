import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  constructor(public courseService:CourseService) { }

  /*heading:string='Java';
  summary:string='Its is mostly used programming language';*/

  /*courses: string[]={

  }*/

  @Input('title') heading:string=""
  @Input('summary') summary:string=""
  now:Date=new Date();
    @Input('id') id:number=null;

    @Input('sentence') sentence:string="hello i am jumbotron";

  ngOnInit(): void {
  }

  deleteJumbo(id)
  {
    console.log("Deleting the jumbotron with id",id);
    //this.http.delete('http://localhost:8000/api/employee/' + id).toPromise()
    this.courseService.deleteCourse(id)
    .then(res=>console.log(res))
  }

}
