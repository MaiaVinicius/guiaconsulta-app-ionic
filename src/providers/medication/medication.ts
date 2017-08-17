import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Subject} from "rxjs/Subject";

/*
 Generated class for the MedicationProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */
@Injectable()
export class MedicationProvider {
    public invokeEventMedication: Subject<any> = new Subject();
    private reminders = [
        {
            medication_id: "34",
            name: "Dorflex",
            times: "14:00",
            unit: "1.25 Comprimido"
        }
    ];

    constructor(public http: Http) {
    }

    addMedication(medicationReminder) {
        this.reminders.push(medicationReminder);
        this.invokeEventMedication.next(this.reminders);
    }

    getReminders() {
        return this.reminders;
    }
}
