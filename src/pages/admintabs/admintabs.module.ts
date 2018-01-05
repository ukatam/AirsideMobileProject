import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Admintabs } from './admintabs';

@NgModule({
  declarations: [
    Admintabs,
  ],
  imports: [
    IonicPageModule.forChild(Admintabs),
  ],
})
export class AdmintabsModule {}
