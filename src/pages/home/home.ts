import {Component, NgModule} from '@angular/core';
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

    constructor(public navParams: NavParams, public searchProvider: SearchProvider, public navCtrl: NavController, public loadingCtrl: LoadingController) {

    }

    ngOnInit() {
        this.searchProvider.invokeEventLocation.subscribe((value) => {
            console.log(value);
            this.location = value;
        });
    }

    ionViewDidLoad() {
        this.location = this.searchProvider.getLocation();
        this.payment = this.searchProvider.getPayment();
    }

    onSpecialtyClick() {
        this.navCtrl.push(SearchSpecialtyPage);
    }

    onPaymentMethodClick() {
        this.navCtrl.push(PaymentMethodPage);
    }

    onLocationClick() {
        this.navCtrl.push(SearchLocationPage);
    }

    onSearch() {
        this.navCtrl.push(ResultPage, {},
            {animate: true, animation: 'transition', duration: 500, direction: 'forward'});
        // this.presentLoading();
    }

    unfilledField(label) {
        return "<span class='field-label'>" + label + "</span>";
    }
}
