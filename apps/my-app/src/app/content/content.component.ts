import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ecommerce-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
