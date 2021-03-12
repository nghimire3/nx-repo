import { NgModule } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { ProductAddComponent, ProductsListComponent } from '@ecommerce/products/ui-products';
import { CommonModule } from '@angular/common';
import { ProductsFeatureShellRoutingModule } from './products-feature-shell-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProductsFeatureShellRoutingModule
  ],
  declarations: [ProductsComponent, ProductsListComponent, ProductAddComponent],
  exports: [ProductsComponent]
})
export class ProductsFeatureShellModule {}
