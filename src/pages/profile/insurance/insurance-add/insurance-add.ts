import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {InsuranceSearchPage} from "../insurance-search/insurance-search";
import {InsuranceProvider} from "../../../../providers/insurance/insurance";

/**
 * Generated class for the InsuranceAddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-insurance-add',
  templateUrl: 'insurance-add.html',
})
export class InsuranceAddPage {
  public insurance = {plan:0};

  constructor(private insuranceProvider: InsuranceProvider, public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  addInsurance() {
    this.insuranceProvider.addInsurance(this.insurance);
    // this.insurance = {};
  }

  searchInsurance() {
    this.navCtrl.push(InsuranceSearchPage);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
