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
    private reminders = [
        {
            medication:{
                id: 123,
                name: "Dorflex"
            },
            times: "14:00",
            unit: "1.25 Comprimido"
        }
    ];
    public invokeEventMedication: Subject<any> = new Subject();
    private medicationUnits = [
        {
            id: 1,
            name: "Gota"
        },
        {
            id: 2,
            name: "Comprimido"
        }
    ];

    constructor(public http: Http) {
    }

    addMedicationReminder(medicationReminder) {
        this.reminders.push(medicationReminder);
    }

    getReminders() {
        return this.reminders;
    }

    getMedicationUnits() {
        return this.medicationUnits;
    }
}
