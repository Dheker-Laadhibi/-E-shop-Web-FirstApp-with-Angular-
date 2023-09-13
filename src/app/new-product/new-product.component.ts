import { Component } from '@angular/core';

import {ProductService} from "../services/api/products/product.service";
import {Router} from "@angular/router";
import { ProductRepresentation } from '../services/api/Models/product-representation';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent {

  product: ProductRepresentation ={};

  constructor(
    private service: ProductService,
    private router: Router
  ) {
  }

  saveProduct() {
    this.service.createProduct(this.product)
      .subscribe({
        next: (result) => {
          this.router.navigate(['products']);
        }
      });
  }
}