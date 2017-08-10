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
  private googleMapsApiUrl = "https://maps.googleapis.com/maps/api/";
  private geocodeKey = "AIzaSyA2RpD2PmtzXTJe9gTC_KBgtHxCx53hwWU";

  public current = {latlng: {lat: 0, lng: 0}, address: false};

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
          this.current.address = response.json().results[1].formatted_address;
        }
      )
      .catch((err) => {

      });
  }


  getCurrentLocation(): Promise<any> {
    return this.platform.ready().then(() => {

      // get current position
      return this.geolocation.getCurrentPosition().then(pos => {
        this.current.latlng.lat = pos.coords.latitude;
        this.current.latlng.lng = pos.coords.longitude;

        return this.coordsToAddress(pos.coords.latitude, pos.coords.longitude).then(() => {
          return this.current.address;
        });
      });
    });

  }
}
