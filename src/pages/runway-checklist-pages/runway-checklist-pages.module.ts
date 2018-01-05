import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RunwayChecklistPages } from './runway-checklist-pages';

@NgModule({
  declarations: [
    RunwayChecklistPages,
  ],
  imports: [
    IonicPageModule.forChild(RunwayChecklistPages),
  ],
})
export class RunwayChecklistPagesModule {}
