import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  @ViewChild('myForm') input=""; 

public Jilles : any;
public iongrid:any;
public ddl1:any="";
 public users = [
    { name: 'Jilles', age: 21 },
    { name: 'Todd', age: 24 },
    { name: 'Lisa', age: 18 }
  ];
    someInputName0:any='';
  constructor(public navCtrl: NavController) {
console.log(this.users);
  }
onRunwayChecklistPage(myForm){
   console.log(myForm.form.value.inputs);
  }
  ngOnInit(){
   
  }
}
