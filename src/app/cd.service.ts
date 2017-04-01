import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CdService {
  constructor(private http:Http) {
    console.log('Task Service Initialized...');
  }

  getCds() {
    return this.http.get('http://localhost:3000/cds')
      .map(res => res.json());
  }

  addCd(newCd) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/cd', JSON.stringify(newCd), {headers:headers})
      .map(res => res.json());
  }

  deleteCd(id) {
    return this.http.delete('http://localhost:3000/cd/'+id)
      .map(res => res.json());
  }

  updateStatus(task) {
  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.put('http://localhost:3000/cd/'+task._id, JSON.stringify(task), {headers:headers})
    .map(res => res.json());
  }

}
