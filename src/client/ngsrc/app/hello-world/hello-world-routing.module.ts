import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloWorldModule } from './hello-world.module';
import { HelloWorldComponent } from './hello-world.component';

// global route definitions go here, essentially what $urlRouterProvider.otherwise() does, or the base app component to load
export const routes: Routes = [
  { path: 'hello-world', component: HelloWorldComponent }
];

@NgModule({
  // notice here we use forChild
  imports: [
    HelloWorldModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class HelloWorldRoutingModule { }
