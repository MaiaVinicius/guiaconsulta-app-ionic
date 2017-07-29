import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StepActivityLevelPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-step-activity-level',
  templateUrl: 'src/pages/profile/profile-wizard/lifestyle/step-activity-level/step-activity-level.html',
})
export class StepActivityLevelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StepActivityLevelPage');
  }

}
