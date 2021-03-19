import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '@ecommerce/products/models';
import { ProductService } from '@ecommerce/products/data-access';

@Component({
  selector: 'ecommerce-product-list-container',
  templateUrl: './product-list-container.component.html',
  styleUrls: ['./product-list-container.component.scss'],
})
export class ProductListContainerComponent implements OnInit {
  products$: Product[];

  // Initially, the collapse mode is enabled and expanded mode is disabled
  collapsedMode = true;
  expandedMode = false;

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this._productService.getProducts().subscribe(products => {
      this.products$ = products
    })
  }

  // When user clicks the collapse icon, it will receive
  // the event as a boolean which will set collapseMode to false
  onCollapseButtonClick(event: boolean) {
    this.collapsedMode = event;
  }

// When user clicks the expand icon, it will receive
// the event as a boolean which will set collapseMode to true again
  onExpandedButtonClick(event: boolean) {
    this.expandedMode = event;
  }

}
