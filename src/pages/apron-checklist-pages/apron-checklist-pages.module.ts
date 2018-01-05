import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApronChecklistPages } from './apron-checklist-pages';

@NgModule({
  declarations: [
    ApronChecklistPages,
  ],
  imports: [
    IonicPageModule.forChild(ApronChecklistPages),
  ],
})
export class ApronChecklistPagesModule {}
