import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SearchSpecialtyPage} from "../search-specialty/search-specialty";
import {SearchLocationPage} from "../search-location/search-location";
import {PaymentMethodPage} from "../payment-method/payment-method";
import {LoadingController} from 'ionic-angular';
import {ResultPage} from "../result/result";
import {SearchProvider} from "../../providers/search/search";
import {LocationProvider} from "../../providers/location/location";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public locationProvider: LocationProvider, public navCtrl: NavController, public loadingCtrl: LoadingController) {
  }

  ngOnInit() {
    this.locationProvider.getCurrentLocation();
  }

  navToSearchSpecialty() {
    this.navCtrl.push(SearchSpecialtyPage);
  }

  navToPaymentMethod() {
    this.navCtrl.push(PaymentMethodPage);
  }

  navToSearchLocation() {
    this.navCtrl.push(SearchLocationPage);
  }

  doSearch() {
    this.navCtrl.push(ResultPage, {},
      {animate: true, animation: 'transition', duration: 500, direction: 'forward'});
    // this.presentLoading();
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }
}
