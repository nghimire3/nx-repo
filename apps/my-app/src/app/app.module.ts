import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './content/home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ProductsFeatureShellModule } from '@ecommerce/products/feature-shell';

@NgModule({
  declarations: [AppComponent, ContentComponent, FooterComponent, HomeComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule,ProductsFeatureShellModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
