import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewComponent } from './new/new.component';
import { ShowComponent } from './show/show.component';
import { AnswerComponent } from './answer/answer.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
  { path: 'logout', redirectTo: '', pathMatch: 'full'},
  { path: 'create', component: NewComponent, pathMatch: 'full'},
  { path: 'questions/:id', component: ShowComponent, pathMatch: 'full'},
  { path: 'questions/:id/new-answer', component: AnswerComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
