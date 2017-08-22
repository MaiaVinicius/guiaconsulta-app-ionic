import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule, IonicPageModule, Platform} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ResultPage} from "../pages/result/result";
import {ResultFiltersPage} from "../pages/result-filters/result-filters";
import {EvaluationPage} from "../pages/evaluation/evaluation";
import {Ionic2RatingModule} from 'ionic2-rating';
import {ConfigurationsPage} from "../pages/profile/configurations/configurations";
import {IndexPage} from "../pages/index/index";
import {HelpPage} from "../pages/profile/help/help";
//wizard profile
import {StepEmailPage} from "../pages/profile/profile-wizard/personal/step-email/step-email";
import {StepGenderPage} from "../pages/profile/profile-wizard/personal/step-gender/step-gender";
import {StepBirthPage} from "../pages/profile/profile-wizard/personal/step-birth/step-birth";
import {StepBloodGroupPage} from "../pages/profile/profile-wizard/personal/step-blood-group/step-blood-group";
import {StepMaritalStatusPage} from "../pages/profile/profile-wizard/personal/step-marital-status/step-marital-status";
import {StepHeightPage} from "../pages/profile/profile-wizard/personal/step-height/step-height";
import {StepWeightPage} from "../pages/profile/profile-wizard/personal/step-weight/step-weight";
import {StepLocationPage} from "../pages/profile/profile-wizard/personal/step-location/step-location";
//others
import {InviteDoctorPage} from "../pages/invite-doctor/invite-doctor";
import {LoginPage} from "../pages/login/login";
import {SearchProvider} from '../providers/search/search';
import {FavoriteDoctorsPage} from "../pages/profile/favorite-doctors/favorite-doctors";

//
import {SearchDoctorPage} from "../pages/search-doctor/search-doctor";
import {DoctorProfilePage} from "../pages/doctor-profile/doctor-profile";
import {Geolocation} from "@ionic-native/geolocation";
import {Http, HttpModule} from '@angular/http';
import {LocationProvider} from '../providers/location/location';
import {AttendanceFormPage} from "../pages/attendance-form/attendance-form";
import {UserProvider} from '../providers/user/user';
import {AuthConfig, AuthHttp} from "angular2-jwt";
import {Storage} from '@ionic/storage';

//modules
import {MedicationReminderModule} from "../pages/medication-reminder/medication-reminder/medication-reminder.module";
import {SearchLocationModule} from "../pages/search-location/search-location.module";
import {PaymentMethodModule} from "../pages/payment-method/payment-method.module";
import {DependentModule} from "../pages/profile/dependent/dependent/dependent.module";
import {InsuranceModule} from "../pages/profile/insurance/insurance/insurance.module";
import {FullProfileModule} from "../pages/profile/full-profile/full-profile/full-profile.module";
import {ProfileModule} from "../pages/profile/profile/profile.module";
import {AppointmentsModule} from "../pages/appointments/appointments.module";
import {ProfileWizardModule} from "../pages/profile/profile-wizard/profile-wizard.module";
import {SearchTermModule} from "../pages/search-term/search-term.module";
import {MedicalRecordModule} from "../pages/profile/medical-record/medical-record/medical-record.module";

let storage = new Storage({});

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    headerPrefix: "GC_BACK_FORWARD_",
    noJwtError: true,
    globalHeaders: [{'Accept': 'application/json'}],
    tokenGetter: (() => storage.get('token')),
  }), http);
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ResultPage,
    ResultFiltersPage,
    EvaluationPage,
    ConfigurationsPage,
    IndexPage,
    HelpPage,
    FavoriteDoctorsPage,
    SearchDoctorPage,
    DoctorProfilePage,
    AttendanceFormPage,
    //Wizard Pages,
    InviteDoctorPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Voltar',
      cancelButtonText: 'Cancelar',
      pageTransition: 'ios-transition',
      preloadModules: true
    }),
    Ionic2RatingModule,
    HttpModule,
    MedicationReminderModule,
    SearchTermModule,
    SearchLocationModule,
    PaymentMethodModule,
    DependentModule,
    InsuranceModule,
    FullProfileModule,
    ProfileModule,
    AppointmentsModule,
    ProfileWizardModule,
    MedicalRecordModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ResultPage,
    ResultFiltersPage,
    EvaluationPage,
    ConfigurationsPage,
    IndexPage,
    HelpPage,
    FavoriteDoctorsPage,
    SearchDoctorPage,
    DoctorProfilePage,
    AttendanceFormPage,
    InviteDoctorPage,
    LoginPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    },
    SearchProvider,
    Geolocation,
    LocationProvider,
    UserProvider
  ]
})

export class AppModule {
}
