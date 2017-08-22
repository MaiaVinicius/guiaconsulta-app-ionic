/**
 * Created by MaiaVinicius on 22/08/17.
 */
import {DependentPage} from "./dependent";
import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    DependentPage
  ],
  imports: [
    IonicPageModule.forChild(DependentPage)
  ],
  entryComponents: [
    DependentPage
  ]
})
export class DependentPageModule {
}
