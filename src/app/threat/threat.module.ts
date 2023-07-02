import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThreatPageRoutingModule } from './threat-routing.module';

import { ThreatPage } from './threat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThreatPageRoutingModule
  ],
  declarations: [ThreatPage]
})
export class ThreatPageModule {}
