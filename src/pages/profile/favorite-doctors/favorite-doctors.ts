import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SearchDoctorPage} from "../../search-doctor/search-doctor";
import {DoctorProfilePage} from "../../doctor-profile/doctor-profile";

/**
 * Generated class for the FavoriteDoctorsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-favorite-doctors',
  templateUrl: 'favorite-doctors.html',
})
export class FavoriteDoctorsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad FavoriteDoctorsPage');
  }

  searchDoctor(){
    this.navCtrl.push(SearchDoctorPage);
  }

  goToDoctorPage() {
    this.navCtrl.push(DoctorProfilePage);
  }
}
