import {Component} from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {DependentAddPage} from "../dependent-add/dependent-add";
import {DependentProvider} from "../../../../providers/dependent/dependent";

/**
 * Generated class for the DependentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'depentent-page',
  priority: 'low'
})
@Component({
  selector: 'page-dependent',
  templateUrl: 'dependent.html',
})
export class DependentPage {
  public dependents;

  constructor(private alertCtrl: AlertController, private dependentProvider: DependentProvider, public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.dependents = this.dependentProvider.getDependents();
    console.log(this.dependents)
  }

  addDependent() {
    let modal = this.modalCtrl.create(DependentAddPage);
    modal.present();
  }

  removeDependent() {
    let alert = this.alertCtrl.create({
      title: 'Remover dependente',
      message: 'Tem certeza que deseja remover este dependente?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirmar',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }
}
