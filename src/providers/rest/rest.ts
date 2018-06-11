import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Details } from '../../details';

@Injectable()
export class RestProvider {

  apiUrl = Details.URL;

  constructor(public httpClient: HttpClient) {
    console.log('Hello RestProvider Provider');

  }

   getData() {
    return this.httpClient.get(this.apiUrl+'restaurant');
  }


}


