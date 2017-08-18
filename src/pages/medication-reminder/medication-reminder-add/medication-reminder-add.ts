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
    public units = [];
    public today: String = new Date().toISOString();
    public reminder = {
        medication: {},
        start: this.today
    };

    constructor(private medicationProvider: MedicationProvider, public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {

    }

    ngOnInit() {
        this.units = this.medicationProvider.getMedicationUnits();
        this.medicationProvider.invokeEventMedication.subscribe((value) => {
            this.reminder.medication = value;
        });
    }

    addMedication() {
        this.medicationProvider.addMedicationReminder(this.reminder);
        this.dismiss();
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    getMedication(evt) {
        console.log(evt)
    }

    searchMedication() {
        let modal = this.modalCtrl.create(SearchMedicationPage);
        modal.present();
    }
}
