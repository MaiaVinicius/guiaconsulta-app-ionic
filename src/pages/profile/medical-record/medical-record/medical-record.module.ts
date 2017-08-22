/**
 * Created by MaiaVinicius on 22/08/17.
 */
import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {MedicalRecordPage} from "./medical-record";
import {File} from "@ionic-native/file";
import {Transfer} from "@ionic-native/transfer";
import {Camera} from "@ionic-native/camera";
import {FilePath} from "@ionic-native/file-path";

@NgModule({
  declarations: [
    MedicalRecordPage
  ],

  imports: [
    IonicPageModule.forChild(MedicalRecordPage)
  ],
  entryComponents: [
    MedicalRecordPage,
  ],
  providers: [
    File,
    Transfer,
    Camera,
    FilePath,
  ]
})
export class MedicalRecordModule {
}
