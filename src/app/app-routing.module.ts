import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

import { GoleanEditorComponent } from './golean-editor/golean-editor.component';

const routes: Routes = [
  { path:'', component: EmployeeComponent},
  { path:'addemployee', component: AddEmployeeComponent},
  { path:'test', component: GoleanEditorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
