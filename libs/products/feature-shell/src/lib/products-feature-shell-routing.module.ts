import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsContainerComponent } from './products/products-container.component';

const routes: Routes = [
  {path: '', component: ProductsContainerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsFeatureShellRoutingModule { }
