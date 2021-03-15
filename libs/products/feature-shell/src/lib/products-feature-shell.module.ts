import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsFeatureShellRoutingModule } from './products-feature-shell-routing.module';
import { ProductDataAccessModule } from '@ecommerce/products/data-access';
import { ProductsContainerComponent } from './products/products-container.component';
import { UIProductsModule } from '@ecommerce/products/ui-products';

@NgModule({
  imports: [
    CommonModule,
    // Imports the source module, with its exports (ui-ecommerce-ui-products-list.html and ui-ecommerce-ui-product-add.html)
    UIProductsModule,
    ProductsFeatureShellRoutingModule,
    ProductDataAccessModule,
  ],
  // Enable using the these html tag in current module
  declarations: [ProductsContainerComponent],

  //Enable using the these html tag in another module
  exports: [ProductsContainerComponent, CommonModule],
})
export class ProductsFeatureShellModule {}
