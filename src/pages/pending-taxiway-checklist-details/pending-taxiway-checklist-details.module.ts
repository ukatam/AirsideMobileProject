import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendingTaxiwayChecklistDetails } from './pending-taxiway-checklist-details';

@NgModule({
  declarations: [
    PendingTaxiwayChecklistDetails,
  ],
  imports: [
    IonicPageModule.forChild(PendingTaxiwayChecklistDetails),
  ],
})
export class PendingTaxiwayChecklistDetailsModule {}
