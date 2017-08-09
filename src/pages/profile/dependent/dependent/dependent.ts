import {Component} from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {DependentAddPage} from "../dependent-add/dependent-add";

/**
 * Generated class for the DependentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-dependent',
  templateUrl: 'dependent.html',
})
export class DependentPage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DependentPage');
  }

  addDependent() {
    let modal = this.modalCtrl.create(DependentAddPage);
    modal.present();
  }
}
