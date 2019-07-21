import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoleanEditorComponent } from './shop/golean-editor/golean-editor.component';
import { GoleanComponent } from './shop/golean/golean.component';
import { GoleanProductComponent } from './shop/golean-product/golean-product.component';
import { IngredientsComponent } from './shop/ingredients/ingredients.component';



@NgModule({
  declarations: [
    AppComponent,
    GoleanEditorComponent,
    GoleanComponent,
    GoleanProductComponent,
    IngredientsComponent
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
