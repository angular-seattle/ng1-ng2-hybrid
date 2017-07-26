import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare var angular: angular.IAngularStatic;

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then((platformRef) => {
    const upgrade: UpgradeModule = platformRef.injector.get(UpgradeModule) as UpgradeModule;

    upgrade.bootstrap(document.body, ['angularSeed', 'ng.downgrades'], {strictDi: true})
  })
  .catch(err => {
    console.log(err);
    console.log('Error during bootstrap process!');
  })
  ;
