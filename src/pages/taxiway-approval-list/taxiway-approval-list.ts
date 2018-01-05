import { Component } from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import { IonicPage,NavController,NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { RunwayApprovalChecklistDetails } from '../runway-approval-checklist-details/runway-approval-checklist-details';
import { TaxiwayApprovalChecklistDetails } from '../taxiway-approval-checklist-details/taxiway-approval-checklist-details';


/**
 * Generated class for the TaxiwayApprovalList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-taxiway-approval-list',
  templateUrl: 'taxiway-approval-list.html',
})
export class TaxiwayApprovalList {
  taxiwayapprovallist: any;

  constructor(public navCtrl: NavController, public navParams: NavParams , public http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaxiwayApprovalList');
  }
  ionViewWillEnter(){
    this.http.get('https://mial.csia.in/MicroService/api/TaxiwayApprovalList/').map(res => res.json()).subscribe( data1=> {
    this.taxiwayapprovallist = data1;
    console.log(this.taxiwayapprovallist);
    },
    err => {
      console.log("error has occured");      
    });
}
onSubmit(date,time)
{
this.navCtrl.push(TaxiwayApprovalChecklistDetails, { date: date, time: time} );
  
}
}
