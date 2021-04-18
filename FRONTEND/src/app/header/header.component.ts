import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {LearnComponent} from '../learn/learn.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:String="Menstr-Ed";
  constructor(public _auth:AuthService) { }

  ngOnInit(): void {
  }

}
