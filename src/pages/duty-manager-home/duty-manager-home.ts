import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import{ ValidatedTracklists  } from '../validated-tracklists/validated-tracklists'
import { RunwayChecklist } from '../runwaychecklist/runwaychecklist';
import { PendingTicketList } from '../pending-ticket-list/pending-ticket-list';
import { RunwayChecklistPages } from '../runway-checklist-pages/runway-checklist-pages';
import { TaxiwayChecklistPages } from '../taxiway-checklist-pages/taxiway-checklist-pages';
import { ApronChecklistPages } from '../apron-checklist-pages/apron-checklist-pages';

@Component({
  selector: 'page-duty-manager-home',
  templateUrl: 'duty-manager-home.html',
})
export class DutyManagerHome {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DutyManagerHome');
  }

  onRunwaypagesclick(){
    this.navCtrl.push(RunwayChecklistPages);
  }
  onTaxiwaypagesclick(){
      this.navCtrl.push(TaxiwayChecklistPages);
  }
  onApronChecklistPage(){
      this.navCtrl.push(ApronChecklistPages);
  }
}
