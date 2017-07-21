import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { GithubFileInfo } from './githubFileInfo';

@Component({
  selector: 'aseed-file-info-card',
  templateUrl: './fileInfoCard.component.html',
  styleUrls: ['./fileInfoCard.component.scss']
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
