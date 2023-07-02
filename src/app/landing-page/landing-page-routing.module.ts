import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPagePage } from './landing-page.page';

const routes: Routes = [
  {
    path: '',
    component: LandingPagePage,
    children: [
      {
        path: 'threat',
        children: [
          {
          path: '',
          loadChildren: () => import('../threat/threat.module').then( m => m.ThreatPageModule)
        }
      ]
      },
      {
        path: 'incident',
        children: [
          {
          path: '',
          loadChildren: () => import('../incident/incident.module').then( m => m.IncidentPageModule)
        }
      ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPagePageRoutingModule {}
