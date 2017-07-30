import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {StepHeightPage} from "../step-height/step-height";

/**
 * Generated class for the StepMaritalStatusPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-step-marital-status',
  templateUrl: 'step-marital-status.html',
})
export class StepMaritalStatusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StepMaritalStatusPage');
  }

  nextStep() {
    this.navCtrl.push(StepHeightPage, {},
      {animate: true, animation: 'transition', duration: 500, direction: 'forward'});
  }
  backStep(){
    this.navCtrl.pop({animate: true, animation: 'transition', duration: 500, direction: 'back'});
  }
}
