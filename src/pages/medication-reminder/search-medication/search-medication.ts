import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Searchbar, ViewController} from 'ionic-angular';
// import {Http} from "@angular/http";

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

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    // http://integracao.api.memed.com.br/v1/apresentacoes?filter%5Bcategoria%5D=industrializados&filter%5Bq%5D=dorflex&page%5Blimit%5D=100&api-key=OstiuP8TGS313ejeAUSyW6MWUufLaVHCmvrJnC4n1xk3uAnHQEIyFRyBEevpOzbG&secret-key=6f8CFVaKW88HU6Mk22iOgwxlETRI69Va0nB5MTg5BlBSwo9s3vvhsOoOreMT7P1D

      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchMedicationPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ngOnInit() {
    setTimeout(() => {
      this.searchBar.setFocus();
    }, 800);
  }

  chooseMedication() {
    this.viewCtrl.dismiss();
  }
}
