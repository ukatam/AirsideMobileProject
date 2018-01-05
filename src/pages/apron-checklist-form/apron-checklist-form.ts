import { Component, OnInit } from '@angular/core';
import { NavController,NavParams, AlertController  } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { DatePipe } from '@angular/common';
export interface ApronObservations {

  stand:string,
  surfcond:string,
  marking:string,
  cleaning:string,
  serviceability:string,
  actiontaken:string
}
@Component({
  selector: 'page-apron-checklist-form',
  templateUrl: 'apron-checklist-form.html',
  providers: [DatePipe]
})




export class ApronChecklistForm {
  initialrwyOptions: any;
  acceptabilitySigns = ['+', '-', '0'];
  aproncols: any;
  rwyOptions: any;
   ApronObservations: ApronObservations[] = []
  public observations: any;
   otherobservations:any;
  apronchecklistForm: FormGroup;
  aproninspected:any;
  public currentdate: any;
  inspectiontimeOptions = ['Dawn', 'Morning', 'Afternoon', 'Dusk', 'Ad-hoc'];
  public sendDataToWebservice: any;
  //public apronchecklistform: FormGroup;
  time: any;
  date: String = new Date().toISOString();
  public body: string = "Dear Sir/Ma'am, A new apron inspection checklist has been uploaded by shift in charge duty operator.";
  public subject: string = "Data Upload: Apron Inspection Checklist";
  public from_mailid: string = "mialappteam@gvk.com";
  public to_mailid: string = "ito.developer2@gvk.com";
  public cc_mailid: string = "dheeraj.anchan@gmail.com";
  public username: string = "Apron Control Team";

  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public datePipe: DatePipe,
              public alert: AlertController) {
       this.currentdate = new Date();
       this.http.get('http://localhost:54733/api/AreaGroupMaster?id=0&type=3').map(res => res.json()).subscribe( data1=> {
        this.rwyOptions = data1;
        this.initialrwyOptions=data1;
        console.log(data1);
        },
        err => {
          console.log("error has occured");      
        });
  }

  ngOnInit(){
    
  }

  addNew(){
    console.log(this.aproninspected);
    this.http.get('http://localhost:54733/api/AreaGroupMaster?type=3&id='+this.aproninspected).map(res => res.json()).subscribe( data1=> {
      this.aproncols = data1;
      console.log(this.aproncols);
      for(let key in this.aproncols)
{
 console.log(key);
  this.ApronObservations.push({ 
    'stand':this.aproncols[key].Areas,
    'surfcond':'',
    'marking':'',
    'cleaning':'',
    'serviceability':'',
    'actiontaken':''
    });
  }
      },
      err => {
        console.log("error has occured");      
      });

this.rwyOptions = this.rwyOptions.filter(item => item.AG_ID !== this.aproninspected);
console.log(this.rwyOptions);


  
  }
  onChange(eve)
  {
    console.log(eve);
  }
  onSubmit(){

        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        let postparams ={
          'paramset': this.ApronObservations,
          'date': this.date,
          'inspectiontime': this.time,
          'otherobservations':this.otherobservations,
          'safetyofficiername':localStorage.getItem("username")
        } 

        this.http.post('https://mial.csia.in/MicroService/api/ApronChecklist',JSON.stringify(postparams),{headers:headers})
        .map(res => res.json())
        .subscribe(data => {            
            this.showPrompt();
            this.sendEmail();
           // this.date = null;
            this.ApronObservations = null;
            this.time = null;
            this.otherobservations = null;
            this.rwyOptions =  this.initialrwyOptions;
        },
        error => {
            console.log(error);
        });
    }

    showPrompt(){
        let prompt = this.alert.create({
        title: 'Note',
        message: 'Data Saved Successfully!',
        buttons: [
        {
          text: 'OK',
          handler: data => {
            console.log('Data saved successfully');
          }
        }]
        });
        prompt.present();
      }

      sendEmail(){
        
              let headers4 = new Headers();
              headers4.append("Content-Type", "application/json");
        
              let emailParams={
                Body: this.body,
                subject: this.subject,
                frm_Email_id: this.from_mailid,
                To_emailID: this.to_mailid,
                Cc_emailID: this.cc_mailid,
                UserName: this.username
              }  
              
                this.http.post('https://mial.csia.in/MicroService/api/SendEmail',JSON.stringify(emailParams),{ headers : headers4 })
                .map(res => res.json()).subscribe(data => { 
                  console.log(data);
                },
                error => {
                      console.log(error);
                });   
            
          }
        
}
