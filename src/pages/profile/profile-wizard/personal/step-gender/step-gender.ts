import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {StepBirthPage} from "../step-birth/step-birth";

/**
 * Generated class for the StepGenderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-step-gender',
  templateUrl: 'step-gender.html',
})
export class StepGenderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StepGenderPage');
  }

  nextStep() {
    this.navCtrl.push(StepBirthPage, {},
      {animate: true, animation: 'transition', duration: 500, direction: 'forward'});
  }

  backStep(){
    this.navCtrl.pop({animate: true, animation: 'transition', duration: 500, direction: 'back'});
  }
}
