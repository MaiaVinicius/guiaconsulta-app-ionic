import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SearchSpecialtyPage} from "../search-specialty/search-specialty";
import {SearchLocationPage} from "../search-location/search-location";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navToSearchSpecialty() {
    this.navCtrl.push(SearchSpecialtyPage);
  }

  navToSearchLocation() {
    //{animate: true, animation: 'transition', duration: 500, direction: 'forward'}
    this.navCtrl.push(SearchLocationPage);
  }
}
