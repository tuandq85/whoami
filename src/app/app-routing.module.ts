import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SearchGroupComponent } from './search-group/search-group.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'your-channel', component: SearchGroupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/:group-id', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
