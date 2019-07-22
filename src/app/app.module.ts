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
import { LoginComponent } from './login/login.component';

// Importing social login module and facebook login provider.
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';

// Client id for the facebook oauth. This is used for validation of our application to facebook.
// https://developers.facebook.com/
const facebook_oauth_client_id: string = 'Your-facebook-client-id.';
let config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider(facebook_oauth_client_id)
  }
]);

@NgModule({
  declarations: [
    AppComponent,
    GoleanEditorComponent,
    GoleanComponent,
    GoleanProductComponent,
    IngredientsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RichTextEditorAllModule,
    FormsModule,
    SocialLoginModule.initialize(config)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
