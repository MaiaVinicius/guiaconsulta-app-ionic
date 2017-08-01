import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {StepWeightPage} from "../step-weight/step-weight";
import {ProfilePage} from "../../../profile/profile";

/**
 * Generated class for the StepHeightPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-step-height',
  templateUrl: 'step-height.html',
})
export class StepHeightPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StepHeightPage');
  }

  nextStep() {
    this.navCtrl.push(StepWeightPage, {},
      {animate: true, animation: 'transition', duration: 500, direction: 'forward'});
  }

  backStep(){
    this.navCtrl.pop({animate: true, animation: 'transition', duration: 500, direction: 'back'});
  }

  close() {
    this.navCtrl.setRoot(ProfilePage, {}, {animate: true, animation: 'transition', duration: 500, direction: 'back'});
  }
}
