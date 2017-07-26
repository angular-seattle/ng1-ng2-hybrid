import { NgModule } from '@angular/core';

import { HelloWorldRoutingModule } from './hello-world-routing.module';
import { HelloWorldComponent } from './hello-world.component';

@NgModule({
  imports: [ HelloWorldRoutingModule ],
  declarations: [ HelloWorldComponent ]
})

export class HelloWorldModule { };
