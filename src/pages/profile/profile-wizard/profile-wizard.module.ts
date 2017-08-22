/**
 * Created by MaiaVinicius on 22/08/17.
 */
import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {StepEmailPage} from "./personal/step-email/step-email";
import {StepGenderPage} from "./personal/step-gender/step-gender";
import {StepBloodGroupPage} from "./personal/step-blood-group/step-blood-group";
import {StepBirthPage} from "./personal/step-birth/step-birth";
import {StepHeightPage} from "./personal/step-height/step-height";
import {StepMaritalStatusPage} from "./personal/step-marital-status/step-marital-status";
import {StepWeightPage} from "./personal/step-weight/step-weight";
import {StepLocationPage} from "./personal/step-location/step-location";
import {ProfileWizardProvider} from "../../../providers/profile-wizard/profile-wizard";

@NgModule({
  declarations: [
    StepEmailPage,
    StepGenderPage,
    StepBirthPage,
    StepBloodGroupPage,
    StepMaritalStatusPage,
    StepHeightPage,
    StepWeightPage,
    StepLocationPage,
  ],

  imports: [
    IonicPageModule.forChild(StepEmailPage)
  ],
  entryComponents: [

    StepEmailPage,
    StepGenderPage,
    StepBirthPage,
    StepBloodGroupPage,
    StepMaritalStatusPage,
    StepHeightPage,
    StepWeightPage,
    StepLocationPage,
  ],
  providers: [
    ProfileWizardProvider,
  ]
})
export class ProfileWizardModule {
}
