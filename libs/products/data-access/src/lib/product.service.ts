import { Injectable } from '@angular/core';
import { Product } from '@ecommerce/products/models';
import { ProductsFeatureShellModule } from '@ecommerce/products/feature-shell';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: ProductsFeatureShellModule,
})
export class ProductService {
  products: Product[];

  constructor() {
    this.products = [{
      id: 1,
      name: "Product 1",
      detail: "Lorem ipsum dolor sit amet",
      price: "100",
      hero: "OMG This just came out today!",
      "image": "http://placehold.it/940x300/999/CCC"
    },{
      id: 2,
      name: "Product 2",
      detail: "Lorem ipsum dolor sit amet",
      price: "355",
      hero: "This is the latest and greatest product from Derp corp.",
      image: "http://placehold.it/300x300/999/CCC"
    },{
      id: 3,
      name: "Product 3",
      detail: "Lorem ipsum dolor sit amet",
      price: "450",
      hero: "BOGOF",
      image: "http://placehold.it/300x300/999/CCC"
    },{
      id: 4,
      name: "Product 4",
      detail: "Lorem ipsum dolor sit amet",
      price: "600",
      image: "http://placehold.it/300x300/999/CCC"
    },{
      id: 5,
      name: "Product 5",
      detail: "Lorem ipsum dolor sit amet",
      price: "99",
      hero: "No srsly GTFO",
      image: "http://placehold.it/300x300/999/CCC"
    },{
      id: 6,
      name: "Product 6",
      detail: "Lorem ipsum dolor sit amet",
      price: "877",
      image: 'http://placehold.it/300x300/999/CCC'
    },{
      id: 7,
      name: "Product 7",
      detail: "Lorem ipsum dolor sit amet",
      price: "295",
      hero: "This is the latest and greatest product from Derp corp.",
      image: "http://placehold.it/300x300/999/CCC"
    }]
  }

  // Get list of products
  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

}
