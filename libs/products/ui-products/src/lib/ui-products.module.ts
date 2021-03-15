import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiProductAddComponent } from './ui-product-add/ui-product-add.component';
import { UiEcommerceProductsListComponent } from './ui-products-list/ui-ecommerce-products-list.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [UiProductAddComponent, UiEcommerceProductsListComponent],
  exports: [UiProductAddComponent, UiEcommerceProductsListComponent]
})
export class UIProductsModule {}
