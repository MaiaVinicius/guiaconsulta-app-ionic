import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {InsuranceSearchPage} from "../insurance-search/insurance-search";
import {InsuranceProvider} from "../../../../providers/insurance/insurance";
import {DependentProvider} from "../../../../providers/dependent/dependent";
import {UserProvider} from "../../../../providers/user/user";

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
  public insurance = {insurance: {}, owner: 0};
  public dependents = [];
  public user = {
    id: 0
  };

  constructor(private dependentProvider: DependentProvider, private userProvider: UserProvider, private insuranceProvider: InsuranceProvider, public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.insuranceProvider.invokeEventInsurance.subscribe((value) => {
      this.insurance.insurance = value;
    });
  }

  ionViewDidLoad() {
    this.getOwners();
  }

  getOwners() {
    this.dependents = this.dependentProvider.getDependents();
    this.user = this.userProvider.getUser();
    this.insurance.owner = this.user.id;
  }

  addInsurance() {
    this.insuranceProvider.addInsurance(this.insurance);
    this.dismiss();
  }

  searchInsurance() {
    this.navCtrl.push(InsuranceSearchPage);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
