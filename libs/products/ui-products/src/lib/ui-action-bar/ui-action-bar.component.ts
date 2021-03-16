import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-ecommerce-action-bar',
  templateUrl: './ui-action-bar.component.html',
  styleUrls: ['./ui-action-bar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class UiActionBarComponent implements OnInit {
  collapsedAction: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  receiveCollapsed($event) {
    this.collapsedAction = $event;
  }
}
