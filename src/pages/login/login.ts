import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  countryCode;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.countryCode = 55;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
