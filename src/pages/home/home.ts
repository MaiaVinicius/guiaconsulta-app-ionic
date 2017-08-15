import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
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
  public location;
  public payment;

  constructor(public navParams: NavParams, public locationProvider: LocationProvider, public searchProvider: SearchProvider, public navCtrl: NavController, public loadingCtrl: LoadingController) {
    if (navParams.get("location")) {
      this.location = navParams.get("location");
    }
  }

  ionViewDidLoad() {
    this.location = this.searchProvider.getLocation();
    this.payment = this.searchProvider.getPayment();
  }

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    this.locationProvider.getCurrentLocation().then(response => {
        this.searchProvider.setLocation(response);
        this.location = response;
      }
    );
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

  unfilledField(label) {
    return "<span class='field-label'>" + label + "</span>";
  }
}
