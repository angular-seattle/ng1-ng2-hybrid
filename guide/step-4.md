## Step 4: Downgrading an Angular component

[Comparison from step-3 to step-4](/../../../compare/step-3...step-4)

Whew.  Our app is now running Angular/AngularJS side-by-side and it's integrated into our build process, so let's write some Angular code!


For our first Angular component I will rewrite the `src/client/app/github/github.fileInfoCard.component.js` in Angular, downgrade it, then simply use it in AngularJS.

***Note:*** *You might notice that the [`github.fileInfoCard.component`](/../../../blob/step-3/src/client/app/github/github.fileInfoCard.component.js#L16) is incorrectly dependent on the `githubApi` service. Step-4 removes this unused dependency.*

For the first component that's downgraded there is a bit of scaffolding that needs to be done, subsequent downgraded components will be significantly easier to downgrade.

### Changes

There are a lot of changes here, it's best to view the [comparison from step-3 to step-4](/../../../compare/step-3...step-4) to see all of the changes, however they will be summarized below, with some steps expanded on.

* **.angular-cli.json** updated to use Sass to conform with what is setup on the AngularJS side, also updated our app prefix to `aseed`
* **package.json** `@types/angular` added (explained in the downgrade section)
* **app.module.js** AngularJS app module updated to include our Angular downgrade module (explained in downgrade section)
* **github.component.html** our `aseed-file-info-card` component we are creating is now placed in an Angular Material `md-card` as we have not implemented `@angular/material2` or another replacement
* **github.fileInfoCard.component.html** removed as no longer needed
* **github.fileInfoCard.component.js** removed as no longer needed
* **index.html** removed `github.fileInfoCard.component.js` since we are no longer using it
* **app.module.ts** updated to include our downgraded component (explained in downgrade section)
* **downgrades.ts** new file to specify which of our Angular components and services will be downgraded
* **fileInfoCard.component.\*** newly rewritten component (explained in rewrite section)
* **githubFileInfo.ts** new class for specifying the layout of our githubFileInfo which is used in the display
* **github.module.ts** declares our rewritten component, imports pipes used and the CommonModule (which includes `*ngFor` among other things)
* **object.pipe.ts** `*ngFor` doesn't allow iterating through objects like `ng-repeat` does, so we create our own pipe to recreate this functionality
* **pipes.module.ts** pipes need to be declared and exported from a module in order to be used
* **tsconfig.app.json** updated to include our `angular` types (see `@types/angular` section)
* **src/client/scss/style.scss** removed `githubFileInfoCard` styles used in AngularJS
* **tslint.json** updated our directive and component selector to `aseed` to be enforced in linting

### @types/angular

We are going to use the `angular` object in various places (namely `downgrades.ts` here) when working with the `UpgradeModule`. In order to make our linting and build process happy, we need to add the `@angular/types` module and include the type in our `tsconfig.app.json`.

```
yarn add -ED @types/angular
```

**tsconfig.app.json**

```
  "compilerOptions": {
    "types": ["angular"],
```



### Rewriting the githubFileInfo Component

Our AngularJS application relies on `@angular/material` for display components, so to make things easy for this step we are simply going to wrap the new fileInfo component in an `md-card` component rather than have it do that itself (as it was done [previously](/../../../blob/step-3/src/client/app/github/github.fileInfoCard.component.html)).

**Note:** *While I'll include the process of rewriting the component in this section, the recommended steps for your first downgraded component are to just create a basic working component, downgrade it, then show that it works.  [Here you can see the commit where I did this](/../../../commit/bdbecdfd5d56a45a0e4992c3d5805d06ae2b92fa).*


Ideally you are already using components in AngularJS, components became available in [version 1.5](https://github.com/angular/angular.js/blob/master/CHANGELOG.md#features-11). Much of the syntax and style is quite similar to components in Angular, below is an annotated version of the rewritten component.

```
/**
 * Component: required for the @Component annotation
 * Input: required for binding attributes in the template to the class
 * OnChanges: similar to AngularJS component's $onChanges lifecycle hook
 */
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

/**
 * GithubFileInfo: a new class to handle the details of what this object represents
 */
import { GithubFileInfo } from './githubFileInfo';

@Component({
  /* these are fairly straightforward */
  selector: 'aseed-file-info-card',
  templateUrl: './fileInfoCard.component.html',
  styleUrls: ['./fileInfoCard.component.scss']
})

/* we need to explicitly implement OnChanges and/or OnInit if we want to use them */
export class FileInfoCardComponent implements OnChanges {

  /**
     What we had in angularJS:

     bindings: {
        fileInfo: '<'
      },

     becomes:
   */
  @Input() fileInfo: GithubFileInfo;

  /* modifier 'public' means it will be available for use in the template */
  public patchInfo: string;

  /* executed when the class is instantiated */
  constructor() {}

  /**
   * not used: ngOnInit -- called after component is initialized and after constructor
   * https://angular.io/api/core/OnInit
   */

  /* Called before ngOnInit() and whenever one or more data-bound input properties change */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.fileInfo && changes.fileInfo.currentValue) {
      // instead of having the logic for handling the fileInfo, we create a GithubFileInfo
      // class and have it take care of what it is supposed to do
      const fileInfo = new GithubFileInfo(changes.fileInfo.currentValue);

       // formatPatch method from AngularJS component also moved to GithubFileInfo class
      if (fileInfo.patch) {
        this.patchInfo = fileInfo.patch;
      }
    }
  }
}
```

**githubFileInfo.ts**

```
export class GithubFileInfo {
  public sha: string;
  public filename: string;
  public status: string;
  public additions: number;
  public deletions: number;
  public changes: number;
  public blob_url: string;
  public raw_url: string;
  public contents: string;
  public patch: string;

  constructor(obj: any) {
    this.sha = obj.sha;
    this.filename = obj.filename;
    this.status = obj.status;
    this.additions = obj.additions;
    this.deletions = obj.deletions;
    this.changes = obj.changes;
    this.blob_url = obj.blob_url;
    this.raw_url = obj.raw_url;
    this.contents = obj.contents;

    if (obj.patch) {
      this.patch = this.formatPatch(obj.patch);
    }
  }

  public toString(): string {
    return this.filename;
  }

  private formatPatch(patch: string) {
    return patch.replace(/\/n\+/g, '\n');
  }
}
```

Instead of specifying the type of binding in the component like we did with AngularJS:


| syntax | type of binding |
|---|---|
|`<`|one-way binding|
|`=`|two-way binding|
|`@`|string/value/interpolated binding|
|`&`|expression binding|

Angular uses `@Input()` and `@Output()` for bindings and 'events', or better put, for inputs and outputs to the component.

When using the component, you specify the *type* of binding with how the attribute is declared. See the below table for reference:

| syntax | type of binding |
|---|---|
|`[attribute]`|one-way binding |
|`(attribute)`|event/output binding |
|`[(attribute)]`|banana-in-a-box/two-way binding |

For the purposes of this demonstration we will only be using one-way binding with `@Input()` and `[attribute]`.  Also note that "*most AngularJS two-way bindings actually only need a one-way binding in practice,* `<my-component [myValue]="anExpression">` *is often enough*" ([Angular upgrade guide](https://angular.io/api/upgrade/static/UpgradeComponent)).


#### The Component's Template

The template for the rewritten component are nearly identical. The biggest difference is the use of `*ngFor` which replaces `ng-repeat`. AngularJS's `ng-repeat` had quite a few built in filters and features which are not available with `*ngFor`.  One of the biggest differences is that you can not iterate through an object's keys and values like you could with `ng-repeat`, for that purpose I have written a `pipe` called `object` which returns `item` as an array of objects with 'key' and 'value' properties.


**Before**

```
<md-card>
    <div ng-repeat="(key, value) in vm.fileInfo">
        <span class="key-value">{{ key }}:</span> {{ value }}
    </div>
    <pre>{{vm.patchInfo}}</pre>
</md-card>
```

**After**

```
<div>
  <div *ngFor="let item of fileInfo | object:'patch'">
    <span class="key-value">{{ item.key }}:</span> {{ item.value }}
  </div>

  <pre>{{patchInfo}}</pre>
</div>
```

**Pipes???** I thought pipes were evil??? Angular now has the notion of [**pure** and **impure** pipes](https://angular.io/guide/pipes#pure-and-impure-pipes). The discussion and implementation of the pipe used here is outside the scope of this writeup, but I'll sum up the differences with what is listed in the linked Angular guide:

* pure pipe execute only when it detects a pure change to the input value
* a pure change is either a change to a primitive input value (`String`, `Number`, `Boolean`, `Symbol`) or a changed object reference (`Date`, `Array`, `Function`, `Object`)
* impure pipes are executed during every component change detection cycle
* an impure pipe is called often, as often as every keystroke or mouse-move

The same way you *can* do two-way bindings with component attributes, you can create impure pipes similar to AngularJS, but unless done correctly and for the right purpose, performance will suffer.

Also note that there are many pipes available by default like there were with AngularJS, [see here for some examples](https://angular.io/guide/pipes#appendix-no-filterpipe-or-orderbypipe).

Lastly note that in order to use a pipe in your component, the pipe needs to be part of a module, and that module needs to be in the context of the module that your component is declared in. Here I've added the `ObjectPipe` to the `PipesModule` and imported `PipesModule` into the `GithubModule`.  If I wanted the `ObjectPipe` to be available app-wide, I could import it into the main `AppModule`.

**object.pipe.ts**

```
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'object'
})

export class ObjectPipe implements PipeTransform {
  transform(value: any, exclude: string | string[]): any {
    if (!value) {
      return value;
    }

    const keys = [];

    for (const key of Object.keys(value)) {
      if (exclude.indexOf(key) !== -1) {
        continue;
      }

      keys.push({key: key, value: value[key]});
    }

    return keys;
  }
}
```

**pipes.module.ts**

```
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
```

**CSS**

At the beginning of this step we switched over to using sass, something that could have been done when we initially added Angular but I didn't do because I forgot :)

The sass file, like the template file, is [nearly identical](/../../../compare/step-3...step-4#diff-b66c9f29ac5f593f170f95bfdd04fc65). We simply swap out the `github-file-info-card` selector for the [`:host`](https://angular.io/guide/component-styles#host) selector. The `:host` selector is the only way to target the host (component) element.

#### Github Module

The last step is to include the component into a module so that it can be used. Here I'll create the main GithubModule which will house the other components if/when they are rewritten.

```
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
```

### Downgrade Module

In the `ngsrc/app` folder create a file called `downgrades.ts`. This file will serve as the soul source of all of our downgraded components and services which will be used in AngularJS. Multiple downgraded directives and services can simply be chained together and all of them will be included and accessible from AngularJS in the `ng.downgrades` module.

#### [downgrades.ts](/../../../compare/step-3...step-4#diff-9b8bacd63e0cf6ee57e7f115fd8a5387)

```
import { downgradeComponent, downgradeInjectable } from '@angular/upgrade/static';

// our components
import { FileInfoCardComponent } from './github/fileInfoCard/fileInfoCard.component';

// our services
/* empty */

declare var angular: angular.IAngularStatic;

// this is the module that will need to be included in our AngularJS application
angular.module('ng.downgrades', [])
  .directive(
    'aseedFileInfoCard',
    downgradeComponent({
      component: FileInfoCardComponent,
      inputs: [
        'fileInfo'
      ],
    }) as angular.IDirectiveFactory
  )
;
```


#### [app.module.ts](/../../../compare/step-3...step-4#diff-dbb539c917ba74ef6c5bed31a684680d)

In our app module we now need to include `downgrades.ts` which specifies an AngularJS module `ng.downgrades`.  We then include this module in the bootstrap portion of the app module.

```
ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['angularSeed', 'ng.downgrades'], {strictDi: true})
}
```


Final `app.module.ts`

```
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

```

## [Step 5: Adding an Angular Route](./step-5.md)
