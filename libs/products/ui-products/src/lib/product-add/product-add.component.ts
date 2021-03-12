import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ecommerce-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent implements OnInit {
  @Input() productAddMode: boolean;
  @Output() cancelAddMode = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  cancelAdd() {
    this.cancelAddMode.emit(false);
  }

}
