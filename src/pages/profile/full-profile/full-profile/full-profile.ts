import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {SuperTabs} from "ionic2-super-tabs";
import {ProfileLifestylePage} from "../profile-lifestyle/profile-lifestyle";
import {ProfileMedicalRecordPage} from "../profile-medical-record/profile-medical-record";
import {ProfilePersonalPage} from "../profile-personal/profile-personal";

/**
 * Generated class for the FullProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-full-profile',
  templateUrl: 'full-profile.html',
})
export class FullProfilePage {
  @ViewChild(SuperTabs) superTabs: SuperTabs;
  personal: any = ProfilePersonalPage;
  medical: any = ProfileMedicalRecordPage;
  lifestyle: any = ProfileLifestylePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FullProfilePage');
  }

  slideToIndex(index: number) {
    this.superTabs.slideTo(index);
  }

  hideToolbar() {
    this.superTabs.showToolbar(false);
  }
}
