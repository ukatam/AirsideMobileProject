import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http,Headers } from '@angular/http';

@Component({
  selector: 'page-approved-apron-checklist',
  templateUrl: 'approved-apron-checklist.html',
})
export class ApprovedApronChecklist {
  apronapprovedlist: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApprovedApronChecklist');
  }
  ionViewWillEnter(){
    this.http.get('https://mial.csia.in/MicroService/api/ApronApprovalList/').map(res => res.json()).subscribe( data1=> {
    this.apronapprovedlist = data1;
    },
    err => {
      console.log("error has occured");      
    });
}
onSubmit(date,time){

}
}
