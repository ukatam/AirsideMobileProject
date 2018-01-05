import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaxiwayChecklistPages } from './taxiway-checklist-pages';

@NgModule({
  declarations: [
    TaxiwayChecklistPages,
  ],
  imports: [
    IonicPageModule.forChild(TaxiwayChecklistPages),
  ],
})
export class TaxiwayChecklistPagesModule {}
