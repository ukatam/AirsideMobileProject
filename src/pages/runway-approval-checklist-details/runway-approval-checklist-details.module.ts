import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RunwayApprovalChecklistDetails } from './runway-approval-checklist-details';

@NgModule({
  declarations: [
    RunwayApprovalChecklistDetails,
  ],
  imports: [
    IonicPageModule.forChild(RunwayApprovalChecklistDetails),
  ],
})
export class RunwayApprovalChecklistDetailsModule {}
