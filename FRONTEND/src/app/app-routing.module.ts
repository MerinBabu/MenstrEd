import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './auth.guard';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LearnComponent } from './learn/learn.component';
import { DiscussComponent } from './discuss/discuss.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { QuizComponent } from './quiz/quiz.component';
import { UpdateQuizComponent } from './update-quiz/update-quiz.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'learn',component:LearnComponent},
  {path:'discuss',component:DiscussComponent},
  {path:'add-category',
   canActivate:[AuthGuard],
   component:AddCategoryComponent
  },
  {path:'add-quiz',
  canActivate:[AuthGuard],
  component:AddQuizComponent},
  {path:'update-category/:id',
   canActivate:[AuthGuard],
   component:UpdateCategoryComponent
  },
  {path:'quiz/:catname',component:QuizComponent},
  {path:'update-quiz/:id',
   canActivate:[AuthGuard],
   component:UpdateQuizComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
