import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesModule } from '../pipes/pipes.module';
import { FileInfoCardComponent } from './fileInfoCard/fileInfoCard.component';

@NgModule({
    imports: [
        CommonModule,
        PipesModule
    ],
    declarations: [
        FileInfoCardComponent
    ],
    exports: [
        FileInfoCardComponent
    ]
})

export class GithubModule { }
