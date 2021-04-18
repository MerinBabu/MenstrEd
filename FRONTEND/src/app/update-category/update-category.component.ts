import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {FormGroup, FormControl, FormBuilder, Validators,Form} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  updatedCategory: any = {};

  

  constructor(private fb:FormBuilder,public _auth:AuthService,private route: ActivatedRoute, private _router:Router, private categoryService:CategoryService) { }

  updateCategory(categoryNo, categoryName, imageName){
    this.route.params.subscribe(params =>{
      this.categoryService.updateCategory(categoryNo, categoryName, imageName, params.id);
      alert('category updated successfully');
      this._router.navigate(['learn']);
    });
  }

  ngOnInit(): void {

    
  }


  
}

