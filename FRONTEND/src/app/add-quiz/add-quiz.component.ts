import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {FormGroup, FormControl, FormBuilder, Validators,Form} from '@angular/forms';
import { Router } from '@angular/router';
import { QuizService } from '../quiz.service';


@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  addQuizForm:FormGroup=new FormGroup({
        categoryName: new FormControl(''),
        quizNo: new FormControl(''),
        question: new FormControl(''),
        image1:new FormControl(''),
        image2:new FormControl(''),
        image3:new FormControl(''),
        image4:new FormControl(''),
        correctOption:new FormControl(''),
        checkMessage:new FormControl('')
  });
   
  newQuiz = {categoryName:'',quizNo:'',question:'',image1:'',image2:'',image3:'',image4:'',correctOption:'',checkMessage:''};
  disableBtn = true;

  constructor(private fb:FormBuilder,public _auth:AuthService, private _router:Router,private quizService: QuizService) { }

  ngOnInit(): void {

    this.addQuizForm=this.fb.group(
      { 
        categoryName:['',Validators.required],
        quizNo:['',Validators.required],
        question:['',Validators.required],
        image1:['',Validators.required],
        image2:['',Validators.required],
        image3:['',Validators.required],
        image4:['',Validators.required],
        correctOption:['',Validators.required],
        checkMessage:['',Validators.required]
        
    }
    );
    
    console.log(this.newQuiz);
    

  }
   
  addQuiz(){
    this.quizService.newQuiz(this.newQuiz)
    .subscribe(
      res=>{
        console.log(res);
        this._router.navigate(['learn'])
      },
      err=>console.log(err)
    )
  }
  

}
