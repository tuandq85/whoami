import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CKEditorModule } from 'ngx-ckeditor';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {CkeditorComponent} from  './ckeditor/ckeditor.component';
import { UserEditorComponent } from './shop/user-editor/user-editor.component';
@NgModule({
  declarations: [
    AppComponent,
    CkeditorComponent,
    UserEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CKEditorModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
