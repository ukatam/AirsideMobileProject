import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import{ ValidatedTracklists  } from '../validated-tracklists/validated-tracklists'
import { RunwayChecklist } from '../runwaychecklist/runwaychecklist';
import { PendingTicketList } from '../pending-ticket-list/pending-ticket-list';
import { PendingTaxiwayTicketlist } from '../pending-taxiway-ticketlist/pending-taxiway-ticketlist';
import { TaxiwayNewUpload } from '../taxiway-new-upload/taxiway-new-upload';
import { TaxiwayApprovalList } from '../taxiway-approval-list/taxiway-approval-list';
/**
 * Generated class for the TaxiwayChecklistPages page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-taxiway-checklist-pages',
  templateUrl: 'taxiway-checklist-pages.html',
})
export class TaxiwayChecklistPages {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaxiwayChecklistPages');
  }
  onnewuploadclick(){
    this.navCtrl.push(TaxiwayNewUpload);
      }
      onPendingChecklistclick(){
        this.navCtrl.push(PendingTaxiwayTicketlist);
      }
      onApprovedChecklistclick(){
        this.navCtrl.push(TaxiwayApprovalList);
      }
}
