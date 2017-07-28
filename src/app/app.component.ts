import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {MedicationReminderPage} from '../pages/medication/medication-reminder/medication-reminder';
import {AppointmentsPage} from "../pages/appointments/appointments";
import {EvaluationPage} from "../pages/evaluation/evaluation";
import {IndexPage} from "../pages/index/index";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any, icon: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Busca', icon: 'search', component: HomePage},
      {title: 'Lembrete de medicamentos', icon: 'time', component: MedicationReminderPage},
      {title: 'Consultas', icon: 'calendar', component: AppointmentsPage},
      {title: 'Avaliar', icon: 'start', component: EvaluationPage},
      {title: 'Index', icon: 'start', component: IndexPage},
      // {title: 'Configurações', icon: 'settings', component: },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
