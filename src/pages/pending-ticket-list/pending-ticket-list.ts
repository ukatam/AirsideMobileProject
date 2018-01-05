import { Component } from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import { IonicPage,NavController,NavParams } from 'ionic-angular';
import { PendingRunwayChecklistDetails } from '../pending-runway-checklist-details/pending-runway-checklist-details';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-pending-ticket-list',
  templateUrl: 'pending-ticket-list.html',
})
export class PendingTicketList {
  runwaylist: any;

  constructor(public navCtrl: NavController, public navParams: NavParams , public http:Http ) {
  
}
 ionViewWillEnter(){
    this.http.get('https://mial.csia.in/MicroService/api/PendingChecklist/').map(res => res.json()).subscribe( data1=> {
        this.runwaylist = data1;
        console.log(this.runwaylist);
        },
        err => {
          console.log("error has occured");
         
        });

  }

  onSubmit(date,time)
{
this.navCtrl.push(PendingRunwayChecklistDetails, { date: date, time: time} );
  
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingTicketList');
  }

}
