import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing.modele';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { SocialLoginModule, AuthServiceConfig } from 'angular4-social-login';
import { FacebookLoginProvider } from 'angular4-social-login';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AutenticationService } from './autentication.service';
import { NgBootstrapModule } from './material/ngbootstrap.module';
import { CarouselComponent } from './shared/carousel/carousel.component'

const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('130597107603323')
  }
]);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ToolbarComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgBootstrapModule,
    AppRoutingModule,
    SocialLoginModule.initialize(config)
  ],
  providers: [MaterialModule, AutenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
