import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DoctorProfilePage} from "../doctor-profile/doctor-profile";

/**
 * Generated class for the AppointmentInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-appointment-info',
  templateUrl: 'appointment-info.html',
})
export class AppointmentInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentInfoPage');
  }
  goToDoctorPage() {
    this.navCtrl.push(DoctorProfilePage);
  }
}
