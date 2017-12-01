import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CatalogService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('/assets/products.json');
  }

  getProductsById(prodId) {
    const httpObservable = this.http.get('/assets/products.json');
    const modifiedObservable = httpObservable
      .map((products: any) => {
        return products.find(p => {
          return p.ProductId === prodId;
        });
      });
    return modifiedObservable;
  }

}
