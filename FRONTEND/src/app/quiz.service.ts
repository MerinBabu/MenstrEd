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

  updateQuiz(categoryName, quizNo,question,image1,image2,image3,image4,correctOption,checkMessage, id){
    const updatedQuiz = {
      categoryName, quizNo,question,image1,image2,image3,image4,correctOption,checkMessage
    };
    return this.http.post(`http://localhost:3000/updatequiz/${id}`, updatedQuiz)
    .subscribe((data)=> {console.log(data)});
  }

  deleteQuiz(id){
    return this.http.delete(`http://localhost:3000/deletequiz/${id}`);
  }

}
