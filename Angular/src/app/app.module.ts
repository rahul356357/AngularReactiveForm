import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AppRouter} from './app.routing';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthenticationService} from './authentication.service';
import {HttpModule} from '@angular/http';
import {Server} from './config/www.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRouter, ReactiveFormsModule, HttpModule
  ],
  providers: [AuthenticationService,Server],
  bootstrap: [AppComponent]
})
export class AppModule { }
