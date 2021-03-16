import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiProductAddComponent } from './ui-product-add/ui-product-add.component';
import { UiEcommerceProductsListComponent } from './ui-products-list/ui-ecommerce-products-list.component';
import { UiActionBarComponent } from './ui-action-bar/ui-action-bar.component';
import { UiProductsDetailsComponent } from './ui-products-details/ui-products-details.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [UiProductAddComponent, UiEcommerceProductsListComponent, UiActionBarComponent, UiProductsDetailsComponent],
  exports: [UiProductAddComponent, UiEcommerceProductsListComponent, UiActionBarComponent, UiProductsDetailsComponent ]
})
export class UIProductsModule {}
