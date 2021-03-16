import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './content/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: "home", component: HomeComponent},
  {
    path: 'products',
    loadChildren: () => import('@ecommerce/products/feature-shell').then(m => m.ProductsFeatureShellModule)
  },
  //1. Change here
  //2. Smart and dumb (Only input and output)
  //3. Four library -- Create folder products-container (responsible for products-container (ProductSmart, ProductDumb, ProductService, ProductModels)
  //4. FeatureShell,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
