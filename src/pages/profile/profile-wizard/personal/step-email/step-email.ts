import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {StepGenderPage} from "../step-gender/step-gender";

/**
 * Generated class for the StepEmailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-step-email',
  templateUrl: 'step-email.html',
})
export class StepEmailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StepEmailPage');
  }

  nextStep() {
    this.navCtrl.push(StepGenderPage, {},
      {animate: true, animation: 'transition', duration: 500, direction: 'forward'});
  }
}
