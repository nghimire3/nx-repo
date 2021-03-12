import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from '@ecommerce/products/models';

@Component({
  selector: 'ecommerce-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {

  @Input() products : Product[];
  @Output() addMode = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addButton() {
    this.addMode.emit(true);
  }
}
