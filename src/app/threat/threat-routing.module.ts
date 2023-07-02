import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThreatPage } from './threat.page';

const routes: Routes = [
  {
    path: '',
    component: ThreatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThreatPageRoutingModule {}
