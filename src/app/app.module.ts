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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchSpecialtyPage,
    SearchLocationPage,
    PaymentMethodPage,
    ResultPage,
    ResultFiltersPage,
    MedicationReminderPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
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
    MedicationReminderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
