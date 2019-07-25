import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoleanEditorComponent } from './shop/golean-editor/golean-editor.component';
import { GoleanComponent } from './shop/golean/golean.component';
import { GoleanProductComponent } from './shop/golean-product/golean-product.component';
import { IngredientsComponent } from './shop/ingredients/ingredients.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { SubscriptionComponent } from './subscription/subscription.component';


const routes: Routes = [
  { path: 'editor', component: GoleanEditorComponent },
  { path: 'golean', component: GoleanComponent },
  { path: 'golean/product', component: GoleanProductComponent },
  { path: 'golean/ingredients', component: IngredientsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'subscription', component: SubscriptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
