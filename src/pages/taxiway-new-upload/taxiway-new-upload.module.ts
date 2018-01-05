import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaxiwayNewUpload } from './taxiway-new-upload';

@NgModule({
  declarations: [
    TaxiwayNewUpload,
  ],
  imports: [
    IonicPageModule.forChild(TaxiwayNewUpload),
  ],
})
export class TaxiwayNewUploadModule {}
