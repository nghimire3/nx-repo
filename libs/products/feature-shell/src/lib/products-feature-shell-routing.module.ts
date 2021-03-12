import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from '@ecommerce/products/feature-shell';

const routes: Routes = [
  {path: '', component: ProductsComponent},
  // {path: ':id', component: ProductDetailsComponent},
  // {path: 'add', component: ProductAddComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsFeatureShellRoutingModule { }
