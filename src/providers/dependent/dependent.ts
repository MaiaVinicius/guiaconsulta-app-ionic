import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the DependentProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */
@Injectable()
export class DependentProvider {
  private dependents = [{
    id: 2,
    name: "João",
    relationship: "Filho (a)"
  }, {
    id: 3,
    name: "Maria",
    relationship: "Filho (a)"
  }, {
    id: 4,
    name: "Rafaela",
    relationship: "Sobrinho (a)"
  },];

  constructor(public http: Http) {
    console.log('Hello DependentProvider Provider');
  }

  addDependent(dependent) {
    this.dependents.push(dependent);
  }

  getDependents() {
    return this.dependents;
  }
}
