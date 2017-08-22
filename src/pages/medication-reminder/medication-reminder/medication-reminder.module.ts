/**
 * Created by MaiaVinicius on 22/08/17.
 */
import {MedicationReminderPage} from "./medication-reminder";
import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {MedicationReminderAddPage} from "../medication-reminder-add/medication-reminder-add";
import {SearchMedicationPage} from "../search-medication/search-medication";
import {MedicationProvider} from "../../../providers/medication/medication";

@NgModule({
  declarations: [
    MedicationReminderPage,
    MedicationReminderAddPage,
    SearchMedicationPage
  ],
  imports: [
    IonicPageModule.forChild(MedicationReminderPage)
  ],
  entryComponents: [
    MedicationReminderPage,
    MedicationReminderAddPage,
    SearchMedicationPage
  ],
  providers: [
    MedicationProvider,
  ]
})
export class MedicationReminderModule {
}
