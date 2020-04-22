import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from "src/app/services/quiz.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.css']
})
export class ViewResultComponent implements OnInit {

userAnswer:Array<any>;
userText:Array<any>;
correctAnswer:Array<any>;
noOfQuestions:number;
 arrayOne(n: number): any[] {
    return Array(n);
  }
  constructor(public quizService:QuizService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      /*console.log('***', params.get('userAnswer'));
     this.userAnswer=params.get('userAnswer');
     this.userInput=params.get('userText');
     console.log(this.userAnswer);
     console.log(this.userInput);*/
     this.userAnswer=params.get('userAnswer').split(",");
     this.userText=params.get('userText').split(",");
     this.correctAnswer=params.get('correctAnswer').split(",");
     this.noOfQuestions=parseInt(params.get('noOfQuestions'));
     console.log("user answer=",this.userAnswer);
     console.log(this.userText);
     console.log(this.correctAnswer);
     console.log("number of questions",this.noOfQuestions);

    });
 
 


 }

goToHome()
  {
    this.router.navigate(['viewquiz']);
  }


}
