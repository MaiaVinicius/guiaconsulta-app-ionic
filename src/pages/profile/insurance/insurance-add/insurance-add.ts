import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {InsuranceSearchPage} from "../insurance-search/insurance-search";

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

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsuranceAddPage');
  }

  searchInsurance() {
    this.navCtrl.push(InsuranceSearchPage);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
