import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoleanEditorComponent } from './shop/golean-editor/golean-editor.component';



@NgModule({
  declarations: [
    AppComponent,
    GoleanEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RichTextEditorAllModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
