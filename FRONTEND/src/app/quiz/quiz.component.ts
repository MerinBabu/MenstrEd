import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {QuizModel} from './quiz.model';
import { ActivatedRoute,Router } from '@angular/router';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quiz;
  categoryName;
  count=0;
  constructor(public _auth:AuthService, private _router:Router,private route: ActivatedRoute,private quizService:QuizService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params =>{

      this.categoryName=params.catname;
      console.log(this.categoryName);
      
    });

    this.quizService.getQuiz(this.categoryName).subscribe((data)=>{
      this.quiz=JSON.parse(JSON.stringify(data));
    });
  }

  checkAnswer(){
    alert(this.quiz[this.count].checkMessage);
  }

  nextQuestion(){
    if(this.count<=this.quiz.length){
      this.count=this.count+1;
    }
    else{
      alert("You have reached the end of this category");
    }
  }

}
