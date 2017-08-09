import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Searchbar, ViewController} from 'ionic-angular';

/**
 * Generated class for the InsuranceSearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-insurance-search',
  templateUrl: 'insurance-search.html',
})
export class InsuranceSearchPage {
  @ViewChild('searchBarInsurance') searchBar: Searchbar;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsuranceSearchPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  chooseInsurance() {
    this.viewCtrl.dismiss();
  }

  ngOnInit() {
    setTimeout(() => {
      this.searchBar.setFocus();
    }, 800);
  }
}
