import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ui-ecommerce-product-add',
  templateUrl: './ui-ecommerce-product-add.component.html',
  styleUrls: ['ui-ecommerce-product-add.component.scss'],
})
export class UiEcommerceProductAddComponent implements OnInit {
  @Input() productAddMode: boolean;
  @Output() cancelAddMode = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  cancelAdd() {
    this.cancelAddMode.emit(false);
  }
}
