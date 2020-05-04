/// <reference path ="../node_modules/@types/jquery/index.d.ts"/>
/// <reference path ="../node_modules/@types/aos/index.d.ts"/>

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare const AOS: Aos.Aos;

AOS.init({
  duration: 800
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));





setTimeout(() => {
  const header$ = $('#header');
  function setHeader() {
    header$.toggleClass('scrolled', window.scrollY > 0);
  }
  setHeader();
  $(window).on('scroll', setHeader);

}, 10);
