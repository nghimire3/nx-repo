import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ui-ecommerce-product-add',
  templateUrl: './ui-ecommerce-product-add.component.html',
  styleUrls: ['ui-ecommerce-product-add.component.scss'],
})
export class UiEcommerceProductAddComponent implements OnInit {

  /* When user clicks the cancel button on Add Product Form, it will emit the boolean (false).
  That will close the form. */
  @Output() cancelAddMode = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  cancelAdd() {
    this.cancelAddMode.emit(false);
  }
}
