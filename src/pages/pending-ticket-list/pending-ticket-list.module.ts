import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendingTicketList } from './pending-ticket-list';

@NgModule({
  declarations: [
    PendingTicketList,
  ],
  imports: [
    IonicPageModule.forChild(PendingTicketList),
  ],
})
export class PendingTicketListModule {}
