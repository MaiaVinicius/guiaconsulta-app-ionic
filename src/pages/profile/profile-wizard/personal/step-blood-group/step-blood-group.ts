import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {StepMaritalStatusPage} from "../step-marital-status/step-marital-status";
import {ProfilePage} from "../../../profile/profile";

/**
 * Generated class for the StepBloodGroupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-step-blood-group',
  templateUrl: 'step-blood-group.html',
})
export class StepBloodGroupPage {
  public fillSingle;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.fillSingle = navParams.get("fillSingle");
  }

  nextStep() {
    if (this.fillSingle) {
      this.viewCtrl.dismiss();
    } else {
      this.navCtrl.push(StepMaritalStatusPage, {},
        {animate: true, animation: 'transition', duration: 500, direction: 'forward'});
    }
  }

  close() {
    if (this.fillSingle) {
      this.viewCtrl.dismiss();
    } else {
      this.navCtrl.setRoot(ProfilePage, {}, {animate: true, animation: 'transition', duration: 500, direction: 'back'});
    }
  }

  backStep() {
    this.navCtrl.pop({animate: true, animation: 'transition', duration: 500, direction: 'back'});
  }
}
