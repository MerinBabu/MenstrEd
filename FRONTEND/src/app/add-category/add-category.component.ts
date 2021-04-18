import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {FormGroup, FormControl, FormBuilder, Validators,Form} from '@angular/forms';
import { Router } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { CategoryService } from '../category.service';
// import {FileUploader} from 'ng2-file-upload/ng2-file-upload';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  // public uploader:FileUploader=new FileUploader({
  //   url:"http://localhost:3000/addcategory",
  //   itemAlias:'image'
  // });

  addCategoryForm:FormGroup=new FormGroup({
    categoryNo: new FormControl(''),
    categoryName: new FormControl(''),
    imageName: new FormControl(''),
  });
   
  newCategory = {categoryNo:'',categoryName:'',imageName:''};
  disableBtn = true;

  constructor(private fb:FormBuilder,public _auth:AuthService, private _router:Router, private categoryService:CategoryService) { }

  
  ngOnInit(): void {

    // this.uploader.onAfterAddingFile=(file)=>{
    //   file.withCredentials=false;
    // };
    // this.uploader.onCompleteItem=(item:any,status:any)=>{
    //   console.log("Uploaded file details",item);
    // }

    this.addCategoryForm=this.fb.group(
      { categoryNo: ['',Validators.required],
        categoryName: ['',Validators.required],
        imageName: ['',Validators.required],
        
    }
    );
    
    console.log(this.newCategory);
    

  }
   
  addCategory(){
    this.categoryService.newCategory(this.newCategory)
    .subscribe(
      res=>{
        console.log(res);
        this._router.navigate(['learn'])
      },
      err=>console.log(err)
    )
  }

}
