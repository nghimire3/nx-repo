import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '@ecommerce/products/models';
import { ProductService } from '@ecommerce/products/data-access';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ecommerce-product-details-container',
  templateUrl: './product-details-container.component.html',
  styleUrls: ['./product-details-container.component.scss'],
})
export class ProductDetailsContainerComponent implements OnInit {
  product$: Product;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private dataService: ProductService) { }

  ngOnInit(): void {
    //Fetch the id from url and convert it to number type
    const id = +this.route.snapshot.paramMap.get('id');
    this.getProduct(id);
  }

  getProduct(id: number) {
    this.dataService.getProduct(id).subscribe(products => {
      this.product$ = products;
    })
  }
}
