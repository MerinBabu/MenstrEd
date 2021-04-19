import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {FormGroup, FormControl, FormBuilder, Validators,Form} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { CategoryService } from '../category.service';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {
  updatedQuiz: any = {};


  constructor(private fb:FormBuilder,public _auth:AuthService,private route: ActivatedRoute, private _router:Router, private quizService:QuizService) { }

  updateQuiz(categoryName, quizNo,question,image1,image2,image3,image4,correctOption,checkMessage){
    this.route.params.subscribe(params =>{
      this.quizService.updateQuiz(categoryName, quizNo,question,image1,image2,image3,image4,correctOption,checkMessage,params.id);
      alert('quiz updated successfully');
      this._router.navigate(['learn']);
    });
  }
  ngOnInit(): void {
  }

}
