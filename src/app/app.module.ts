import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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
import { RegisterComponent } from './register/register.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { ContactComponent } from './contact/contact.component';

// [Ng-Bootstrap]
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { EditorComponent } from './quiz/editor/editor.component';
import { ReviewComponent } from './quiz/review/review.component';
import { TestComponent } from './quiz/test/test.component';
import { HomeComponent } from './home/home.component';
import { SearchGroupComponent } from './search-group/search-group.component';

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
    LoginComponent,
    RegisterComponent,
    SubscriptionComponent,
    ContactComponent,
    EditorComponent,
    ReviewComponent,
    TestComponent,
    HomeComponent,
    SearchGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RichTextEditorAllModule,
    FormsModule,
    SocialLoginModule.initialize(config),
    NgbModule,
    NgbAlertModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
