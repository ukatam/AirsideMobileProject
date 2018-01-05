import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Login } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { DutyManagerHome } from '../pages/duty-manager-home/duty-manager-home';
import { TabsPage } from '../pages/tabs/tabs';
import { Admintabs } from '../pages/admintabs/admintabs';
import { ValidatedTracklists } from '../pages/validated-tracklists/validated-tracklists';
import { RunwayChecklistDetails } from '../pages/runway-checklist-details/runway-checklist-details';
import { RunwayChecklist } from '../pages/runwaychecklist/runwaychecklist';
import { RunwayChecklistPages } from '../pages/runway-checklist-pages/runway-checklist-pages';
import { RunwayApprovalList } from '../pages/runway-approval-list/runway-approval-list';
import { TaxiwayApprovalList } from '../pages/taxiway-approval-list/taxiway-approval-list';
import { TaxiwayChecklistPages } from '../pages/taxiway-checklist-pages/taxiway-checklist-pages';
import { TaxiwayChecklistDetails } from '../pages/taxiway-checklist-details/taxiway-checklist-details';
import { TaxiwayNewUpload } from '../pages/taxiway-new-upload/taxiway-new-upload';
import { TaxiwayChecklist } from '../pages/taxiway-checklist/taxiway-checklist';
import { PendingTicketList } from '../pages/pending-ticket-list/pending-ticket-list';
import { PendingTaxiwayTicketlist } from '../pages/pending-taxiway-ticketlist/pending-taxiway-ticketlist';
import { PendingTaxiwayChecklistDetails } from '../pages/pending-taxiway-checklist-details/pending-taxiway-checklist-details';
import { PendingRunwayChecklistDetails } from '../pages/pending-runway-checklist-details/pending-runway-checklist-details';
import { RunwayApprovalChecklistDetails } from '../pages/runway-approval-checklist-details/runway-approval-checklist-details';
import { TaxiwayApprovalChecklistDetails } from '../pages/taxiway-approval-checklist-details/taxiway-approval-checklist-details';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApronChecklistForm } from '../pages/apron-checklist-form/apron-checklist-form';
import { ApronChecklistPages } from '../pages/apron-checklist-pages/apron-checklist-pages';
import { NewlyUploadedApronChecklist } from '../pages/newly-uploaded-apron-checklist/newly-uploaded-apron-checklist';
import { PendingForApprovalApronChecklist } from '../pages/pending-for-approval-apron-checklist/pending-for-approval-apron-checklist';
import { ApprovedApronChecklist } from '../pages/approved-apron-checklist/approved-apron-checklist';
import { ApronChecklistDetails } from '../pages/apron-checklist-details/apron-checklist-details';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    Login,
    Admintabs,
    DutyManagerHome,
    ContactPage,
    HomePage,
    RunwayApprovalList,
    TaxiwayChecklist,
    RunwayApprovalChecklistDetails,
    TaxiwayApprovalChecklistDetails,
    PendingTaxiwayTicketlist,
    TaxiwayChecklistDetails,
    ValidatedTracklists,
    TaxiwayApprovalList,
    PendingTaxiwayChecklistDetails,
    PendingTicketList,
    TaxiwayChecklistPages,
    TaxiwayNewUpload,
    RunwayChecklist,
    RunwayChecklistPages,
    PendingRunwayChecklistDetails,
    RunwayChecklistDetails,
    TabsPage,
    ApronChecklistForm,
    ApronChecklistPages,
    NewlyUploadedApronChecklist,
    PendingForApprovalApronChecklist,
    ApprovedApronChecklist,
    ApronChecklistDetails
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    RunwayChecklist,
    PendingTicketList,
    ContactPage,
    RunwayApprovalChecklistDetails,
    RunwayApprovalList,
    TaxiwayApprovalChecklistDetails,
    TaxiwayNewUpload,
    PendingTaxiwayTicketlist,
    TaxiwayChecklistDetails,
    TaxiwayChecklist,
    TaxiwayApprovalList,
    PendingTaxiwayChecklistDetails,
    RunwayChecklistPages,
    PendingRunwayChecklistDetails,
    TaxiwayChecklistPages,
    Login,
    DutyManagerHome,
    Admintabs,
    HomePage,
    RunwayChecklistDetails,
    ValidatedTracklists,
    TabsPage,
    ApronChecklistForm,
    ApronChecklistPages,
    NewlyUploadedApronChecklist,
    PendingForApprovalApronChecklist,
    ApprovedApronChecklist,
    ApronChecklistDetails
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
