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
    this.navCtrl.push(SearchLocationPage,{},
      {animate: true, animation: 'transition', duration: 500, direction: 'forward'});
  }
}
