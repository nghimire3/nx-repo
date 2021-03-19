import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './content/home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent,
    ContentComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent],

  imports: [BrowserModule,
    AppRoutingModule,
    RouterModule,
    
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
