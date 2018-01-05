import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http,Headers,RequestOptions} from '@angular/http';
import { PendingTaxiwayChecklistDetails } from '../pending-taxiway-checklist-details/pending-taxiway-checklist-details';
@Component({
  selector: 'page-pending-for-approval-apron-checklist',
  templateUrl: 'pending-for-approval-apron-checklist.html',
})
export class PendingForApprovalApronChecklist {
  apronlist: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
  }
  ionViewWillEnter(){
    this.http.get('https://mial.csia.in/MicroService/api/PendingApronChecklist/').map(res => res.json()).subscribe( data1=> {
        this.apronlist = data1;
        
        },
        err => {
          console.log("error has occured");
         
        });

  }
  onSubmit(date,time)
  {
  this.navCtrl.push(PendingTaxiwayChecklistDetails, { date: date, time: time} );
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingForApprovalApronChecklist');
  }

}
