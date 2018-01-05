import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { NewlyUploadedApronChecklist } from '../newly-uploaded-apron-checklist/newly-uploaded-apron-checklist';
import { PendingForApprovalApronChecklist } from '../pending-for-approval-apron-checklist/pending-for-approval-apron-checklist';
import { ApprovedApronChecklist } from '../approved-apron-checklist/approved-apron-checklist';

@Component({
  selector: 'page-apron-checklist-pages',
  templateUrl: 'apron-checklist-pages.html',
})
export class ApronChecklistPages {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApronChecklistPages');
  }

  onnewuploadclick(){
    this.navCtrl.push(NewlyUploadedApronChecklist);
  }
  
  onPendingChecklistclick(){
    this.navCtrl.push(PendingForApprovalApronChecklist);
  }
      
  onApprovalChecklistclick(){
    this.navCtrl.push(ApprovedApronChecklist);
  }

}
