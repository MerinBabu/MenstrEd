import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { CategoryService } from '../category.service';
import {CategoryModel} from './category.model';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {

  categories;

  constructor(public _auth:AuthService,public categoryService:CategoryService ) { }

  ngOnInit(): void {
    
    this.categoryService.getCategories().subscribe((data)=>{
      this.categories=JSON.parse(JSON.stringify(data));
    })
   
   
  }

}



