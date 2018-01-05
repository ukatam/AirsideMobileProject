import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { DutyManagerHome } from '../duty-manager-home/duty-manager-home';

/**
 * Generated class for the Admintabs page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-admintabs',
  templateUrl: 'admintabs.html',
})
export class Admintabs {

  tab1Root = DutyManagerHome;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
