import { Injectable } from '@angular/core';
// import { AnyMxRecord } from 'node:dns';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
loginUser(User){
  return this.http.post<any>("http://localhost:3000/auth/login",User);
  
}

registerUser(User){
  return this.http.post<any>('http://localhost:3000/auth/register', User);
}
  constructor(private http: HttpClient, public _router:Router) { }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken()
  {
    return localStorage.getItem('token');
  }

  logoutUser()
  {
    localStorage.removeItem('token');
    this._router.navigate(['']);
  }

  
}
