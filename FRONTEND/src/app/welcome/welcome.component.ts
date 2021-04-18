import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  title:String="Menstr-Ed";
  constructor(public _auth:AuthService) { }

  ngOnInit(): void {
  }

}
