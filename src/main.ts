import { ButtonComponent } from './app/button/button.component';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app/app.component';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { bootstrapApplication, createApplication } from '@angular/platform-browser';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
bootstrapApplication(AppComponent)
  .catch(err => console.error(err));


(async() => {
  const application = await createApplication();

  const btnEle = createCustomElement(ButtonComponent, {
    injector: application.injector
  });

  customElements.define('my-btn', btnEle);
})();