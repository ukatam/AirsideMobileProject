import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';
import { Http ,Headers} from '@angular/http';
import 'rxjs/Rx' ;

/**
 * Generated class for the PendingRunwayChecklistDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-pending-runway-checklist-details',
  templateUrl: 'pending-runway-checklist-details.html',
})
export class PendingRunwayChecklistDetails {
 runwaydetails: any;
 formData: FormData = new FormData(); 
  url:any;
 acceptabilitySigns = ['+', '-', '0'];
  date: any;
  dutymanagerremarks :any;
  time:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
      console.log(this.formData);
      
      this.http.get('https://mial.csia.in/MicroService/api/UploadImage/').subscribe( data1=> {
            var blob = new Blob([data1], { type: 'image/jpeg' });
            var url= window.URL.createObjectURL(blob);
            console.log(url);
            window.URL.revokeObjectURL(url);
         this.url=url;
         console.log(this.url);
          window.open("https://mial.csia.in/MicroService/UploadFile/6.jpg");
            
            },
            err => {
              console.log("error has occured");      
            });

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
sendMessage(myForm){
     console.log(myForm.form.value.inputs);
       let headers1 =new Headers();
    
      headers1.append("Content-Type",'application/json');
      headers1.append("Accept",'application/json');
     
      let postParams1=myForm.form.value.inputs;
      postParams1['date']=this.date;
      postParams1['time']=this.time;
      // {
      // someInputName0:  myForm.form.value.inputs.someInputName0,
      //   someInputName1:  myForm.form.value.inputs.someInputName1,
      //     someInputName2:  myForm.form.value.inputs.someInputName2,
      //       someInputName3:  myForm.form.value.inputs.someInputName3,
      //         someInputName4:  myForm.form.value.inputs.someInputName4,
      //           someInputName5:  myForm.form.value.inputs.someInputName5,
      //             someInputName6:  myForm.form.value.inputs.someInputName6,
      //               someInputName7:  myForm.form.value.inputs.someInputName7,
      //               someInputName8:  myForm.form.value.inputs.someInputName8,
      //   someInputName9:  myForm.form.value.inputs.someInputName9,
      //     someInputName10:  myForm.form.value.inputs.someInputName10,
      //       someInputName11:  myForm.form.value.inputs.someInputName11,
      //         someInputName12:  myForm.form.value.inputs.someInputName12,
      //           someInputName13:  myForm.form.value.inputs.someInputName13,
      //             someInputName14:  myForm.form.value.inputs.someInputName14,
      //               someInputName15:  myForm.form.value.inputs.someInputName15,
      //                 someInputName16:  myForm.form.value.inputs.someInputName16,
      //           someInputName17:  myForm.form.value.inputs.someInputName17,
      //             someInputName18:  myForm.form.value.inputs.someInputName18,
      //               someInputName19:  myForm.form.value.inputs.someInputName19,
      //                     date:this.date,
      //     time:this.time
      // }
console.log(postParams1);
      this.http.post('https://mial.csia.in/MicroService/api/ActionTaken',JSON.stringify(postParams1),{ headers : headers1 })
      .map(res => res.json()).subscribe(data => {
       
      },
      error => {
            console.log(error);
      });
          
}

fileChange(event) {  
      debugger;  
      let fileList: FileList;
   
      fileList=event.target.files;
    
      console.log(fileList);
      if (fileList.length > 0) {  
      let file: File = fileList[0];  
       
      this.formData.append(file.name, file, '121217.jpg');  
      this.formData.append('uploadFile1', file, file.name);  
      console.log(this.formData);
      let headers = new Headers()  
      //headers.append('Content-Type', 'json');  
      //headers.append('Accept', 'application/json');  
    
      this.http.post('https://mial.csia.in/MicroService/api/UploadImage',this.formData,{ headers : headers })
      .map(res => res.json()).subscribe(data => {
       
      },
      error => {
            console.log(error);
      });

      }  
      this.formData=null;
      console.log(this.formData);
      } 
  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingRunwayChecklistDetails');
  }

}
