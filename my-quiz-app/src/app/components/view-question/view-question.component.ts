import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from "src/app/services/quiz.service";
import { Router } from '@angular/router';
import { Question } from "src/app/models/Question";

import { Choice } from "src/app/models/Choice";
@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent implements OnInit {
  len: any;

  constructor(public quizService:QuizService,private route: ActivatedRoute,private router: Router) {
    


  }

quizName:string;
questions:Array<Question>;
currentQuestion:Question;
index:number;
quesNumber:number;
noOfQues:number;
userAnswer:Array<any>=[];
userInput:Array<any>=[];
correctAnswer:Array<any>=[];

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
    this.noOfQues=this.questions.length;
console.log("Number of question in this quiz=",this.noOfQues);

    })
   

  }

  getNextQuestion()
  {
    this.loadCorrect();
    console.log("Next question called");
    this.currentQuestion=this.questions[this.index+1];
    console.log("Changed question=",this.currentQuestion);
    this.index=this.index+1;
    console.log("Changed index=",this.index);
    this.quesNumber=this.index+1;
    console.log("Changed question number=",this.quesNumber);
    this.router.navigate(['viewquestion',this.quizName])
    
  }

getPreviousQuestion()
  {
    
    
     this.loadCorrect(); 
   console.log("Previous question called");
    this.currentQuestion=this.questions[this.index-1];
    console.log("Changed question=",this.currentQuestion);
    this.index=this.index-1;
    console.log("Changed index=",this.index);
    this.quesNumber=this.index+1;
    console.log("Changes question number=",this.quesNumber);
    console.log("Current Question=",this.currentQuestion);
    this.router.navigate(['viewquestion',this.quizName])
    

  }

   onSelect(option:Choice)
   {
     this.userAnswer[this.index]=option.isAnswer;
     this.userInput[this.index]=option.text;
     console.log(this.userAnswer);
     console.log(this.userInput);
     
    
   }

   loadCorrect()
   {
     for (let option of this.currentQuestion.choices )
    {
      if(option.isAnswer==true)
      {
        this.correctAnswer[this.index]=option.text;
      }
    }
    console.log("Correct answers are",this.correctAnswer);

   }
   viewResult()
     {
       this.loadCorrect();
       this.userAnswer.forEach(i => {
      if (i == true) {
        this.quizService.res++;
      }
    });

    this.len=this.userAnswer.length;
    if(this.len<this.noOfQues)
    {
      for(let i=this.len;i<this.noOfQues;i++)
    {
      this.userAnswer[i]="";
      this.userInput[i]="";
    }
    }
    console.log(this.quizService.res);

    this.router.navigate(['viewresult',{userAnswer:this.userAnswer,userText:this.userInput,correctAnswer:this.correctAnswer,noOfQuestions:this.noOfQues}]);

     }
  goToHome()
  {
    this.router.navigate(['viewquiz']);
  }

}
