import { Component } from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import { IonicPage,NavController,NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { TaxiwayChecklistDetails } from '../taxiway-checklist-details/taxiway-checklist-details';


/**
 * Generated class for the TaxiwayNewUpload page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-taxiway-new-upload',
  templateUrl: 'taxiway-new-upload.html',
})
export class TaxiwayNewUpload {
  taxiwaylist: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaxiwayNewUpload');
  }
  ionViewWillEnter(){
    this.http.get('https://mial.csia.in/MicroService/api/TaxiwayChecklist/GetTaxiwayChecklists').map(res => res.json()).subscribe( data1=> {
    this.taxiwaylist = data1;
    
    },
    err => {
      console.log("error has occured");      
    });
}
onSubmit(date,time)
{
this.navCtrl.push(TaxiwayChecklistDetails, { date: date, time: time} );
}
}
