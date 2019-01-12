import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomescreenComponent } from './homescreen.component'

const routes: Routes = [
      { path: '', component: HomescreenComponent },
      { path: ':category', component: HomescreenComponent },
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
