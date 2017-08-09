import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the DependentAddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-dependent-add',
  templateUrl: 'dependent-add.html',
})
export class DependentAddPage {
  @ViewChild('inputName') inputName;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.inputName.setFocus();
    }, 500);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
