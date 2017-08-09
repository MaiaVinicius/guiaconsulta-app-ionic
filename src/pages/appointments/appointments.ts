import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AppointmentInfoPage} from "../appointment-info/appointment-info";

/**
 * Generated class for the AppointmentsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-appointments',
  templateUrl: 'appointments.html',
})
export class AppointmentsPage {
  reference = "upcomming";
  rating;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentsPage');
  }

  goToAppointmentInfo() {
    this.navCtrl.push(AppointmentInfoPage);
  }

  doRefresh(){

  }
}
