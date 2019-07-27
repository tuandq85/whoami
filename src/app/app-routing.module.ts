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

import { EditorComponent } from './quiz/editor/editor.component';
import { ReviewComponent } from './quiz/review/review.component';
import { TestComponent } from './quiz/test/test.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'editor', component: GoleanEditorComponent },
  { path: 'golean', component: GoleanComponent },
  { path: 'golean/product', component: GoleanProductComponent },
  { path: 'golean/ingredients', component: IngredientsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'subscription', component: SubscriptionComponent },

  { path: 'quiz-create', component: EditorComponent },
  { path: 'quiz-review', component: ReviewComponent },
  { path: 'quiz-test', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
