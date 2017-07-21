import { NgModule } from '@angular/core';

import { ObjectPipe } from './object.pipe';

@NgModule({
  declarations: [
    ObjectPipe
  ],
  exports: [
    ObjectPipe
  ]
})

export class PipesModule { }
