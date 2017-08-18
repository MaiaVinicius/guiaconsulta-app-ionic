import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Subject} from "rxjs/Subject";

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
  public invokeEventInsurance: Subject<any> = new Subject();
  private searchInsurances = [
    {
      name: "Bradesco",
    },
    {
      name: "Sul America"
    }
  ];

  constructor(public http: Http) {
    console.log('Hello InsuranceProvider Provider');
  }

  setInsurance(insurance) {
    this.invokeEventInsurance.next(insurance);
  }

  getMainInsurances() {
    return this.searchInsurances;
  }

  getInsurances(keyword) {
    return this.searchInsurances;
  }

  getRegisteredInsurances() {
    return this.registeredInsurances;
  }

  addInsurance(insurance) {
    this.registeredInsurances.push(insurance);
  }
}
