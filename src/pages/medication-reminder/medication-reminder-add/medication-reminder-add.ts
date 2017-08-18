import {Component} from '@angular/core';
import {NavController, NavParams, ViewController, ModalController} from 'ionic-angular';
import {SearchMedicationPage} from "../search-medication/search-medication";
import {MedicationProvider} from "../../../providers/medication/medication";

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
    public units = [];
    public today: String = new Date().toISOString();

    constructor(private medicationProvider: MedicationProvider, public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
        this.units = medicationProvider.getMedicationUnits();
    }

    addMedication() {
        this.medicationProvider.addMedication(this.medication);
        this.dismiss();
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    getMedication(evt) {
        console.log(evt)
    }

    searchMedication() {
        let modal = this.modalCtrl.create(SearchMedicationPage, {
            "chooseMedication": "getMedication($event)"
        });
        modal.present();
    }
}
