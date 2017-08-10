import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfileLifestylePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile-lifestyle',
  templateUrl: 'profile-lifestyle.html',
})
export class ProfileLifestylePage {
  fields = [
    {
      name: "Hábitos de fumar",
    },
    {
      name: "Consumo de álcool",
    },
    {
      name: "Nível de atividade",
    },
    {
      name: "Prefência alimentar",
    },
    {
      name: "Ocupação",
    },

  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
