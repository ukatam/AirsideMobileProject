import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaxiwayApprovalList } from './taxiway-approval-list';

@NgModule({
  declarations: [
    TaxiwayApprovalList,
  ],
  imports: [
    IonicPageModule.forChild(TaxiwayApprovalList),
  ],
})
export class TaxiwayApprovalListModule {}
