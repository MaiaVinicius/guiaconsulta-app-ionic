import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Searchbar, ViewController} from 'ionic-angular';

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
  @ViewChild('searchSpecialty') searchBar: Searchbar;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchSpecialtyPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ngOnInit() {
    setTimeout(() => {
      this.searchBar.setFocus();
    }, 800);
  }
}
