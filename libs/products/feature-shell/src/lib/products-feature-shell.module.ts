import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsFeatureShellRoutingModule } from './products-feature-shell-routing.module';
import { ProductDataAccessModule } from '@ecommerce/products/data-access';
import { ProductsContainerComponent } from './products-container/products-container.component';
import { UIProductsModule } from '@ecommerce/products/ui-products';
import { ProductDetailsContainerComponent } from './products-container/product-details-container/product-details-container.component';
import { ProductListContainerComponent } from './products-container/product-list-container/product-list-container.component';

@NgModule({
  imports: [
    CommonModule,
    // Imports the source module, with its exports (ui-ecommerce-ui-products-container-list.html and ui-ecommerce-ui-product-add.html)
    UIProductsModule,
    ProductsFeatureShellRoutingModule,
    ProductDataAccessModule,
  ],
  // Enable using the these html tag in current module
  declarations: [ProductsContainerComponent, ProductDetailsContainerComponent, ProductListContainerComponent],

  //Enable using the these html tag in another module
  exports: [ProductsContainerComponent, CommonModule],
})
export class ProductsFeatureShellModule {}
