import { Component } from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import { IonicPage,NavController,NavParams } from 'ionic-angular';
import { PendingTaxiwayChecklistDetails } from '../pending-taxiway-checklist-details/pending-taxiway-checklist-details';
import 'rxjs/add/operator/map';

/**
 * Generated class for the PendingTaxiwayTicketlist page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-pending-taxiway-ticketlist',
  templateUrl: 'pending-taxiway-ticketlist.html',
})
export class PendingTaxiwayTicketlist {
  taxiwaylist: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http ) {
  }
  ionViewWillEnter(){
    this.http.get('https://mial.csia.in/MicroService/api/PendingTaxiwayChecklist/').map(res => res.json()).subscribe( data1=> {
        this.taxiwaylist = data1;
        
        },
        err => {
          console.log("error has occured");
         
        });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingTaxiwayTicketlist');
  }
  onSubmit(date,time)
  {
  this.navCtrl.push(PendingTaxiwayChecklistDetails, { date: date, time: time} );
    
  }

}
