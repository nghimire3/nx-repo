import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsFeatureShellRoutingModule } from './products-feature-shell-routing.module';
import { ProductDataAccessModule } from '@ecommerce/products/data-access';
import { ProductsComponent } from './products/products.component';
import { UIEcommerceProductsModule } from '@ecommerce/products/ui-products';

@NgModule({
  imports: [
    CommonModule,
    // Imports the source module, with its exports (ui-ecommerce-products-list.html and ui-ecommerce-product-add.html)
    UIEcommerceProductsModule,
    ProductsFeatureShellRoutingModule,
    ProductDataAccessModule,
  ],
  // Enable using the these html tag in current module
  declarations: [ProductsComponent],

  //Enable using the these html tag in another module
  exports: [ProductsComponent, CommonModule],
})
export class ProductsFeatureShellModule {}
