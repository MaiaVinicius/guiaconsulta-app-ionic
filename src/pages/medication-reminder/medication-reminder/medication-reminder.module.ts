/**
 * Created by MaiaVinicius on 22/08/17.
 */
import {MedicationReminderPage} from "./medication-reminder";
import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    MedicationReminderPage
  ],
  imports: [
    IonicPageModule.forChild(MedicationReminderPage)
  ],
  entryComponents: [
    MedicationReminderPage
  ]
})
export class MedicationReminderPageModule {
}
