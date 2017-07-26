import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloWorldModule } from './hello-world/hello-world.module';
import { HelloWorldComponent } from './hello-world/hello-world.component';

// global route definitions go here, essentially what $urlRouterProvider.otherwise() does, or the base app component to load
export const routes: Routes = [
  // empty
];

@NgModule({
  // this is the only place forRoot should be used, all other places will use forChildren
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- for debuggin purposes only
    )
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
