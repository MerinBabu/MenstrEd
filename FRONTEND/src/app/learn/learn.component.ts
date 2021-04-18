import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { CategoryService } from '../category.service';
import {CategoryModel} from './category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {

  categories;
  

  constructor(public _auth:AuthService,private _router:Router,public categoryService:CategoryService ) { }

  deleteCategory(id){
    this.categoryService.deleteCategory(id)
    .subscribe((data)=> {
      console.log(data);
      alert('Category deleted successfully');
      this._router.navigate(['home']);
    });
  }

  ngOnInit(): void {
    
    this.categoryService.getCategories().subscribe((data)=>{
      this.categories=JSON.parse(JSON.stringify(data));
    })
   
   
  }

}



