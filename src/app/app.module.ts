import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PricingComponent } from './pricing.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent, PricingComponent, MenuComponent, HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
