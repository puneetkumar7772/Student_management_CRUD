import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './Components/add-student/add-student.component';
import { ListStudentComponent } from './Components/list-student/list-student.component';
import { LoginStudentComponent } from './Components/login-student/login-student.component';
import { RegisterStudentComponent } from './Components/register-student/register-student.component';

const routes: Routes = [
 {path:'add',component:AddStudentComponent},
 {path:'list',component:ListStudentComponent},
 {path:'login',component:LoginStudentComponent},
 {path:'register',component:RegisterStudentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
