import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {MedicationReminderAddPage} from "../medication-reminder-add/medication-reminder-add";
import {ModalController} from 'ionic-angular';
import {MedicationProvider} from "../../../providers/medication/medication";

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
  public reminders;

  constructor(public medicationProvider: MedicationProvider, public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
      this.reminders = this.medicationProvider.getReminders();
  }

  ngOnInit() {
    this.reminders = this.medicationProvider.getReminders();
  }

  registerMedication() {
    let modal = this.modalCtrl.create(MedicationReminderAddPage);
    modal.present();
  }


}
