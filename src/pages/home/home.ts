import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{ ValidatedTracklists  } from '../validated-tracklists/validated-tracklists'
import { RunwayChecklist } from '../runwaychecklist/runwaychecklist';
import { TaxiwayChecklist } from '../taxiway-checklist/taxiway-checklist';
import { ApronChecklistForm } from '../apron-checklist-form/apron-checklist-form';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  onRunwayChecklistPage(){
   this.navCtrl.push(RunwayChecklist);
  }
  onTaxiwayChecklistPage(){
    this.navCtrl.push(TaxiwayChecklist);
  }
  onApronChecklistPage(){
    this.navCtrl.push(ApronChecklistForm);
  }

}
