import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from "src/app/services/course.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  courseService: any;

  constructor(courseService:CourseService) { }

  ngOnInit(): void {
  }
@Input('title') title:string=""

deleteToDo(title: string){
    console.log('Delete todo from here', title)
    // this.http.delete('http://localhost:8000/api/employee/' + id).toPromise()
    this.courseService.deleteTodo(title);
    /*.then(res=>console.log(res))*/
  }
}


