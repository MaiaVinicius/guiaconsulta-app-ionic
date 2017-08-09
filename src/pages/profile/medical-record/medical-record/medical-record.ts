import {Component} from '@angular/core';
import {ActionSheetController, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the MedicalRecordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-medical-record',
  templateUrl: 'medical-record.html',
})
export class MedicalRecordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicalRecordPage');
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Adicionar um prontuário',
      buttons: [
        {
          text: 'Tirar uma foto',
          icon: 'camera',
          cssClass: 'actionsheet-option',
          // role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Adicionar da galeria',
          icon: 'image',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: 'Fazer upload de arquivo',
          icon: 'document',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

}
