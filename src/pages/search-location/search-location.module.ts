/**
 * Created by MaiaVinicius on 22/08/17.
 */
import {SearchLocationPage} from "./search-location";
import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    SearchLocationPage
  ],
  imports: [
    IonicPageModule.forChild(SearchLocationPage)
  ],
  entryComponents: [
    SearchLocationPage
  ]
})
export class SearchLocationModule {
}
