/**
 * Created by MaiaVinicius on 22/08/17.
 */
import {SearchTermPage} from "./search-term";
import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    SearchTermPage
  ],
  imports: [
    IonicPageModule.forChild(SearchTermPage)
  ],
  entryComponents: [
    SearchTermPage
  ]
})
export class SearchTermModule {
}
