import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SearchGroupComponent } from './search-group/search-group.component';
import { RegisterGroupComponent } from './register-group/register-group.component';
import { MainComponent } from './main/main.component';
import { EditorComponent } from './quiz/editor/editor.component';
import { ReviewComponent } from './quiz/review/review.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'your-channel', component: SearchGroupComponent },
  { path: 'your-group', component: RegisterGroupComponent },
  // { path: 'login', component: LoginComponent },
  { path: 'login/:group-id', component: LoginComponent },
  { path: 'main/:active-group', component: MainComponent },
  { path: 'quiz/editor', component: EditorComponent },
  { path: 'quiz/review', component: ReviewComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
