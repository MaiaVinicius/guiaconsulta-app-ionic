import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Searchbar, ViewController} from 'ionic-angular';
import {InsuranceProvider} from "../../../../providers/insurance/insurance";

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
  public insurances;
  public keyword;

  constructor(private insuranceProvider: InsuranceProvider, public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.insurances = this.insuranceProvider.getInsurances(this.keyword);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  chooseInsurance(insurance) {
    this.insuranceProvider.setInsurance(insurance);
    this.viewCtrl.dismiss();
  }

  ngOnInit() {
    setTimeout(() => {
      this.searchBar.setFocus();
    }, 800);
  }
}
