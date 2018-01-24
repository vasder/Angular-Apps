import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AddressService {

  constructor(private http: HttpClient) { }

  getStates() {
    return this.http.get('/assets/usstates.json');
  }
}
