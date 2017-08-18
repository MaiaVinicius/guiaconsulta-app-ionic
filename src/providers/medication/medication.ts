import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the MedicationProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */
@Injectable()
export class MedicationProvider {
    private reminders = [
        {
            medication_id: "34",
            name: "Dorflex",
            times: "14:00",
            unit: "1.25 Comprimido"
        }
    ];

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

    addMedication(medicationReminder) {
        this.reminders.push(medicationReminder);
    }

    getReminders() {
        return this.reminders;
    }

    getMedicationUnits() {
        return this.medicationUnits;
    }
}
