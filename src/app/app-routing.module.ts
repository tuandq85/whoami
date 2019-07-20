import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { GoleanComponent } from './shop/golean/golean.component';
import { ProductDetailComponent } from './shop/product-detail/product-detail.component';
import { IntroItemDetailComponent } from './shop/intro-item-detail/intro-item-detail.component';
import { EditorComponent } from './editor/editor.component';

const routes: Routes = [
  { path: 'employees', component: EmployeeComponent },
  { path: 'addemployee', component: AddEmployeeComponent },
  // Add sub routing
  {
    path: 'shop',
    component: GoleanComponent,
    children: [
      {
        path: 'detail',
        component: ProductDetailComponent
      },
      {
        path: 'intro-item',
        component: IntroItemDetailComponent
      },
    ]
  },
  {
    path: 'editor',
    component: EditorComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
