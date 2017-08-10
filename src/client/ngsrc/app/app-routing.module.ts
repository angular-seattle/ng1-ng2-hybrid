import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorHandlingModule } from './error-handling/error-handling.module';
import { PageNotFoundComponent } from './error-handling/page-not-found/page-not-found.component';
import { HelloWorldRoutingModule } from './hello-world/hello-world-routing.module';

// global route definitions go here, essentially what $urlRouterProvider.otherwise() does, or the base app component to load
export const routes: Routes = [
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  // this is the only place forRoot should be used, all other places will use forChildren
  imports: [
    ErrorHandlingModule,
    HelloWorldRoutingModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- for debugging purposes only
    )
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
