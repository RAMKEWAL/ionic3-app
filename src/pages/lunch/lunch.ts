import { DetailsPage } from './../details/details';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';




/**
 * Generated class for the LunchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lunch',
  templateUrl: 'lunch.html',
})
export class LunchPage {

  dataRest: any;
  listResData:any;
  itemdetails:any;

  searchedList: boolean;
  searchData =[];
  searchCounter = 0;




  constructor(public navCtrl: NavController, public navParams: NavParams,public restProvider: RestProvider) {
    this.getResData();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LunchPage');
  }

  // getResData() {
  //   this.restProvider.getData()
  //   .then(data => {
  //     this.dataRest = data;
  //     this.listResData = this.dataRest.restaurants;
  //     console.log("Lunch Page"+this.dataRest.restaurants);
  //   });
  // }
  getResData() {
    this.restProvider.getData()
    .then(data => {

      this.listResData = data;

      //console.log("Lunch Page"+JSON.stringify(data));
    });
  }

  // showDetails(item_detals){
  //   console.log("image clicked"+item_detals.name);
  //   this.navCtrl.push(DetailsPage,{
  //     Resname:item_detals.name,
  //     CatType: item_detals.category,
  //     Location: item_detals.location.formattedAddress[0],
  //     Phone: item_detals.contact.formattedPhone,
  //     Twitter:item_detals.contact.twitter,
  //     Lat:item_detals.location.lat,
  //     Lng:item_detals.location.lng
  //   });
  // }
  showDetails(item_detals){
    console.log("image clicked"+item_detals.name);
    this.navCtrl.push(DetailsPage,{
      Resname:item_detals.name,
      Des: item_detals.description,
      Location: item_detals.address,
      Phone: item_detals.contact,
      Lat:item_detals.lat,
      Lng:item_detals.lng
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
      //this.shopListPromotions = [];
      this.searchedList = true;
      if (val && val.trim() != "") {
        this.searchData = this.searchData.filter(item => {
          return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
        });
      }
    }
  }
  onCancel(event) {
    this.searchedList = false;
  }
  onClear(event, myInput) {
    this.searchCounter++;
    if (this.searchCounter % 2 == 0) {
      this.searchData = [];
    }
  }




}
