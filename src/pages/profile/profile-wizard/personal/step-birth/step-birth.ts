import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {StepBloodGroupPage} from "../step-blood-group/step-blood-group";
import {ProfilePage} from "../../../profile/profile";

/**
 * Generated class for the StepBirthPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-step-birth',
  templateUrl: 'step-birth.html',
})
export class StepBirthPage {
  myDate = new Date();
  simpleColumns = [
    {
      name: 'col1',
      options: [
        {text: '1', value: '1'},
        {text: '2', value: '2'},
        {text: '3', value: '3'}
      ]
    }, {
      name: 'col2',
      options: [
        {text: '1-1', value: '1-1'},
        {text: '1-2', value: '1-2'},
        {text: '2-1', value: '2-1'},
        {text: '2-2', value: '2-2'},
        {text: '3-1', value: '3-1'}
      ]
    }, {
      name: 'col3',
      options: [
        {text: '1-1-1', value: '1-1-1'},
        {text: '1-1-2', value: '1-1-2'},
        {text: '1-2-1', value: '1-2-1'},
        {text: '1-2-2', value: '1-2-2'},
        {text: '2-1-1', value: '2-1-1'},
        {text: '2-1-2', value: '2-1-2'},
        {text: '2-2-1', value: '2-2-1'},
        {text: '2-2-2', value: '2-2-2'},
        {text: '3-1-1', value: '3-1-1'},
        {text: '3-1-2', value: '3-1-2'}
      ]
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StepBirthPage');
  }

  nextStep() {
    this.navCtrl.push(StepBloodGroupPage, {},
      {animate: true, animation: 'transition', duration: 500, direction: 'forward'});
  }
  backStep(){
    this.navCtrl.pop({animate: true, animation: 'transition', duration: 500, direction: 'back'});
  }

  close() {
    this.navCtrl.setRoot(ProfilePage, {}, {animate: true, animation: 'transition', duration: 500, direction: 'back'});
  }
}
