import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaxiwayChecklistDetails } from './taxiway-checklist-details';

@NgModule({
  declarations: [
    TaxiwayChecklistDetails,
  ],
  imports: [
    IonicPageModule.forChild(TaxiwayChecklistDetails),
  ],
})
export class TaxiwayChecklistDetailsModule {}
