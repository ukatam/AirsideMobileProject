import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaxiwayApprovalChecklistDetails } from './taxiway-approval-checklist-details';

@NgModule({
  declarations: [
    TaxiwayApprovalChecklistDetails,
  ],
  imports: [
    IonicPageModule.forChild(TaxiwayApprovalChecklistDetails),
  ],
})
export class TaxiwayApprovalChecklistDetailsModule {}
