import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoleanEditorComponent } from './shop/golean-editor/golean-editor.component';


const routes: Routes = [
  { path:'editor', component: GoleanEditorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
