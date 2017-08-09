import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {SearchSpecialtyPage} from "../pages/search-specialty/search-specialty";
import {SearchLocationPage} from "../pages/search-location/search-location";
import {PaymentMethodPage} from "../pages/payment-method/payment-method";
import {ResultPage} from "../pages/result/result";
import {ResultFiltersPage} from "../pages/result-filters/result-filters";
import {MedicationReminderPage} from "../pages/medication-reminder/medication-reminder/medication-reminder";
import {MedicationReminderAddPage} from "../pages/medication-reminder/medication-reminder-add/medication-reminder-add";
import {AppointmentsPage} from "../pages/appointments/appointments";
import {EvaluationPage} from "../pages/evaluation/evaluation";
import {Ionic2RatingModule} from 'ionic2-rating';
import {ConfigurationsPage} from "../pages/profile/configurations/configurations";
import {IndexPage} from "../pages/index/index";
import {HelpPage} from "../pages/profile/help/help";
import {ProfilePage} from "../pages/profile/profile/profile";
import {SearchMedicationPage} from "../pages/medication-reminder/search-medication/search-medication";
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
import {MultiPickerModule} from "ion-multi-picker";
import {InviteDoctorPage} from "../pages/invite-doctor/invite-doctor";
import {LoginPage} from "../pages/login/login";
import {SearchProvider} from '../providers/search/search';
import {AppointmentInfoPage} from "../pages/appointment-info/appointment-info";
import {FavoriteDoctorsPage} from "../pages/profile/favorite-doctors/favorite-doctors";
import {MedicalRecordPage} from "../pages/profile/medical-record/medical-record/medical-record";

//
import {File} from "@ionic-native/file";
import {Transfer} from "@ionic-native/transfer";
import {Camera} from "@ionic-native/camera";
import {FilePath} from "@ionic-native/file-path";
import {DependentPage} from "../pages/profile/dependent/dependent/dependent";
import {DependentAddPage} from "../pages/profile/dependent/dependent-add/dependent-add";
import {SearchDoctorPage} from "../pages/search-doctor/search-doctor";
import {InsuranceAddPage} from "../pages/profile/insurance/insurance-add/insurance-add";
import {InsurancePage} from "../pages/profile/insurance/insurance/insurance";
import {InsuranceSearchPage} from "../pages/profile/insurance/insurance-search/insurance-search";

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
    AppointmentInfoPage,
    EvaluationPage,
    ConfigurationsPage,
    IndexPage,
    SearchMedicationPage,
    HelpPage,
    ProfilePage,
    FavoriteDoctorsPage,
    MedicalRecordPage,
    DependentPage,
    DependentAddPage,
    InsuranceAddPage,
    InsurancePage,
    InsuranceSearchPage,
    SearchDoctorPage,
    //Wizard Pages,
    StepEmailPage,
    StepGenderPage,
    StepBirthPage,
    StepBloodGroupPage,
    StepMaritalStatusPage,
    StepHeightPage,
    StepWeightPage,
    StepLocationPage,
    InviteDoctorPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Voltar',
      pageTransition: 'ios-transition'
    }),
    Ionic2RatingModule,
    MultiPickerModule
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
    AppointmentInfoPage,
    EvaluationPage,
    ConfigurationsPage,
    IndexPage,
    SearchMedicationPage,
    HelpPage,
    ProfilePage,
    FavoriteDoctorsPage,
    MedicalRecordPage,
    DependentPage,
    DependentAddPage,
    InsuranceAddPage,
    InsurancePage,
    InsuranceSearchPage,
    SearchDoctorPage,
    //Wizard Pages
    StepEmailPage,
    StepGenderPage,
    StepBirthPage,
    StepBloodGroupPage,
    StepMaritalStatusPage,
    StepHeightPage,
    StepWeightPage,
    StepLocationPage,
    InviteDoctorPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SearchProvider,

    File,
    Transfer,
    Camera,
    FilePath
  ]
})

export class AppModule {
}
