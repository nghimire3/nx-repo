import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from '@ecommerce/products/models';

@Component({
  selector: 'ui-ecommerce-products-list',
  templateUrl: './ui-ecommerce-products-list.component.html',
  styleUrls: ['./ui-ecommerce-products-list.component.scss'],
})
export class UiEcommerceProductsListComponent implements OnInit {

  @Input() products : Product[];
  @Output() addMode = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addButton() {
    this.addMode.emit(true);
  }
}
