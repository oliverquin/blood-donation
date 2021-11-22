import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DonarRegistrationComponent } from './donar-registration/donar-registration.component';
import { FormsModule } from '@angular/forms'; 
import { DonarService } from './donar.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewDonarComponent } from './view-donar/view-donar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DonarRegistrationComponent,
    ViewDonarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DonarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
