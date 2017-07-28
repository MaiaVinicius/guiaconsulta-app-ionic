import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SearchSpecialtyPage} from "../pages/search-specialty/search-specialty";
import {SearchLocationPage} from "../pages/search-location/search-location";
import {PaymentMethodPage} from "../pages/payment-method/payment-method";
import {ResultPage} from "../pages/result/result";
import {ResultFiltersPage} from "../pages/result-filters/result-filters";
import {MedicationReminderPage} from "../pages/medication/medication-reminder/medication-reminder";
import {MedicationReminderAddPage} from "../pages/medication/medication-reminder-add/medication-reminder-add";
import {AppointmentsPage} from "../pages/appointments/appointments";
import {EvaluationPage} from "../pages/evaluation/evaluation";
import { Ionic2RatingModule } from 'ionic2-rating';
import {ConfigurationsPage} from "../pages/configuration/configurations/configurations";
import {IndexPage} from "../pages/index/index";
import {SearchMedicationPage} from "../pages/medication/search-medication/search-medication";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchSpecialtyPage,
    SearchLocationPage,
    PaymentMethodPage,
    ResultPage,
    ResultFiltersPage,
    MedicationReminderPage,
    MedicationReminderAddPage,
    AppointmentsPage,
    EvaluationPage,
    ConfigurationsPage,
    IndexPage,
    SearchMedicationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchSpecialtyPage,
    SearchLocationPage,
    PaymentMethodPage,
    ResultPage,
    ResultFiltersPage,
    MedicationReminderPage,
    MedicationReminderAddPage,
    AppointmentsPage,
    EvaluationPage,
    ConfigurationsPage,
    IndexPage,
    SearchMedicationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
