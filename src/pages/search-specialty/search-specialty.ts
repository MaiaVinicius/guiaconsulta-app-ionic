import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Searchbar} from 'ionic-angular';

/**
 * Generated class for the SearchSpecialtyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-search-specialty',
  templateUrl: 'search-specialty.html',
})
export class SearchSpecialtyPage {
  @ViewChild('searchSpecialty') searchSpecialty: Searchbar;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchSpecialtyPage');
  }

  ngOnInit() {
    setTimeout(function () {
      this.searchSpecialty.setFocus();
    }, 400);
  }
}
