import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RunwayChecklistDetails } from './runway-checklist-details';

@NgModule({
  declarations: [
    RunwayChecklistDetails,
  ],
  imports: [
    IonicPageModule.forChild(RunwayChecklistDetails),
  ],
})
export class RunwayChecklistDetailsModule {}
