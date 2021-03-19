import { Component } from '@angular/core';


@Component({
  selector: 'ecommerce-products',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss'],
})
export class ProductsContainerComponent {

  // Hard coded value
  collapsedMode = true;
  expandedMode = false;
}
