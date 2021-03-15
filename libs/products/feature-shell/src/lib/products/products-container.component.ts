import { Component, OnInit} from '@angular/core';
import { Product } from '@ecommerce/products/models';
import { ProductService } from '../../../../data-access/src/lib/product.service';

@Component({
  selector: 'ecommerce-products',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsContainerComponent implements OnInit {
  products: Product[];

  /*
    Initially when the products is rendered to the component, the addProduct form is disabled by setting productAddMode to false
  */
  productAddMode = false;

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.products = this._productService.getProducts();
  }

  // Open up the product add form by setting the productAddMode to true
  // The boolean value is emitted by the add button on productList component
  onAddProductClick(event: boolean) {
    this.productAddMode = event;
  }
}
