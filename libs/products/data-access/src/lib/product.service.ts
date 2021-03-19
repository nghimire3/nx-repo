import { Injectable } from '@angular/core';
import { Product } from '@ecommerce/products/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

/*
  Fetches mock data
 */
@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("assets/mockData.json");
  }

  public getProduct(id: number): Observable<Product>{
    return this.getProducts().pipe(
      map(products => products.find(product => product.id === id))
    );
  }


}
