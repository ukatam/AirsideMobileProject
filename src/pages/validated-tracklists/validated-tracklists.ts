import { Component } from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import { IonicPage,NavController,NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { RunwayChecklistDetails } from '../runway-checklist-details/runway-checklist-details';

@IonicPage()
@Component({
  selector: 'page-validated-tracklists',
  templateUrl: 'validated-tracklists.html',
})
export class ValidatedTracklists {
  runwaylist: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValidatedTracklists');
  }
  ionViewWillEnter(){
        this.http.get('https://mial.csia.in/MicroService/api/RunwayChecklist/').map(res => res.json()).subscribe( data1=> {
        this.runwaylist = data1;
        console.log(this.runwaylist);
        },
        err => {
          console.log("error has occured");      
        });
  }
  onSubmit(date,time)
  {
    this.navCtrl.push(RunwayChecklistDetails, { date: date, time: time} );
  }
}