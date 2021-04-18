import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public http:HttpClient) { }
  getCategories(){
    return this.http.get("http://localhost:3000/category");
  }
     
  newCategory(item){
    return this.http.post("http://localhost:3000/addcategory",{"category":item});
  }

  updateCategory(categoryNo,categoryName,imageName, id){
    const updatedCategory = {
      categoryNo,categoryName,imageName
    };
    return this.http.post(`http://localhost:3000/updatecategory/${id}`, updatedCategory)
    .subscribe((data)=> {console.log(data)});
  }

  deleteCategory(id){
    return this.http.delete(`http://localhost:3000/deletecategory/${id}`);
  }
}
