import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StepAlcoholConsumptionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-step-alcohol-consumption',
  templateUrl: 'src/pages/profile/profile-wizard/lifestyle/step-alcohol-consumption/step-alcohol-consumption.html',
})
export class StepAlcoholConsumptionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StepAlcoholConsumptionPage');
  }

}
