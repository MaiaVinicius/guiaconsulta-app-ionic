import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Searchbar, ViewController} from 'ionic-angular';
import {SearchProvider} from "../../providers/search/search";

/**
 * Generated class for the PaymentMethodPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'payment-method-page',
  priority: 'high'
})
@Component({
  selector: 'page-payment-method',
  templateUrl: 'payment-method.html',
})
export class PaymentMethodPage {
  searchingInsurance = false;
  insurances = [];
  myInsurances = [];

  privatePayments = [{
    id: 1,
    name: "Consulta popular (até R$ 150,00)"
  }, {
    id: 2,
    name: "Consulta particular"
  }];

  @ViewChild('searchBarInsurance') searchBar: Searchbar;

  constructor(public searchProvider: SearchProvider, public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.insurances = searchProvider.insurances;
    this.myInsurances = searchProvider.myInsurances;
  }

  chooseItem(item) {
    this.searchProvider.setPayment(item);
    this.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
