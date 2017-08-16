import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {StepGenderPage} from "../step-gender/step-gender";
import {ProfilePage} from "../../../profile/profile";
// import {HomePage} from "../../../../home/home";

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
  public fillSingle;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.fillSingle = navParams.get("fillSingle");
  }

  nextStep() {
    if (this.fillSingle) {
      this.viewCtrl.dismiss();
    } else {
      this.navCtrl.push(StepGenderPage, {},
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
}
