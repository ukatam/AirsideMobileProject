import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApronChecklistForm } from './apron-checklist-form';

@NgModule({
  declarations: [
    ApronChecklistForm,
  ],
  imports: [
    IonicPageModule.forChild(ApronChecklistForm),
  ],
})
export class ApronChecklistFormModule {}
