import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
const baseUrl = 'http://localhost:8000/api/quiz/';
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  res:number=0;
  constructor(private http:HttpClient) { }

  fetchQuizes()
  {
    return this.http.get(baseUrl);
  }

  fetchSingleQuiz(quizName:string)
  {
    return this.http.get(baseUrl+quizName);
  }
}
