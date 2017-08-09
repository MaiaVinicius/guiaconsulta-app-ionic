import {Component, NgZone, ViewChild} from '@angular/core';
import {Searchbar, ViewController} from 'ionic-angular';

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
  autocompleteItems;
  autocomplete;
  service = new google.maps.places.AutocompleteService();
  @ViewChild('searchBarLocation') searchBar: Searchbar;

  constructor(public viewCtrl: ViewController, private zone: NgZone) {

    this.autocompleteItems = [];
    this.autocomplete = {
      query: ''
    };
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
    this.viewCtrl.dismiss(item);
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
        predictions.forEach(function (prediction) {
          me.autocompleteItems.push(prediction.description);
        });
      });
    });
  }
}
