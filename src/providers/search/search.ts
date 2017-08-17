import {EventEmitter, Injectable, Output} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {LocationProvider} from "../location/location";
import {Subject} from "rxjs/Subject";

/*
 Generated class for the SearchProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */
@Injectable()
export class SearchProvider {
    public location;
    public payment;
    public invokeEventLocation: Subject<any> = new Subject();

    constructor(public http: Http, public locationProvider: LocationProvider) {

        this.getCurrentLocation();
    }

    private getCurrentLocation() {
        this.locationProvider.getCurrentLocation().then(response => {
                this.setLocation(response);
            }
        );
    }

    public getLocation() {
        return this.location;
    }

    public setLocation(location) {
        this.invokeEventLocation.next(location);
        this.location = location;
    }

    public getPayment() {
        return this.payment;
    }

    public setPayment(payment) {
        this.payment = payment;
    }

    public updateSavedLocations() {
        return [{
            label: "Trabalho",
            icon: "briefcase",
            address: "Endereco 1"
        }, {
            label: "Casa",
            icon: "home",
            address: "Endereco 2"
        }];
    }
}
