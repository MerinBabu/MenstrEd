import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, Form} from '@angular/forms';
import { Router } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm:FormGroup=new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phoneno: new FormControl(''),
    password: new FormControl('')
  });
   
  registeredUser = {name:'', email:'', phoneno:'',password:''};
  disableBtn = true;

  constructor(private fb:FormBuilder,public _auth:AuthService, private _router:Router) { }

  
  ngOnInit(): void {

    this.registerForm=this.fb.group(
      { name: ['',Validators.required],
        email: ['',[Validators.pattern('^[a-z0-9.%+]+@[a-z0-9.-]+\.[a-z]{2,4}'),Validators.required]],
        phoneno: ['',Validators.required],
        password: ['',[Validators.minLength(6),Validators.required]],
    }
    );
    
    console.log(this.registeredUser);
    

  }
   
  registerUser(){
    this._auth.registerUser(this.registeredUser)
    .subscribe(
      res=>{
        console.log(res);
        this._router.navigate(['login'])
      },
      err=>console.log(err)
    )
  }

}
