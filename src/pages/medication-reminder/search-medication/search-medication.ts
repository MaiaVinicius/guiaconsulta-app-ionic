import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Searchbar, ViewController} from 'ionic-angular';
import {MedicationProvider} from "../../../providers/medication/medication";

/**
 * Generated class for the SearchMedicationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
    selector: 'page-search-medication',
    templateUrl: 'search-medication.html',
})
export class SearchMedicationPage {
    @ViewChild('searchBarMedication') searchBar: Searchbar;
    public keyword: string;

    public medications;

    constructor(private medicationProvider: MedicationProvider, public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    ngOnInit() {
        setTimeout(() => {
            this.searchBar.setFocus();
        }, 800);
    }


    private delayTimer;
    public loading = false;

    updateSearch() {
        clearTimeout(this.delayTimer);
        this.loading = true;
        this.delayTimer = setTimeout(() => {
            this.medicationProvider.getMedications(this.keyword).then((medications) => {
                this.medications = medications;
                this.loading = false;
            });
        }, 200);
    }


    chooseMedication(medication) {
        this.medicationProvider.invokeEventMedication.next(medication);
        this.viewCtrl.dismiss();
    }
}
