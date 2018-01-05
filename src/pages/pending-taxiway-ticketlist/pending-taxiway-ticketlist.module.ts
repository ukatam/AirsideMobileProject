import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendingTaxiwayTicketlist } from './pending-taxiway-ticketlist';

@NgModule({
  declarations: [
    PendingTaxiwayTicketlist,
  ],
  imports: [
    IonicPageModule.forChild(PendingTaxiwayTicketlist),
  ],
})
export class PendingTaxiwayTicketlistModule {}
