import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApronChecklistDetails } from './apron-checklist-details';

@NgModule({
  declarations: [
    ApronChecklistDetails,
  ],
  imports: [
    IonicPageModule.forChild(ApronChecklistDetails),
  ],
})
export class ApronChecklistDetailsModule {}
