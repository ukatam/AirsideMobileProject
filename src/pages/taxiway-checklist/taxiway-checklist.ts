import { Component, OnInit } from '@angular/core';
import { NavController,NavParams, AlertController, ToastController, LoadingController  } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'page-taxiway-checklist',
  templateUrl: 'taxiway-checklist.html',
  providers: [DatePipe]
})

export class TaxiwayChecklist {

  acceptabilitySigns = ['+', '-', '0'];
  public observations: any;
  taxiwaychecklistForm: FormGroup;
  public actiontaken1:any;
  public currentdate: any;
  rwyOptions:any ;
  inspectiontimeOptions = ['Dawn', 'Morning', 'Afternoon', 'Dusk', 'Ad-hoc'];
  formData: FormData = new FormData(); 
  iddata: Array<{id: string, filename: string}> =[];
  myDate: String = new Date().toISOString();
  public body: string = "Dear Sir/Ma'am,";
  public subject: string = "Data Upload: Taxiway Inspection Checklist";
  public from_mailid: string = "mialappteam@gvk.com";
  public to_mailid: string = "ito.developer2@gvk.com";
  public cc_mailid: string = "dheeraj.anchan@gmail.com";
  public username: string = "Apron Control Team";
  public user: any;
  


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public datePipe: DatePipe,
              public alert: AlertController) {                
              this.currentdate = new Date();
              this.user = localStorage.getItem("username");
              this.http.get('http://localhost:54733/api/AreaGroupMaster?id=0&type=2').map(res => res.json()).subscribe( data1=> {
    this.rwyOptions = data1;
    console.log(data1);
    },
    err => {
      console.log("error has occured");      
    });
  }
 ngOnInit(){
    this.initializeForm();
  }
  ionViewDidLoad() {
   
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
 

 private initializeForm(){
    this.taxiwaychecklistForm = new FormGroup({
      'date': new FormControl(Validators.required),
      'rwyinspected': new FormControl(Validators.required),
      'inspectiontime': new FormControl(Validators.required),
      'taxiwayedgelights': new FormControl(Validators.required),
      'taxiwayedgelightsAction': new FormControl(null),
      'taxiwayedgelightsNC': new FormControl(null),
      'taxiwaycentrelinelights': new FormControl(Validators.required),
      'taxiwaycentrelinelightsAction': new FormControl(null),
      'taxiwaycentrelinelightsNC': new FormControl(null),
      'runwayguardlights': new FormControl(Validators.required),
      'runwayguardaction': new FormControl(null),
      'runwayguardlightsNC': new FormControl(null),
      'taxiwaysurfaces': new FormControl(Validators.required),
      'taxiwaysurfacesAction': new FormControl(null),
      'taxiwaysurfacesNC': new FormControl(null),
      'FOD': new FormControl(Validators.required),
      'FODAction': new FormControl(null),
      'FODNC': new FormControl(null),
      'taxiwaymarkings': new FormControl(Validators.required),
      'taxiwaymarkingsAction': new FormControl(null),
      'taxiwaymarkingsNC': new FormControl(null),
      'obviouspavementdamage': new FormControl(Validators.required),
      'obviouspavementdamageAction': new FormControl(null),
      'obviouspavementdamageNC': new FormControl(null),
      'Obstruction': new FormControl(Validators.required),
      'ObstructionAction': new FormControl(null),
      'ObstructionNC': new FormControl(null),
      'manholesdraincovers': new FormControl(Validators.required),
      'manholesdraincoversAction': new FormControl(null),
      'manholesdraincoversNC': new FormControl(null),
      'opencabling': new FormControl(Validators.required),
      'opencablingAction': new FormControl(null),
      'opencablingNC': new FormControl(null),
      'signslightning': new FormControl(Validators.required),
      'signslightningAction': new FormControl(null),
      'signslightningNC': new FormControl(null),
      'drainscleanliness': new FormControl(Validators.required),
      'drainscleanlinessAction': new FormControl(null),
      'drainscleanlinessNC': new FormControl(null),
      'drainsstructural': new FormControl(Validators.required),
      'drainsstructuralAction': new FormControl(null),
      'drainsstructuralNC': new FormControl(null),
      'winddirectionalindicator': new FormControl(Validators.required),
      'winddirectionalindicatorAction': new FormControl(null),
      'winddirectionalindicatorNC': new FormControl(null),
      'birdsign': new FormControl(Validators.required),
      'birdsignAction': new FormControl(null),
      'birdsignNC': new FormControl(null),
      'standingwater': new FormControl(Validators.required),
      'standingwaterAction': new FormControl(null),
      'standingwaterNC': new FormControl(null),
      'airsideworks': new FormControl(Validators.required),
      'airsideworksAction': new FormControl(null),
      'airsideworksNC': new FormControl(null),
      'spillagesign': new FormControl(Validators.required),
      'spillageAction': new FormControl(null),
      'spillageNC': new FormControl(null),
      'firehazards': new FormControl(Validators.required),
      'firehazardsAction': new FormControl(null),
      'firehazardsNC': new FormControl(null),
      'grasslength': new FormControl(Validators.required),
      'grasslengthAction': new FormControl(null),
      'grasslengthNC': new FormControl(null),
      'InspectorName': new FormControl(Validators.required),
      'InspectorSign': new FormControl(Validators.required),
      'otherobservations': new FormControl(null)
    });
  }
  onSubmit(){
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    const value = this.taxiwaychecklistForm.value;
    console.log(value);
    
    let postparams = value;
    
    
    this.http.post('https://mial.csia.in/MicroService/api/TaxiwayChecklist/',JSON.stringify(postparams),{headers:headers})
        .map(res => res.json())
        .subscribe(data => { 
            this.showPrompt();
            this.sendEmail();
            this.taxiwaychecklistForm.reset();
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
          //this.showPrompt(); 
      },
      error => {
        console.log(error);
      });

      //code for sending sms service..
        // let headers1 =new Headers();
        // headers1.append("Authorization",'Basic Q1NJTVVNOkNzaUAxMjM0')
        // headers1.append("Content-Type",'application/json');
        // headers1.append("Accept",'application/json');
        // let Params={
        //   messages: [
        //           {
        //             from:"MIALGM",
        //             to: [ "+919823836069", "+919920034374", "+918008008638" ],
        //             text: "Runway Checklist has been uploaded by Duty Operator"
        //           }
        //           ]}
        
        //           this.http.post('https://api.infobip.com/sms/1/text/multi',JSON.stringify(Params),{headers:headers1})
        //           .map(res => res.json()) .subscribe(data => {
        //              this.showPrompt(); 
        //           },
        //           error => {
        //               console.log(error);
        //           });       
          }

    // let headers1 =new Headers();
    //   headers1.append("Authorization",'Basic Q1NJTVVNOkNzaUAxMjM0')
    //   headers1.append("Content-Type",'application/json');
    //   headers1.append("Accept",'application/json');
    //   let Params={
    //   messages: [
    //   {
    //     from:"MIALGM",
    //     to: [ "+919823836069", "+919920034374", "+918008008638" ],
    //     text: "Runway Checklist has been uploaded by Duty Operator"
    //   }
    //   ]}

    //   this.http.post('https://api.infobip.com/sms/1/text/multi',JSON.stringify(Params),{headers:headers1})
    //   .map(res => res.json()) .subscribe(data => {
    //      this.showPrompt(); 
    //   },
    //   error => {
    //       console.log(error);
    //   });

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

