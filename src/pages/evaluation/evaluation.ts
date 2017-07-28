import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';


/**
 * Generated class for the EvaluationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-evaluation',
  templateUrl: 'evaluation.html',
})
export class EvaluationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EvaluationPage');
  }

  onModelChange() {

  }

  addEvaluation() {

  }
}
