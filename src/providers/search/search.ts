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
    public searchTerm;
    public location;
    public payment;
    public invokeEventLocation: Subject<any> = new Subject();
    public invokeEventSearchTerm: Subject<any> = new Subject();
    public recentSearches = [
        {
            term: "Cardiologista",
            type: 1,
            typeStr: "Especialidade"
        },{
            term: "Clinico geral",
            type: 1,
            typeStr: "Especialidade"
        },{
            term: "Mamografia",
            type: 3,
            typeStr: "Exame"
        },{
            term: "Botox",
            type: 4,
            typeStr: "Procedimento"
        },{
            term: "Hepatite A",
            type: 5,
            typeStr: "Vacina"
        },
    ];

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

    public setSearchTerm(term) {
        this.invokeEventSearchTerm.next(term);
        this.searchTerm = term;
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
