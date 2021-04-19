import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { LearnComponent } from './learn/learn.component';
import { DiscussComponent } from './discuss/discuss.component';
import {TokenInterceptorService} from './token-interceptor.service';
import { CategoryService } from './category.service';
import {FileSelectDirective} from 'ng2-file-upload';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizService } from './quiz.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AddCategoryComponent,
    AddQuizComponent,
    LearnComponent,
    DiscussComponent,
    UpdateCategoryComponent,
    QuizComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    
    
    
  ],
  providers: [AuthService,
              // {
              //   provide:HTTP_INTERCEPTORS,
              //   useClass:TokenInterceptorService,
              //   multi:true
              // }
              CategoryService,
              QuizService
              
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
