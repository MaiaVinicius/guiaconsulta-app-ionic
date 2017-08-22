/**
 * Created by MaiaVinicius on 22/08/17.
 */
import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {ProfilePage} from "./profile";

@NgModule({
  declarations: [
    ProfilePage
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage)
  ],
  entryComponents: [
    ProfilePage
  ]
})
export class ProfileModule {
}
