import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Searchbar, ViewController} from 'ionic-angular';

/**
 * Generated class for the SearchDoctorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-search-doctor',
  templateUrl: 'search-doctor.html',
})
export class SearchDoctorPage {
  @ViewChild('searchBarProfessional') searchBarProfessional: Searchbar;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.searchBarProfessional.setFocus();
    }, 600);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchDoctorPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
