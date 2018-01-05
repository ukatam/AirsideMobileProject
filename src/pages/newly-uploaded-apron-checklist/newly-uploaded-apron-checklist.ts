import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http,Headers,RequestOptions} from '@angular/http';
import { ApronChecklistDetails } from '../apron-checklist-details/apron-checklist-details';

@Component({
  selector: 'page-newly-uploaded-apron-checklist',
  templateUrl: 'newly-uploaded-apron-checklist.html',
})
export class NewlyUploadedApronChecklist {

  apronchecklist: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

    ionViewDidLoad() {
      console.log('ionViewDidLoad ValidatedTracklists');
    }

    ionViewWillEnter(){
          this.http.get('https://mial.csia.in/MicroService/api/ApronChecklist/').map(res => res.json()).subscribe( data=> {
          this.apronchecklist = data;
          console.log(this.apronchecklist);
          },
          err => {
            console.log("error has occured");      
          });
    }

    onSubmit(date,time)
    {
      this.navCtrl.push(ApronChecklistDetails, { date: date, time: time} );
    }

}
