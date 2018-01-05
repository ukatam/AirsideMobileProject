import { Component } from '@angular/core';
import { IonicPage,NavController,NavParams, AlertController } from 'ionic-angular'; 
import { Http,Headers } from '@angular/http';

/**
 * Generated class for the RunwayApprovalChecklistDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-runway-approval-checklist-details',
  templateUrl: 'runway-approval-checklist-details.html',
})
export class RunwayApprovalChecklistDetails {
  runwaydetails: any;
  date: any;
  time: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public alert: AlertController) {
    this.date=navParams.get("date");
    this.time=navParams.get("time");
    let headers1 =new Headers();
  
    headers1.append("Content-Type",'application/json');
    headers1.append("Accept",'application/json');
   
    let postParams1={
        date:this.date,
        time:this.time
    }

    this.http.post('https://mial.csia.in/MicroService/api/RunwayChecklistDetails',JSON.stringify(postParams1),{ headers : headers1 })
    .map(res => res.json()).subscribe(data => {
          this.runwaydetails=data;
          console.log(data);
    },
    error => {
          console.log(error);
    });
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad RunwayApprovalChecklistDetails');
  }

}
