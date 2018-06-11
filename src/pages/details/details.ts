import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, Slides } from 'ionic-angular';
import { AgmCoreModule } from '@agm/core';
import { RestProvider } from '../../providers/rest/rest';
import { Observable } from 'rxjs/Observable';



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
  restaurants: Observable<any>;

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


   //console.log(""+this.resName,this.catType,this.location,this.phone,this.lat,this.lng);

  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');

  }

  next(){
    this.slidesEnabled = true;

    if(this.slides){
      this.slides.lockSwipes(false);
      this.slides.slideNext();
      this.slides.lockSwipes(true);
    }
  }
  prev(){
    if(this.slides){
      this.slides.lockSwipes(false);
      this.slides.slidePrev();
      this.slides.lockSwipes(true);
    }

  }

  getResData() {
    this.restaurants = this.restProvider.getData();
    this.restaurants.subscribe((data)=>{
      //console.log("Res : ",data);
      this.listResData = data;
    });

  }

  ionViewDidLeave(){
   this.slidesEnabled = false;
  }



}
