import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Gw2Service {

  apiPath = 'https://api.guildwars2.com/v2/';
  apiKey = '115743F3-654A-DE44-830F-6C5A3B756A12CFA8DD84-19F4-49A0-9C55-9B32BFD89E77';

  constructor(private http: Http) {
    console.log('gw2 service initialised');
  }

  getAccount() {
    return this.http.get(this.apiPath + 'account?access_token=' + this.apiKey)
      .map(res => res.json())
  }

  getBank() {
    return this.http.get(this.apiPath + 'account/bank?access_token=' + this.apiKey)
      .map(res => res.json())
  }

  getMaterials() {
    return this.http.get(this.apiPath + 'account/materials?access_token=' + this.apiKey)
      .map(res => res.json())
  }
  
  getItem(id) {
    return this.http.get(this.apiPath + 'items/id/'+id+'?access_token=' + this.apiKey)
      .map(res => res.json())
  }


}
