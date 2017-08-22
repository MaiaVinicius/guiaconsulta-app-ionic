/**
 * Created by MaiaVinicius on 22/08/17.
 */
import {InsurancePage} from "./insurance";
import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    InsurancePage
  ],
  imports: [
    IonicPageModule.forChild(InsurancePage)
  ],
  entryComponents: [
    InsurancePage
  ]
})
export class InsurancePageModule {
}
