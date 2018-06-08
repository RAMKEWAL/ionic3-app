import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Details } from '../../details';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  //apiUrl = 'https://s3.amazonaws.com/br-codingexams/restaurants.json';
  apiUrl = Details.URL;

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');

  }

  // getData() {

  //   return new Promise(resolve => {
  //     this.http.get(this.apiUrl).subscribe(data => {
  //       resolve(data);
  //     }, err => {
  //       console.log(err);
  //     });
  //   });

  // }
   getData() {

    return new Promise(resolve => {
      this.http.get(this.apiUrl+'restaurant').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });

  }


}


