import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DutyManagerHome } from './duty-manager-home';

@NgModule({
  declarations: [
    DutyManagerHome,
  ],
  imports: [
    IonicPageModule.forChild(DutyManagerHome),
  ],
})
export class DutyManagerHomeModule {}
