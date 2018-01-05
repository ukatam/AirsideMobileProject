import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';
import { Http ,Headers} from '@angular/http';

/**
 * Generated class for the PendingTaxiwayChecklistDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-pending-taxiway-checklist-details',
  templateUrl: 'pending-taxiway-checklist-details.html',
})
export class PendingTaxiwayChecklistDetails {
  date: any;
  time: any;
  taxiwaydetails: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
    this.date=navParams.get("date");
    this.time=navParams.get("time");
    let headers1 =new Headers();
  
    headers1.append("Content-Type",'application/json');
    headers1.append("Accept",'application/json');
   
    let postParams1={
        date:this.date,
        time:this.time
    }

    this.http.post('https://mial.csia.in/MicroService/api/TaxiwayChecklistDetails',JSON.stringify(postParams1),{ headers : headers1 })
    .map(res => res.json()).subscribe(data => {
          this.taxiwaydetails=data;
          console.log(data);
    },
    error => {
          console.log(error);
    });
}
sendMessage(myForm){
  console.log(myForm.form.value.inputs);
    let headers1 =new Headers();
 
   headers1.append("Content-Type",'application/json');
   headers1.append("Accept",'application/json');
  
   let postParams1=myForm.form.value.inputs;
   postParams1['date']=this.date;
   postParams1['time']=this.time;
  
console.log(postParams1);
   this.http.post('https://mial.csia.in/MicroService/api/TaxiwayActionTaken',JSON.stringify(postParams1),{ headers : headers1 })
   .map(res => res.json()).subscribe(data => {
    
   },
   error => {
         console.log(error);
   });
       
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingTaxiwayChecklistDetails');
  }

}
