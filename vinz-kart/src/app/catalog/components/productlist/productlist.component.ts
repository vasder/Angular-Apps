import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../catalog.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.less']
})
export class ProductlistComponent implements OnInit {
  products: any = [];
  constructor(private service: CatalogService) { }

  ngOnInit() {
    this.service.getProducts()
      .subscribe(products => {
        console.log('products :' + products);
        this.products = products;
      });
  }

}
