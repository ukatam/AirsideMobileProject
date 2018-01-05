import { Component } from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import { IonicPage,NavController,NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { RunwayChecklistDetails } from '../runway-checklist-details/runway-checklist-details';
import { RunwayApprovalChecklistDetails } from '../runway-approval-checklist-details/runway-approval-checklist-details';

@Component({
  selector: 'page-runway-approval-list',
  templateUrl: 'runway-approval-list.html',
})
export class RunwayApprovalList {
  runwayapprovallist: any;

  constructor(public navCtrl: NavController, public navParams: NavParams , public http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RunwayApprovalList');
  }
  ionViewWillEnter(){
    this.http.get('https://mial.csia.in/MicroService/api/RunwayApprovalList/').map(res => res.json()).subscribe( data1=> {
    this.runwayapprovallist = data1;
    console.log(this.runwayapprovallist);
    },
    err => {
      console.log("error has occured");      
    });
}
onSubmit(date,time)
{
this.navCtrl.push(RunwayApprovalChecklistDetails, { date: date, time: time} );
  
}
}
