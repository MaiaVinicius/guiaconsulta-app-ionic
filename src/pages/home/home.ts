import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {SearchTermPage} from "../search-term/search-term";
import {SearchLocationPage} from "../search-location/search-location";
import {PaymentMethodPage} from "../payment-method/payment-method";
import {ResultPage} from "../result/result";
import {SearchProvider} from "../../providers/search/search";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {
    public location;
    public searchTerm;
    public payment;

    constructor(public navParams: NavParams, public searchProvider: SearchProvider, public navCtrl: NavController) {

    }

    ngOnInit() {
        this.searchProvider.invokeEventLocation.subscribe((value) => {
            console.log(value);
            this.location = value;
        });
        this.searchProvider.invokeEventSearchTerm.subscribe((value) => {
            console.log(value);
            this.searchTerm = value;
        });
        this.searchProvider.invokeEventPayment.subscribe((value) => {
            console.log(value);
            this.payment = value;
        });
    }

    onSpecialtyClick() {
        this.navCtrl.push(SearchTermPage);
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
