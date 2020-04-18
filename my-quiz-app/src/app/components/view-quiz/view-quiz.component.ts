import { Component, OnInit } from '@angular/core';
import { QuizService } from "src/app/services/quiz.service";
import { Router } from '@angular/router';
import { Quiz } from "src/app/models/Quiz";

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css']
})
export class ViewQuizComponent implements OnInit {

quizes:Array<Quiz>
  constructor(private quizService:QuizService,private router: Router) { }

  ngOnInit(): void {

      this.quizService.fetchQuizes()
.subscribe((res:any)=> {
      console.log(res);
      this.quizes = res;
    })
  }

getQuiz(quiz:Quiz)
{
this.router.navigate(['viewquestion',{name:quiz.name}])

}
}