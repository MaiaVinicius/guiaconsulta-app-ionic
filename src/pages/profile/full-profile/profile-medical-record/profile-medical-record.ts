import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfileMedicalRecordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile-medical-record',
  templateUrl: 'profile-medical-record.html',
})
export class ProfileMedicalRecordPage {
  fields = [
    {
      name: "Alergias",
      note: "Adicionar alergias"
    },
    {
      name: "Medicamentos atuais",
      note: "Adicionar medicamentos"
    },
    {
      name: "Últimos medicamentos",
      note: "Adicionar medicamentos"
    },
    {
      name: "Doença crônica",
      note: "Adicionar doença"
    },
    {
      name: "Lesões",
      note: "Adicionar lesões"
    },
    {
      name: "Cirurgias",
      note: "Adicionar cirurgias"
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileMedicalRecordPage');
  }

}
