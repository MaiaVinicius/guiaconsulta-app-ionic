/**
 * Created by MaiaVinicius on 22/08/17.
 */
import {PaymentMethodPage} from "./payment-method";
import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    PaymentMethodPage
  ],
  imports: [
    IonicPageModule.forChild(PaymentMethodPage)
  ],
  entryComponents: [
    PaymentMethodPage
  ]
})
export class PaymentMethodPageModule {
}
