import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the UserProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */
@Injectable()
export class UserProvider {
    private user = {
        id: 1,
        name: "Vinicius Maia"
    };

    constructor(public http: Http) {
    }

    getUser() {
        return this.user;
    }


}
