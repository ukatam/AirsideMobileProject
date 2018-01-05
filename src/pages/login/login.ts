import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, IonicPage } from 'ionic-angular';
import { NgForm, FormGroup, Validators, FormControl } from "@angular/forms";
import { Http, Headers, RequestOptions } from '@angular/http';
import { DatePipe } from '@angular/common';
import 'rxjs/add/operator/map';

import { DutyManagerHome } from '../duty-manager-home/duty-manager-home';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [DatePipe],
  animations: [
 
    //For the logo
    trigger('flyInBottomSlow', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({transform: 'translate3d(0,2000px,0'}),
        animate('2000ms ease-in-out')
      ])
    ]),
 
    //For the background detail
    trigger('flyInBottomFast', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({transform: 'translate3d(0,2000px,0)'}),
        animate('1000ms ease-in-out')
      ])
    ]),
 
    //For the login form
    trigger('bounceInBottom', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        animate('2000ms 200ms ease-in', keyframes([
          style({transform: 'translate3d(0,2000px,0)', offset: 0}),
          style({transform: 'translate3d(0,-20px,0)', offset: 0.9}),
          style({transform: 'translate3d(0,0,0)', offset: 1}) 
        ]))
      ])
    ]),
 
    //For login button
    trigger('fadeIn', [
      state('in', style({
        opacity: 1
      })),
      transition('void => *', [
        style({opacity: 0}),
        animate('1000ms 2000ms ease-in')
      ])
    ])
  ]
})

export class Login {

  setDob: string;
  loginForm: FormGroup;
  logoState: any = "in";
  cloudState: any = "in";
  loginState: any = "in";
  formState: any = "in";

  constructor(public navCtrl: NavController, public navParams: NavParams, public loading: LoadingController, 
              public alert: AlertController, public datePipe:DatePipe, public http: Http) {
                var date = new Date();
                this.setDob = datePipe.transform( date, 'dd-MM-yyyy' );
  }

  ngOnInit(){
    this.initializeForm();
  }
  
  private initializeForm(){
    this.loginForm = new FormGroup({
      'uM_USER_NAME': new FormControl('', Validators.required),
      'uM_PASSWORD': new FormControl('', Validators.required)
    });
  }

  login(){
    const loading = this.loading.create({
      content: 'Signing you in..'
    });

    loading.present();

    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    const value = this.loginForm.value;

    let postParams = {
      uM_USER_NAME: value.uM_USER_NAME,
      uM_PASSWORD: value.uM_PASSWORD
    }

     this.http.post('https://mial.csia.in/MicroService/api/Login', JSON.stringify(postParams), {headers:headers})
      .map(res => res.json()).subscribe( data=> {
      if(data.length != 0)
      { 
            localStorage.setItem("guestid", data[0].UM_I);
            localStorage.setItem("username", data[0].UM_FIRST_NAME);
            if(data[0].AGM_I == 2){
            this.navCtrl.setRoot(DutyManagerHome);
            loading.dismiss();
            }
            else if(data[0].AGM_I == 1){
            this.navCtrl.setRoot(HomePage);
            loading.dismiss();
            }
      }
      else{
            loading.dismiss();
            const alert = this.alert.create({
            title: 'Login Failed!!!',
            buttons: ['OK']
            });
          alert.present();
        }
      },
      error => {
        loading.dismiss();
        const alert = this.alert.create({
          title: 'Login Failed!!!',
          buttons: ['OK']
        });
        alert.present();
      });
  }
  
}
