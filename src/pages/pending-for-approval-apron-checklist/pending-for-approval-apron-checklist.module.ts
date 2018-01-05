import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendingForApprovalApronChecklist } from './pending-for-approval-apron-checklist';

@NgModule({
  declarations: [
    PendingForApprovalApronChecklist,
  ],
  imports: [
    IonicPageModule.forChild(PendingForApprovalApronChecklist),
  ],
})
export class PendingForApprovalApronChecklistModule {}
