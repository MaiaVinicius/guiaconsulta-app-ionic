import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the MedicationReminderAddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-medication-reminder-add',
  templateUrl: 'medication-reminder-add.html',
})
export class MedicationReminderAddPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicationReminderAddPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
