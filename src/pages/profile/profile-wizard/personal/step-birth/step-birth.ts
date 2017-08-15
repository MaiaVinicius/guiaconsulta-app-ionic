import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {StepBloodGroupPage} from "../step-blood-group/step-blood-group";
import {ProfilePage} from "../../../profile/profile";
import {ProfileWizardProvider} from "../../../../../providers/profile-wizard/profile-wizard";

/**
 * Generated class for the StepBirthPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-step-birth',
  templateUrl: 'step-birth.html',
})
export class StepBirthPage {
  public birthdate: String;
  public fillSingle;

  constructor(private profileWizardProvider: ProfileWizardProvider, public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.fillSingle = navParams.get("fillSingle");
  }

  ionViewDidLoad() {
    this.birthdate = this.profileWizardProvider.personal.birthdate;
  }

  saveStep() {
    if (this.fillSingle) {
      this.viewCtrl.dismiss();
    } else {
      this.navCtrl.push(StepBloodGroupPage, {},
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
