import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the InsuranceProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */
@Injectable()
export class InsuranceProvider {
  private registeredInsurances = [
    {
      name: "Bradesco",
      plan: "DELTA",
      owner: 2
    }
  ];

  constructor(public http: Http) {
    console.log('Hello InsuranceProvider Provider');
  }

  getRegisteredInsurances() {
    return this.registeredInsurances;
  }

  addInsurance(insurance) {
    this.registeredInsurances.push(insurance);
  }
}
