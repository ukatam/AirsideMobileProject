import { Component, OnInit } from '@angular/core';
import { NavController,NavParams, AlertController  } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'page-runwaychecklist',
  templateUrl: 'runwaychecklist.html',
  providers: [DatePipe]
})


export class RunwayChecklist  {
    
  formData: FormData = new FormData();
  iddata: Array<{id: string, filename: string}> =[];
  acceptabilitySigns = ['+', '-', '0'];
  public observations: any;
  runwaychecklistForm: FormGroup;
  public actiontaken1:any;
  public currentdate: any;
  rwyOptions = ['14/32','09/27'];
  myDate: String = new Date().toISOString();
  public body: string = "Dear Sir/Ma'am, A new runway inspection checklist has been uploaded by shift in charge duty operator.";
  public subject: string = "Data Upload: Runway Inspection Checklist";
  public from_mailid: string = "mialappteam@gvk.com";
  public to_mailid: string = "ito.developer2@gvk.com, ito.developer3@gvk.com";
  public cc_mailid: string = "ito.developer1@gvk.com";
  public username: string = "Apron Control Team";
  public user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public datePipe: DatePipe,
              public alert: AlertController) {
        
                this.currentdate = new Date();
                this.user = localStorage.getItem("username");
  }

  ngOnInit(){
    this.initializeForm();
  }

  private initializeForm(){
    this.runwaychecklistForm = new FormGroup({
      'date': new FormControl(Validators.required),
      'rwyinspected': new FormControl(Validators.required),
      'inspectiontime': new FormControl(Validators.required),
      'approachlightsign': new FormControl(Validators.required),
      'approachlightAction': new FormControl(null),
      'approachlightNC': new FormControl(null),
      'runwayedgelightsign': new FormControl(Validators.required),
      'runwayedgelightAction': new FormControl(null),
      'runwayedgelightNC': new FormControl(null),
      'papisign': new FormControl(Validators.required),
      'papiAction': new FormControl(null),
      'papiNC': new FormControl(null),
      'runwaycentrelightsign': new FormControl(Validators.required),
      'runwaycentrelightAction': new FormControl(null),
      'runwaycentrelightNC': new FormControl(null),
      'runwaythrlightsign': new FormControl(Validators.required),
      'runwaythrlightAction': new FormControl(null),
      'runwaythrlightNC': new FormControl(null),
      'runwayendlightsign': new FormControl(Validators.required),
      'runwayendlightAction': new FormControl(null),
      'runwayendlightNC': new FormControl(null),
      'runwaytdzlightsign': new FormControl(Validators.required),
      'runwaytdzlightAction': new FormControl(null),
      'runwaytdzlightNC': new FormControl(null),
      'retilsandtwylightsign': new FormControl(Validators.required),
      'retilsandtwylightAction': new FormControl(null),
      'retilsandtwylightNC': new FormControl(null),
      'runwaysurfacesign': new FormControl(Validators.required),
      'runwaysurfaceAction': new FormControl(null),
      'runwaysurfaceNC': new FormControl(null),
      'fodsign': new FormControl(Validators.required),
      'fodAction': new FormControl(null),
      'fodNC': new FormControl(null),
      'runwayshouldersign': new FormControl(Validators.required),
      'runwayshoulderAction': new FormControl(null),
      'runwayshoulderNC': new FormControl(null),
      'runwaymarkingsign': new FormControl(Validators.required),
      'runwaymarkingAction': new FormControl(null),
      'runwaymarkingNC': new FormControl(null),
      'rubberbuildupsign': new FormControl(Validators.required),
      'rubberbuildupAction': new FormControl(null),
      'rubberbuildupNC': new FormControl(null),
      'opencablingsign': new FormControl(Validators.required),
      'opencablingAction': new FormControl(null),
      'opencablingNC': new FormControl(null),
      'lightingvisibilitysign': new FormControl(Validators.required),
      'lightingvisibilityAction': new FormControl(null),
      'lightingvisibilityNC': new FormControl(null),
      'birdsign': new FormControl(Validators.required),
      'birdAction': new FormControl(null),
      'birdNC': new FormControl(null),
      'dampwetsign': new FormControl(Validators.required),
      'dampwetAction': new FormControl(null),
      'dampwetNC': new FormControl(null),
      'spillagesign': new FormControl(Validators.required),
      'spillageAction': new FormControl(null),
      'spillageNC': new FormControl(null),
      'obstructionsign': new FormControl(Validators.required),
      'obstructionAction': new FormControl(null),
      'obstructionNC': new FormControl(null),
      'grasslengthsign': new FormControl(Validators.required),
      'grasslengthAction': new FormControl(null),
      'grasslengthNC': new FormControl(null),
      'InspectorName': new FormControl(Validators.required),
      'InspectorSign': new FormControl(Validators.required),
      'otherobservations': new FormControl(null)
    });
  }
    fileChange(event) {  
       let fileList: FileList;
       fileList=event.target.files;
       if (fileList.length > 0) {  
       let file: File = fileList[0]; 
       var name=file.name; 
       this.iddata.push({id:event.target.id,filename:file.name});
       this.formData.append(file.name, file, file.name);  
       }
    } 
    onSubmit(){
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        const value = this.runwaychecklistForm.value;

        let postparams = value;

        this.http.post('https://mial.csia.in/MicroService/api/RunwayChecklist/',JSON.stringify(postparams),{headers:headers})
            .map(res => res.json())
            .subscribe(data => {
                console.log(data);
                this.showPrompt();
                this.sendEmail();
				        this.runwaychecklistForm.reset();  
            },
            error => {
                console.log(error);
            });

           
let imageparams={
  date:value.date,
  Time:value.inspectiontime,
  imagepara:this.iddata
}

  let headers2 = new Headers()  
    headers.append('Content-Type', 'json');  
    headers.append('Accept', 'application/json');  
  
    this.http.post('https://mial.csia.in/MicroService/api/UploadImage',this.formData,{ headers : headers2 })
    .map(res => res.json()).subscribe(data => {
      
    },
    error => {
          console.log(error);
    });

    this.http.post('https://mial.csia.in/MicroService/api/RunwayImageData',imageparams,{ headers : headers2 })
    .map(res => res.json()).subscribe(data => {
     
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
            text: "Runway Checklist has been uploaded by Duty Operator"
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
