import { Component } from '@angular/core';
import { IonicPage,NavController,NavParams, AlertController } from 'ionic-angular'; 
import { Http,Headers } from '@angular/http';

/**
 * Generated class for the TaxiwayChecklistDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-taxiway-checklist-details',
  templateUrl: 'taxiway-checklist-details.html',
})
export class TaxiwayChecklistDetails {
  dutymanagerremarks: any;
  checklistdetails: any;
  date: any;
  time: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public alert :AlertController) {
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
          this.checklistdetails=data;
          console.log(data);
    },
    error => {
          console.log(error);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaxiwayChecklistDetails');
  }
  sendMessage(){
    let headers =new Headers();
     headers.append("Content-Type",'application/json');
        headers.append("Accept",'application/json');
       
        let postParams1={
            date:this.date,
            time:this.time,
            remarks:this.dutymanagerremarks,
  
        }
  
        this.http.post('https://mial.csia.in/MicroService/api/TaxiwayChecklistApproval',JSON.stringify(postParams1),{ headers : headers })
        .map(res => res.json()).subscribe(data => {
         
              console.log(data);
                this.showPrompt();
        },
        error => {
              console.log(error);
        });
  
  
            let headers1 =new Headers();
            headers1.append("Authorization",'Basic Q1NJTVVNOkNzaUAxMjM0')
            headers1.append("Content-Type",'application/json');
            headers1.append("Accept",'application/json');
            let Params={
            messages: [
            {
              from:"MIALGM",
              to: [ "+919823836069", "+919920034374", "+918008008638" ],
              text: "Runway Checklist has been approved by Duty Manager"
            }
            ]}
  
            this.http.post('https://api.infobip.com/sms/1/text/multi',JSON.stringify(Params),{headers:headers1})
            .map(res => res.json()) .subscribe(data => {
              this.showPrompt();
            },
            error => {
                console.log(error);
            });
        }
  
        approveChecklist(){
  
           let headers =new Headers();
     headers.append("Content-Type",'application/json');
        headers.append("Accept",'application/json');
       
        let postParams1={
            date:this.date,
            time:this.time,
            remarks:this.dutymanagerremarks,
            ApprovalStatus:1
        }
  
        this.http.post('https://mial.csia.in/MicroService/api/RunwayChecklistApproval',JSON.stringify(postParams1),{ headers : headers })
        .map(res => res.json()).subscribe(data => {
         
              console.log(data);
                this.showPrompt();
        },
        error => {
              console.log(error);
        });
  
          let headers1 =new Headers();
            headers1.append("Authorization",'Basic Q1NJTVVNOkNzaUAxMjM0')
            headers1.append("Content-Type",'application/json');
            headers1.append("Accept",'application/json');
            let Params={
            messages: [
            {
              from:"MIALGM",
              to: [ "+919823836069", "+919920034374", "+918008008638" ],
              text: "Runway Checklist has been rejected by Duty Manager"
            }
            ]}
  
            this.http.post('https://api.infobip.com/sms/1/text/multi',JSON.stringify(Params),{headers:headers1})
            .map(res => res.json()) .subscribe(data => {
              this.showPrompt();
            },
            error => {
                console.log(error);
            });
        }
  
        showPrompt(){
          let prompt = this.alert.create({
          title: 'Note',
          message: 'Message sent successfully!',
          buttons: [
          {
            text: 'ok',
            handler: data => {
              console.log('Data saved successfully');
            }
          }]
          });
          prompt.present();
        }
  
}
