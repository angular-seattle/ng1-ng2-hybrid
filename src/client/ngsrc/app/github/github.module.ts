import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileInfoCardComponent } from './fileInfoCard/fileInfoCard.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FileInfoCardComponent
    ],
    exports: [
        FileInfoCardComponent
    ]
})

export class GithubModule { }
