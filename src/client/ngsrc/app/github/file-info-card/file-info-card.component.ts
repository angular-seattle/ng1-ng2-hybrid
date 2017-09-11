import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { GithubFileInfo } from './github-file-info';

@Component({
  selector: 'aseed-file-info-card',
  templateUrl: './file-info-card.component.html',
  styleUrls: ['./file-info-card.component.scss']
})

export class FileInfoCardComponent implements OnChanges {
  @Input() fileInfo: GithubFileInfo;

  public patchInfo: string;

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.fileInfo && changes.fileInfo.currentValue) {
      const fileInfo = new GithubFileInfo(changes.fileInfo.currentValue);

      if (fileInfo.patch) {
        this.patchInfo = fileInfo.patch;
      }
    }
  }

}
