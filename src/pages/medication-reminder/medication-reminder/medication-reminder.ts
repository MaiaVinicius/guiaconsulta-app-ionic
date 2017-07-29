import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {MedicationReminderAddPage} from "../medication-reminder-add/medication-reminder-add";
import {ModalController} from 'ionic-angular';

/**
 * Generated class for the MedicationReminderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-medication-reminder',
  templateUrl: 'medication-reminder.html',
})
export class MedicationReminderPage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicationReminderPage');
  }

  registerMedication() {
    let modal = this.modalCtrl.create(MedicationReminderAddPage);
    modal.present();
  }
}
