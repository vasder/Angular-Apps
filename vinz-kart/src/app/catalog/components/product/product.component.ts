import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from '../../catalog.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  product;
  today = Date.now();
  // today= today.Date

  constructor(
    private route: ActivatedRoute,
    private service: CatalogService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(param => {
        console.log(param.productId);
        this.service.getProductsById(param.productId)
          .subscribe(product => {
            this.product = product;
          });
      });
  }

}
