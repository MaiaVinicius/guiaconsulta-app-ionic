import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Searchbar, ViewController} from 'ionic-angular';
import {DoctorProfilePage} from "../doctor-profile/doctor-profile";
import {SearchProvider} from "../../providers/search/search";

/**
 * Generated class for the SearchSpecialtyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
    selector: 'page-search-term',
    templateUrl: 'search-term.html',
})
export class SearchTermPage {
    @ViewChild('searchTerm') searchBar: Searchbar;
    public recentSearches;

    constructor(private searchProvider: SearchProvider, public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    ngOnInit() {
        this.recentSearches = this.searchProvider.recentSearches;
        setTimeout(() => {
            this.searchBar.setFocus();
        }, 600);
    }

    chooseTerm(term) {
        this.searchProvider.setSearchTerm(term);
        this.dismiss();
    }

    goToDoctorPage() {
        this.navCtrl.push(DoctorProfilePage);
    }
}
