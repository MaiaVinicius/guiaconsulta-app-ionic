import {Component} from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {StepEmailPage} from "../../profile-wizard/personal/step-email/step-email";
import {StepGenderPage} from "../../profile-wizard/personal/step-gender/step-gender";
import {StepBirthPage} from "../../profile-wizard/personal/step-birth/step-birth";
import {StepBloodGroupPage} from "../../profile-wizard/personal/step-blood-group/step-blood-group";
import {StepMaritalStatusPage} from "../../profile-wizard/personal/step-marital-status/step-marital-status";
import {StepHeightPage} from "../../profile-wizard/personal/step-height/step-height";
import {StepWeightPage} from "../../profile-wizard/personal/step-weight/step-weight";

/**
 * Generated class for the ProfilePersonalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile-personal',
  templateUrl: 'profile-personal.html',
})
export class ProfilePersonalPage {
  fields = [
    {
      name: "Número de contato",
    },
    {
      name: "E-mail",
      page: StepEmailPage
    },
    {
      name: "Sexo",
      page: StepGenderPage
    },
    {
      name: "Data de nascimento",
      page: StepBirthPage
    },
    {
      name: "Tipo sanguineo",
      page: StepBloodGroupPage
    },
    {
      name: "Estado civil",
      page: StepMaritalStatusPage
    },
    {
      name: "Altura",
      page: StepHeightPage
    },
    {
      name: "Peso",
      page: StepWeightPage
    }
  ];

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  goToPage(page) {
    let modal = this.modalCtrl.create(page, {
      fillSingle: true
    });
    modal.present();
  }
}
