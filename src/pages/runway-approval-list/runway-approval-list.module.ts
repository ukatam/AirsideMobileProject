import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RunwayApprovalList } from './runway-approval-list';

@NgModule({
  declarations: [
    RunwayApprovalList,
  ],
  imports: [
    IonicPageModule.forChild(RunwayApprovalList),
  ],
})
export class RunwayApprovalListModule {}
