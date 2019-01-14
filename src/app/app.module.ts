import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { MatButtonModule} from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomescreenComponent } from './homescreen.component';
import { HowItWorksComponent } from './how-it-works.component';
import { WaitlistFormComponent } from './waitlist-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomescreenComponent,
    HowItWorksComponent,
    WaitlistFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // Database module
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent], 
  entryComponents: [WaitlistFormComponent],
})
export class AppModule { }
