
import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the RestaurantlistProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestaurantlistProvider {


  constructor(public http: Http) {
    console.log('Hello RestaurantlistProvider Provider');
  }

}
