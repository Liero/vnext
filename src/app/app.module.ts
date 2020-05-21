import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PricingComponent } from './pricing.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent, PricingComponent, MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
