import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ui-ecommerce-product-add',
  templateUrl: './ui-product-add.component.html',
  styleUrls: ['ui-product-add.component.scss'],
})
export class UiProductAddComponent implements OnInit {

  /* When user clicks the cancel button on Add Product Form, it will emit the boolean (false).
  That will close the form. */
  @Output() cancelAddMode = new EventEmitter();

  ngOnInit(): void {
  }

  // Hide Add Product form when cancel button is clicked
  cancelAdd() {
    this.cancelAddMode.emit(false);
  }
}
