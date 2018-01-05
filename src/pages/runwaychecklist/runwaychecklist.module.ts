import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RunwayChecklist } from './runwaychecklist';

@NgModule({
  declarations: [
    RunwayChecklist,
  ],
  imports: [
    IonicPageModule.forChild(RunwayChecklist),
  ],
})
export class RunwaychecklistModule {}
