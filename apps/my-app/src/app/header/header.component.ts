import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ecommerce-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
