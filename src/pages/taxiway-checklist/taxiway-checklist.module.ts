import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaxiwayChecklist } from './taxiway-checklist';

@NgModule({
  declarations: [
    TaxiwayChecklist,
  ],
  imports: [
    IonicPageModule.forChild(TaxiwayChecklist),
  ],
})
export class TaxiwayChecklistModule {}
