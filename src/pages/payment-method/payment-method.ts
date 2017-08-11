import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Searchbar, ViewController} from 'ionic-angular';
import {SearchProvider} from "../../providers/search/search";

/**
 * Generated class for the PaymentMethodPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-payment-method',
  templateUrl: 'payment-method.html',
})
export class PaymentMethodPage {
  searchingInsurance = false;
  privatePayments = [{
    id: 1,
    label: "Consulta popular (até R$ 150,00)"
  },{
    id: 2,
    label: "Consulta particular"
  }];

  @ViewChild('searchBarInsurance') searchBar: Searchbar;

  constructor(public searchProvider: SearchProvider, public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentMethodPage');
  }

  chooseItem(item) {
    this.searchProvider.setPayment(item);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
