import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
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
            medication: {
                attributes: {
                    titulo: "Dorflex",
                    thumbnail: "https://plataforma.memed.com.br/resources/img/tarjas/vermelho.png",
                }
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
    private memedUrl = "http://integracao.api.memed.com.br/v1/apresentacoes";

    API_KEY = "OstiuP8TGS313ejeAUSyW6MWUufLaVHCmvrJnC4n1xk3uAnHQEIyFRyBEevpOzbG";
    SECRET_KEY = "6f8CFVaKW88HU6Mk22iOgwxlETRI69Va0nB5MTg5BlBSwo9s3vvhsOoOreMT7P1D";


    constructor(public http: Http) {
    }

    addMedicationReminder(medicationReminder) {
        this.reminders.push(medicationReminder);
    }

    getMedications(keyword): Promise<any> {
        return this.http.get(this.memedUrl, {
            params: {
                "filter[categoria]": "industrializados",
                "filter[q]": keyword,
                "limit": 100,
                "api-key": this.API_KEY,
                "secret-key": this.SECRET_KEY
            }
        })
            .toPromise()
            .then((value) => {
                return value.json().data;
            });
    }

    getReminders() {
        return this.reminders;
    }

    getMedicationUnits() {
        return this.medicationUnits;
    }
}
