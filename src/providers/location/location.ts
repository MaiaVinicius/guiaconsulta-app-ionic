import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Platform} from "ionic-angular";
import {Geolocation} from '@ionic-native/geolocation';

/*
 Generated class for the LocationProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */
@Injectable()
export class LocationProvider {
  googleMapsApiUrl = "https://maps.googleapis.com/maps/api/";
  geocodeKey = "AIzaSyA2RpD2PmtzXTJe9gTC_KBgtHxCx53hwWU";

  constructor(public http: Http, private platform: Platform, private geolocation: Geolocation) {
    console.log('Hello LocationProvider Provider');
  }

  coordsToAddress(lat: number, lng: number): Promise<any> {
    return this.http.get(this.googleMapsApiUrl + "geocode/json", {
      params: {
        key: this.geocodeKey,
        address: lat + "," + lng
      }
    })
      .toPromise()
      .then(response => {
          return response.json().results[1].formatted_address
        }
      )
      .catch((err) => {

      });
  }


  getCurrentLocation() {
    this.platform.ready().then(() => {

      // get current position
      this.geolocation.getCurrentPosition().then(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);

        this.coordsToAddress(pos.coords.latitude, pos.coords.longitude).then(result => console.log(result));
      });
    });

  }
}
