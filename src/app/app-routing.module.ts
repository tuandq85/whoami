import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoleanEditorComponent } from './shop/golean-editor/golean-editor.component';
import { GoleanComponent } from './shop/golean/golean.component';
import { GoleanProductComponent } from './shop/golean-product/golean-product.component';
import { IngredientsComponent } from './shop/ingredients/ingredients.component';


const routes: Routes = [
  { path:'editor', component: GoleanEditorComponent},
  { path:'golean', component: GoleanComponent},
  { path:'golean/product', component: GoleanProductComponent},
  { path:'golean/ingredients', component: IngredientsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
