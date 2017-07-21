import { Component } from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {AddressAutocompletePage} from "../address-autocomplete/address-autocomplete";

/**
 * Generated class for the SearchLocationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-search-location',
  templateUrl: 'search-location.html',
})
export class SearchLocationPage {
  address;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
    this.address = {
        place: ""
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchLocationPage');
  }

  showAddressModal () {
    let modal = this.modalCtrl.create(AddressAutocompletePage);
    let me = this;
    modal.onDidDismiss(data => {
      this.address.place = data;
    });
    modal.present();
  }
}
