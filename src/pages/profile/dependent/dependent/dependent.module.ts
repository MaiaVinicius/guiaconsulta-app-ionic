/**
 * Created by MaiaVinicius on 22/08/17.
 */
import {DependentPage} from "./dependent";
import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {DependentAddPage} from "../dependent-add/dependent-add";
import {DependentProvider} from "../../../../providers/dependent/dependent";

@NgModule({
  declarations: [
    DependentPage,
    DependentAddPage
  ],
  imports: [
    IonicPageModule.forChild(DependentPage)
  ],
  entryComponents: [
    DependentPage,
    DependentAddPage
  ],
  providers: [
    DependentProvider
  ]
})
export class DependentModule {
}
