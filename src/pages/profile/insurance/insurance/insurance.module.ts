/**
 * Created by MaiaVinicius on 22/08/17.
 */
import {InsurancePage} from "./insurance";
import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {InsuranceSearchPage} from "../insurance-search/insurance-search";
import {InsuranceAddPage} from "../insurance-add/insurance-add";
import {InsuranceProvider} from "../../../../providers/insurance/insurance";

@NgModule({
  declarations: [
    InsurancePage,
    InsuranceAddPage,
    InsuranceSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(InsurancePage)
  ],
  entryComponents: [
    InsurancePage,
    InsuranceAddPage,
    InsuranceSearchPage,
  ],
  providers: [
    InsuranceProvider,
  ]
})
export class InsuranceModule {
}
