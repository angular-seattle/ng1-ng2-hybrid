import { FactoryProvider, NgModule } from '@angular/core';

export function ng1RandomNumberFactory(injector: ng.auto.IInjectorService) {
  return injector.get('randomNumbers');
}

export const ng1RandomNumberFactoryProvider: FactoryProvider = {
  provide: 'ng1RandomNumbers',
  useFactory: ng1RandomNumberFactory,
  deps: ['$injector']
}

@NgModule({
  providers: [
    ng1RandomNumberFactoryProvider
  ]
})
export class Ng1UpgradedServicesModule { }
