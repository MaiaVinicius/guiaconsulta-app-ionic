/**
 * Created by MaiaVinicius on 22/08/17.
 */
import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {FullProfilePage} from "./full-profile";
import {SuperTabsController, SuperTabsModule} from "ionic2-super-tabs";
import {ProfileLifestylePage} from "../profile-lifestyle/profile-lifestyle";
import {ProfileMedicalRecordPage} from "../profile-medical-record/profile-medical-record";
import {ProfilePersonalPage} from "../profile-personal/profile-personal";

@NgModule({
  declarations: [
    FullProfilePage,
    ProfileLifestylePage,
    ProfileMedicalRecordPage,
    ProfilePersonalPage,
  ],
  imports: [
    IonicPageModule.forChild(FullProfilePage),
    SuperTabsModule,
  ],
  entryComponents: [
    FullProfilePage,
    ProfileLifestylePage,
    ProfileMedicalRecordPage,
    ProfilePersonalPage,
  ],
  providers: [
    SuperTabsController
  ]
})
export class FullProfileModule {
}
