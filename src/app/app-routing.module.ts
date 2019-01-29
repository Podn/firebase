import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component'
import { HomescreenComponent } from './homescreen.component'

const routes: Routes = [
      { path: '', component: HomescreenComponent },
      { path: 'business',
          component: HomescreenComponent,
          data: { type: 'business', page: 'home' },
      },
      { path: 'business/waitlist',
          component: HomescreenComponent,
          data: { type: 'business', page: 'waitlist' },
      },
      { path: 'business/pricing',
          component: HomescreenComponent,
          data: { type: 'business', page: 'pricing' },
      },
      { path: 'business/how-it-works',
          component: HomescreenComponent,
          data: { type: 'business', page: 'how-it-works' },
      },
      { path: 'editor',
          component: HomescreenComponent,
          data: { type: 'editor', page: 'home' },
      },
      { path: 'editor/apply',
          component: HomescreenComponent,
          data: { type: 'editor', page: 'waitlist' },
      },
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
