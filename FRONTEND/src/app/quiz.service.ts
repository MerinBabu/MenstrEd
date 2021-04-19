import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(public http:HttpClient) { }

  getQuiz(categoryName){
    return this.http.get(`http://localhost:3000/quiz/${categoryName}`);
  }

  newQuiz(item){
    return this.http.post("http://localhost:3000/addquiz",{"quiz":item});
  }
}
