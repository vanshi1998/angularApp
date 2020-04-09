import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  constructor(public http:HttpClient) { }

  /*heading:string='Java';
  summary:string='Its is mostly used programming language';*/

  /*courses: string[]={

  }*/

  @Input('title') heading:string=""
  @Input('summary') summary:string=""
  @Input('id') id:number=null;

  ngOnInit(): void {
  }

  deleteJumbo(id)
  {
    console.log("Deleting the jumbotron with id",id);
    this.http.delete('http://localhost:8000/api/employee/' + id).toPromise()
    .then(res=>console.log(res))
  }

}
