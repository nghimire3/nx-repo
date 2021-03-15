import { Component, OnInit} from '@angular/core';
import { Product } from '@ecommerce/products/models';
import { ProductService } from '../../../../data-access/src/lib/product.service';

@Component({
  selector: 'ecommerce-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[];
  productAddMode = false;

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.products = this._productService.getProducts();
  }

  onAddProductClick(event: boolean) {
    this.productAddMode = event;
  }
}
