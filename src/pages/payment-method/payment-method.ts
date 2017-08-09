import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Searchbar, ViewController} from 'ionic-angular';

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
  @ViewChild('searchBarInsurance') searchBar: Searchbar;

  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentMethodPage');
  }

  searchInsurance() {
    this.searchingInsurance = true;
    setTimeout(() => {
      this.searchBar.setFocus();
    }, 200);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
