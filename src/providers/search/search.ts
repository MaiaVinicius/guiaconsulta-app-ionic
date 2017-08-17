import {EventEmitter, Injectable, Output} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the SearchProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */
@Injectable()
export class SearchProvider {
  public location;
  public payment;
  @Output() open: EventEmitter<any> = new EventEmitter();

  constructor(public http: Http) {
    console.log('Hello SearchProvider Provider');
  }

  public getLocation() {
    return this.location;
  }

  public setLocation(location) {
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
