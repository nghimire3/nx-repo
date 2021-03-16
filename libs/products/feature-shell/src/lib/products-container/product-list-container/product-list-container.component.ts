import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { Product } from '@ecommerce/products/models';
import { ProductService } from '../../../../../data-access/src/lib/product.service';

@Component({
  selector: 'ecommerce-product-list-container',
  templateUrl: './product-list-container.component.html',
  styleUrls: ['./product-list-container.component.scss'],
})
export class ProductListContainerComponent implements OnInit {
  products$: Product[];

  // This receive the boolean value from the product-container component
  // which helps to disable and enable the collapse and expand button as needed
  @Input() collapseButtonIsEnabled : Boolean;

  // Each of these events are emitted by two buttons (Collapse Button and Expand Button)
  @Output() collapsedMode = new EventEmitter<Boolean>();
  @Output() expandedMode = new EventEmitter<Boolean>();

  constructor(private _productService: ProductService) {
  }

  ngOnInit(): void {
    // Gets the data from the service
    this._productService.getProducts().subscribe(products => {
      this.products$ = products
    })
  }

  // When user clicks the expand button, it will disable the collapse button
  collapsedButton() {
    console.log('Collapse button is clicked')
    this.collapsedMode.emit(false);

  }

// When user clicks the collapse button, it will enable the collapse button again
  expandedButton() {
    console.log('Expanded button is clicked')
    this.collapsedMode.emit(true);
  }
}
