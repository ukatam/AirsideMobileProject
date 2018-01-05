import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import{ ValidatedTracklists  } from '../validated-tracklists/validated-tracklists'
import { RunwayChecklist } from '../runwaychecklist/runwaychecklist';
import { PendingTicketList } from '../pending-ticket-list/pending-ticket-list';
import { RunwayApprovalList } from '../runway-approval-list/runway-approval-list';

@Component({
  selector: 'page-runway-checklist-pages',
  templateUrl: 'runway-checklist-pages.html',
})
export class RunwayChecklistPages {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RunwayChecklistPages');
  }
  onnewuploadclick(){
this.navCtrl.push(ValidatedTracklists);
  }
  onPendingChecklistclick(){
    this.navCtrl.push(PendingTicketList);
  }
  onApprovalChecklistclick(){
    this.navCtrl.push(RunwayApprovalList);
  }
}
