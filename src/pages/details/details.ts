import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, Slides } from 'ionic-angular';
import { AgmCoreModule } from '@agm/core';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  @ViewChild(Slides) slides: Slides;
  dataRest: any;
  listResData:any;
  slidesEnabled = false;

  // @ViewChild('map') element;


  // lat: number = 51.678418;
  // lng: number = 7.809007;

  resName;
  catType;
  location;
  phone;
  twitter;
  lat;
  lng;




  constructor(public navCtrl: NavController, public navParams: NavParams,public plt: Platform,public restProvider: RestProvider) {
    this.getResData();
    this.resName =navParams.get("Resname");
    this.catType = navParams.get("Des");
    this.location = navParams.get("Location");
    this.phone = navParams.get("Phone");

    this.lat = Number(navParams.get("Lat"));
    this.lng =Number(navParams.get("Lng")) ;


   // console.log(""+this.resName,this.catType,this.location,this.phone,this.twitter,this.lat,this.lng);

  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();


  }
  next(){
    this.slidesEnabled = true;
    if(this.slides){
      this.slides.slideNext();

    }
  }
  prev(){
    if(this.slides){
      this.slides.slidePrev();
    }

  }

  getResData() {
    this.restProvider.getData()
    .then(data => {

      this.listResData = data;
     // console.log("ResList :"+JSON.stringify(this.listResData));



    });
  }

  ionViewDidLeave(){
   this.slidesEnabled = false;
  }



}
