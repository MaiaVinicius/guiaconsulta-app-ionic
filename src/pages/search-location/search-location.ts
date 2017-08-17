import {Component, NgZone, ViewChild} from '@angular/core';
import {Searchbar, ViewController} from 'ionic-angular';
import {SearchProvider} from "../../providers/search/search";
import {LocationProvider} from "../../providers/location/location";

/**
 * Generated class for the SearchLocationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var google: any;

@Component({
    selector: 'page-search-location',
    templateUrl: 'search-location.html',
})
export class SearchLocationPage {
    public savedLocations;

    autocompleteItems;
    autocomplete;
    service = new google.maps.places.AutocompleteService();
    @ViewChild('searchBarLocation') searchBar: Searchbar;

    constructor(private locationProvider: LocationProvider, private searchProvider: SearchProvider, public viewCtrl: ViewController, private zone: NgZone) {

        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    }

    ionViewDidLoad() {
        this.updateSavedLocations();
    }

    private updateSavedLocations() {
        this.savedLocations = this.searchProvider.updateSavedLocations();
    }

    ngOnInit() {
        setTimeout(() => {
            this.searchBar.setFocus();
        }, 600);
    }


    dismiss() {
        this.viewCtrl.dismiss();
    }

    chooseItem(item: any) {
        if (typeof item === "string") {
            item = {
                address: item
            }
        }
        this.searchProvider.setLocation(item);
        this.dismiss()
    }

    chooseCurrentLocation() {
        let cur = this.locationProvider.current;

        if (!cur) {
            this.locationProvider.getCurrentLocation().then(response => {
                    this.chooseItem(response);
                }
            );
        } else {
            this.chooseItem(this.locationProvider.current);
        }
    }

    updateSearch() {
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        let me = this;
        this.service.getPlacePredictions({
            input: this.autocomplete.query,
            componentRestrictions: {country: 'BR'}
        }, function (predictions, status) {
            me.autocompleteItems = [];
            me.zone.run(function () {
                if (predictions) {
                    predictions.forEach(function (prediction) {
                        me.autocompleteItems.push(prediction.description);
                    });
                }
            });
        });
    }
}
