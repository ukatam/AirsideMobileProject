import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApprovedApronChecklist } from './approved-apron-checklist';

@NgModule({
  declarations: [
    ApprovedApronChecklist,
  ],
  imports: [
    IonicPageModule.forChild(ApprovedApronChecklist),
  ],
})
export class ApprovedApronChecklistModule {}
