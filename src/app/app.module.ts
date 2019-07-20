import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { GoleanComponent } from './shop/golean/golean.component';
import { ProductDetailComponent } from './shop/product-detail/product-detail.component';
import { IntroItemDetailComponent } from './shop/intro-item-detail/intro-item-detail.component';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HeaderComponent,
    FooterComponent,
    AddEmployeeComponent,
    GoleanComponent,
    ProductDetailComponent,
    IntroItemDetailComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
