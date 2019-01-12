import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomescreenComponent } from './homescreen.component';
import { HowItWorksComponent } from './how-it-works.component';

@NgModule({
  declarations: [
    AppComponent,
    HomescreenComponent,
    HowItWorksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
