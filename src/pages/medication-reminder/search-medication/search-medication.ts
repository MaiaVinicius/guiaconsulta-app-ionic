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
    endpoint = "http://integracao.api.memed.com.br/v1/apresentacoes";

    public medications = [
        {
            name: "Dorflex",
            img: "https://plataforma.memed.com.br/resources/img/tarjas/vermelho.png",
            made: "Popo"
        },
        {
            name: "Ebastina",
            img: "https://plataforma.memed.com.br/resources/img/tarjas/vermelho.png",
            made: "Pipo"
        }
    ];

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

    chooseMedication(medication) {
        this.medicationProvider.invokeEventMedication.next(medication);
        this.viewCtrl.dismiss();
    }
}
