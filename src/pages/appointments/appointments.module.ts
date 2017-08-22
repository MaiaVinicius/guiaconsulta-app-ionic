/**
 * Created by MaiaVinicius on 22/08/17.
 */
import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {AppointmentsPage} from "./appointments";
import {AppointmentInfoPage} from "../appointment-info/appointment-info";

@NgModule({
  declarations: [
    AppointmentsPage,
    AppointmentInfoPage
  ],
  imports: [
    IonicPageModule.forChild(AppointmentsPage),
  ],
  entryComponents: [
    AppointmentsPage,
    AppointmentInfoPage
  ]
})
export class AppointmentsModule {
}
