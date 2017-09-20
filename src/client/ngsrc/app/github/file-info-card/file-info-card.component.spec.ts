import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, SimpleChange } from '@angular/core';
import { fakeAsync, tick } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

import { PipesModule } from './../../pipes/pipes.module';
import { FileInfoCardComponent } from './file-info-card.component';
import { GithubFileInfo } from './github-file-info';

describe('FileInfoCardComponent', () => {
  let component: FileInfoCardComponent;
  let fixture: ComponentFixture<FileInfoCardComponent>;
  let debugElement: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CommonModule, PipesModule ],
      declarations: [ FileInfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileInfoCardComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    element = debugElement.nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create an render the fileInfo object', () => {
    const sha: string = '1234';
    const filename: string = 'myfilename';
    const status: string = 'cool status';
    const additions: number = 3;
    const deletions: number = 4;
    const changes: number = 7;
    const blob_url: string = 'www.example.com/blob';
    const raw_url: string = 'www.rawurl.com';
    const contents: string = 'some contents';
    const patch: string = 'i am a patch';

    const fileInfo: GithubFileInfo = new GithubFileInfo({
      sha, filename, status, additions, deletions, changes, blob_url, raw_url, contents, patch
    })

    component.ngOnChanges({fileInfo: new SimpleChange(false, fileInfo, true)});
    fixture.detectChanges();

    const keyElements: DebugElement[] = debugElement.queryAll(By.css('.key-value'));
    const patchElement: DebugElement = debugElement.query(By.css('pre'));

    expect(keyElements[0].parent.nativeElement.innerText).toEqual('sha: 1234');
    expect(keyElements[1].parent.nativeElement.innerText).toEqual('filename: myfilename');
    expect(keyElements[2].parent.nativeElement.innerText).toEqual('status: cool status');
    expect(keyElements[3].parent.nativeElement.innerText).toEqual('additions: 3');
    expect(keyElements[4].parent.nativeElement.innerText).toEqual('deletions: 4');
    expect(keyElements[5].parent.nativeElement.innerText).toEqual('changes: 7');
    expect(keyElements[6].parent.nativeElement.innerText).toEqual('blob_url: www.example.com/blob');
    expect(keyElements[7].parent.nativeElement.innerText).toEqual('raw_url: www.rawurl.com');
    expect(keyElements[8].parent.nativeElement.innerText).toEqual('contents: some contents');
    expect(patchElement.nativeElement.innerText).toEqual('i am a patch');
  });
});
