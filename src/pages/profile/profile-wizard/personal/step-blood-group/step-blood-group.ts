import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StepBloodGroupPage');
  }

  nextStep() {
    this.navCtrl.push(StepMaritalStatusPage, {},
      {animate: true, animation: 'transition', duration: 500, direction: 'forward'});
  }
  backStep(){
    this.navCtrl.pop({animate: true, animation: 'transition', duration: 500, direction: 'back'});
  }

  close() {
    this.navCtrl.setRoot(ProfilePage, {}, {animate: true, animation: 'transition', duration: 500, direction: 'back'});
  }
}
