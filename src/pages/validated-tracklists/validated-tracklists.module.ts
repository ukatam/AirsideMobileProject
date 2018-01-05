import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ValidatedTracklists } from './validated-tracklists';

@NgModule({
  declarations: [
    ValidatedTracklists,
  ],
  imports: [
    IonicPageModule.forChild(ValidatedTracklists),
  ],
})
export class ValidatedTracklistsModule {}
