import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Searchbar, ViewController} from 'ionic-angular';

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

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
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
}
