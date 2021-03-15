import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiEcommerceProductAddComponent } from './ui-product-add/ui-ecommerce-product-add.component';
import { UiEcommerceProductsListComponent } from './ui-products-list/ui-ecommerce-products-list.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [UiEcommerceProductAddComponent, UiEcommerceProductsListComponent],
  exports: [UiEcommerceProductAddComponent, UiEcommerceProductsListComponent]
})
export class UIProductsModule {}
