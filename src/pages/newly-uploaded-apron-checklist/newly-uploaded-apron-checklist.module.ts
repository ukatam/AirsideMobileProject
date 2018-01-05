import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewlyUploadedApronChecklist } from './newly-uploaded-apron-checklist';

@NgModule({
  declarations: [
    NewlyUploadedApronChecklist,
  ],
  imports: [
    IonicPageModule.forChild(NewlyUploadedApronChecklist),
  ],
})
export class NewlyUploadedApronChecklistModule {}
