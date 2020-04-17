import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from "src/app/services/quiz.service";
import { Router } from '@angular/router';
import { Question } from "src/app/models/Question";
@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent implements OnInit {

  constructor(public quizService:QuizService,private route: ActivatedRoute,private router: Router) { }

quizName:string;
questions:Array<Question>;
currentQuestion:Question;
index:number;
quesNumber:number;
noOfQues:number;
isLast:boolean=false;
isFirst:boolean=false;
//tryQuestion:Array<any>;

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      console.log('***', params.get('name'));
     this.quizName=params.get('name');
     console.log("name=",this.quizName);
     /*this.tryQuestion=params.get('questions');
     console.log("Questions through Params are",this.tryQuestion);*/

    });

this.quizService.fetchSingleQuiz(this.quizName)
.subscribe((res:any)=> {
      console.log(res);
      this.questions = res.questions;
      console.log("Questions are",this.questions);
      this.currentQuestion=this.questions[0];
      console.log("Current question=",this.currentQuestion);
       this.index = this.questions.indexOf(this.currentQuestion);
    this.quesNumber=this.index+1;
    console.log("Index=",this.index);
    this.isFirst=true;
    this.noOfQues=this.questions.length;
console.log("Number of question in this quiz=",this.noOfQues);
if(this.noOfQues==1)
{
  this.isLast=true;
}
    })
   


  }

  getNextQuestion()
  {
    this.isFirst=false;
    console.log("Next question called");
    this.currentQuestion=this.questions[this.index+1];
    console.log("Changed question=",this.currentQuestion);
    this.index=this.index+1;
    console.log("Changed index=",this.index);
    this.quesNumber=this.index+1;
    console.log("Changed question number=",this.quesNumber);
    this.router.navigate(['viewquestion'])
    if(this.index==(this.noOfQues-1))
    {
      this.isLast=true;
    }
  }

getPreviousQuestion()
  {
    if(this.index==0)
    {
     
    }
    else{
      this.isLast=false;
   console.log("Previous question called");
    this.currentQuestion=this.questions[this.index-1];
    console.log("Changed question=",this.currentQuestion);
    this.index=this.index-1;
    console.log("Changed index=",this.index);
    this.quesNumber=this.index+1;
    console.log("Changes question number=",this.quesNumber);
    console.log("Current Question=",this.currentQuestion);
    this.router.navigate(['viewquestion'])
    if(this.index==0)
    {
      this.isFirst=true;
    }
    }

  }


}
