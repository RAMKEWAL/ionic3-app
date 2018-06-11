import { DetailsPage } from "./../details/details";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { RestProvider } from "../../providers/rest/rest";
import { Observable } from "rxjs/Observable";

/**
 * Generated class for the LunchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-lunch",
  templateUrl: "lunch.html"
})
export class LunchPage {
  dataRest: any;
  listResData: any;
  itemdetails: any;

  searchedList: boolean;
  searchData = [];
  restaurants: Observable<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public restProvider: RestProvider
  ) {
    this.getResData();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LunchPage");
  }

  getResData() {
    this.restaurants = this.restProvider.getData();
    this.restaurants.subscribe(data => {
      //console.log("Res : ",data);
      this.listResData = data;
    });
  }

  showDetails(item_detals) {
    //console.log("image clicked"+item_detals.name);
    this.navCtrl.push(DetailsPage, {
      Resname: item_detals.name,
      Des: item_detals.description,
      Location: item_detals.address,
      Phone: item_detals.contact,
      Lat: item_detals.lat,
      Lng: item_detals.lng
    });
  }

  setItems() {
    this.searchData = this.listResData;
  }

  filterItems(ev: any) {
    this.setItems();
    let val = ev.target.value;
    if (val == undefined) {
      this.searchData = [];
      this.searchedList = false;
    }
    if (val == "") {
      this.searchedList = false;
    } else {
      this.searchedList = true;
      if (val && val.trim() != "") {
        if (this.searchData != null) {
          this.searchData = this.searchData.filter(item => {
            return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
          });
        }
      }
    }
  }
}
