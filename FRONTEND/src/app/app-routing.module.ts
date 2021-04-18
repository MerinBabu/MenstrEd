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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
