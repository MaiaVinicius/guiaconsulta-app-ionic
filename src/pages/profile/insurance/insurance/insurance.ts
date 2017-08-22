import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {InsuranceAddPage} from "../insurance-add/insurance-add";
import {InsuranceProvider} from "../../../../providers/insurance/insurance";

/**
 * Generated class for the InsurancePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'insurance-page',
  priority: 'low'
})
@Component({
  selector: 'page-insurance',
  templateUrl: 'insurance.html',
})
export class InsurancePage {
  public insurances;

  constructor(private insuranceProvider: InsuranceProvider, public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.insurances = this.insuranceProvider.getRegisteredInsurances();
  }

  addInsurance() {
    let modal = this.modalCtrl.create(InsuranceAddPage);
    modal.present();
  }
}
