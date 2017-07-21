import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppComponent } from './app.component';

// components/services that are being downgraded need to be added to our main app module's entryComponents/providers
// their respective modules added to our imports
import { GithubModule } from './github/github.module';
import { FileInfoCardComponent } from './github/fileInfoCard/fileInfoCard.component';

// import all of our downgraded components and services
import './downgrades';

@NgModule({
  imports: [
    BrowserModule,
    GithubModule,
    UpgradeModule
  ],
  declarations: [
    AppComponent
  ],
  entryComponents: [
    FileInfoCardComponent
  ],
  providers: [
    { provide: 'githubApi', useExisting: 'githubApiProvider' }
  ],
  bootstrap: [
  ]
})

export class AppModule {
  constructor(private upgrade: UpgradeModule) { }

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['angularSeed', 'ng.downgrades'], {strictDi: true})
  }
}
