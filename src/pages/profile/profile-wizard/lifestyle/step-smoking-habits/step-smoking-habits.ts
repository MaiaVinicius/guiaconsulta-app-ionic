import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StepSmokingHabitsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-step-smoking-habits',
  templateUrl: 'src/pages/profile/profile-wizard/lifestyle/step-smoking-habits/step-smoking-habits.html',
})
export class StepSmokingHabitsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StepSmokingHabitsPage');
  }

}
