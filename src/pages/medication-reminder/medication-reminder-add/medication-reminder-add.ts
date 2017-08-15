import {Component} from '@angular/core';
import {NavController, NavParams, ViewController, ModalController} from 'ionic-angular';
import {SearchMedicationPage} from "../search-medication/search-medication";

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
  public medication = {};
  public today: String = new Date().toISOString();

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicationReminderAddPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  searchMedication() {
    let modal = this.modalCtrl.create(SearchMedicationPage);
    modal.present();
  }
}
