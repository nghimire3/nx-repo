import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'ecommerce-products',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss'],
})
export class ProductsContainerComponent implements OnInit {

  // Initially, the collapse mode is enabled and expanded mode is disabled
  collapsedMode = true;
  expandedMode = false;

  ngOnInit(): void {
  }

  // When user clicks the collapse icon, it will receive the event as a boolean which will set collapseMode to false
  onCollapseButtonClick(event: boolean) {
    this.collapsedMode = event;
    console.log(this.collapsedMode)
  }

// When user clicks the expand icon, it will receive the event as a boolean which will set collapseMode to true again
  onExpandedButtonClick(event: boolean) {
    this.expandedMode = event;
    console.log(this.expandedMode)
  }

}
