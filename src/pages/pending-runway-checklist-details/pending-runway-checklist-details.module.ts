import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendingRunwayChecklistDetails } from './pending-runway-checklist-details';

@NgModule({
  declarations: [
    PendingRunwayChecklistDetails,
  ],
  imports: [
    IonicPageModule.forChild(PendingRunwayChecklistDetails),
  ],
})
export class PendingRunwayChecklistDetailsModule {}
