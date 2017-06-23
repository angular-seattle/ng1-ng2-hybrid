# UpgradeModule with Angular/AngularJS

Back in April we made a decision to convert our AngularJS application to a hybrid Angular/AngularJS application.  We had a feeling that we wanted to move towards the newer framework and due to the development of a new shared component the opportunity arose to do so.

Here I will use what I learned and outline the steps needed to convert a sample application from Angular to AngularJS including the steps in between.

## Base AngularJS application

[ng1-ng2-hybrid](https://github.com/jensbodal/ng1-ng2-hybrid/tree/angularjs-base) (linked to angular.js base tag) is a simple angular.js application with two views.  One makes a call to a local nodejs server which mocks a response from GitHub's api (using a mocked version to facilitate ease in testing and to avoid getting rate limited).  The other view is just some silliness with showing a directive which randomly assigns a color to each letter in a string and utilizes an attribute directive as well as two services.

The code tries to follow [John Papa's AngularJS style guide](https://github.com/johnpapa/angular-styleguide/tree/master/a1), and now that his Angular guide [is the official Angular Style guide](https://github.com/johnpapa/angular-styleguide/tree/master/a2#angular-team-endorsed), we will use similar best practices when we start writing that code.

### Build Frameworks

* `npm@4.2.0`
* `bower@1.8.0`
* `grunt@1.0.1`
* [`package.json`](https://github.com/jensbodal/ng1-ng2-hybrid/blob/angularjs-base/package.json) (build/backend deps)
* [`bower.json`](https://github.com/jensbodal/ng1-ng2-hybrid/blob/angularjs-base/bower.json) (front-end deps)

This is what some might consider a *legacy* javascript application, we are using bower for front-end dependencies, npm for back-end and build dependencies, and grunt to wire everything together. Over the course of this example angular-cli/webpack and yarn will be introduced to facilitate our new Angular application.

## Step 0: Starting Point

Not much to do here.  Checkout the repo at tag `step-0` to see the branch at this state ([or view here](https://github.com/jensbodal/ng1-ng2-hybrid/tree/step-0)).

To build and run the AngularJS app simply run `grunt`.  It's recommended to keep this grunt tasking running in a separate shell through the entirety of this guide as it will continue to serve the app and update as files are changed.


## Step 1: Adding Angular

*You can checkout the repo at tag [`step-1`](https://github.com/jensbodal/ng1-ng2-hybrid/tree/step-1) to see the end result of what is detailed here*

Ok so we want to introduce Angular, where do we start? First off it's good to read through the official [Upgrading from AngularJS](https://angular.io/guide/upgrade) guide to become familiar with the process and the terminology used.  Some things to consider before embarking on this endeavor for your own applications:

* You might come across undocumented bugs or other issues that may or may not be fixable without a new version of Angular
* You might experience performance issues on hybrid pages that use 3rd party libraries
* You will need to find a new library for reusable components or create your own if your preferred one is not yet stable/available
* Many of the versions for dependencies will likely change after this writeup, some might be incompatible with the upgrade process regardless of *only* being minor/patch version bumps

### Dependencies

The following should be installed either has global dependencies or dependencies for your environment.  I have these installed globally

* [yarn](https://yarnpkg.com/en/docs/install) (**no longer supported as an npm package**)
* `angular-cli@1.1.0` (`yarn global add @angular/cli@1.1.0`


### Getting the initial angular files

For our examples, this repo is installed at: `~/github/ng1-ng2-hybrid`

First we are going to generate a temporary Angular application using the anguliar cli. We are going to grab some files from this newly generated application to then place into our own and modify.

```
# from the repository root
ng new ngExample --skip-install
mv ngExample/.angular-cli.json .
mv ngExample/tsconfig.json .
mv ngExample/tslint.json .
mv ngExample/src src/client
mv src/client/src src/client/ngsrc
```

Next we need to install anything that's in the new Angular app's package.json file into ours.

I highly recommend going through and fixing the package versions of the installed dependencies (e.g. instead of `"^2.3.4"` you use `"2.3.4"` (this is not necessary when using `yarn add -E` and a fixed version).  While semantic versioning should work in practice, you are placing all of your trust in the maintainer of that library to not introduce minor or patch bumps which don't break your hybrid app. You can install something like `node-check-update` to periodically check for new versions of installed packages and then update them after confirming nothing breaks.  If you install the exact package versions as listed below, this example should work just fine.  It will likely also work if you upgrade some of the packages, but upgrade each one individually so you know if a specific one breaks your app.

Here's what the Angular package.json looks like:

```
"dependencies": {
    "@angular/animations": "^4.0.0",
    "@angular/common": "^4.0.0",
    "@angular/compiler": "^4.0.0",
    "@angular/core": "^4.0.0",
    "@angular/forms": "^4.0.0",
    "@angular/http": "^4.0.0",
    "@angular/platform-browser": "^4.0.0",
    "@angular/platform-browser-dynamic": "^4.0.0",
    "@angular/router": "^4.0.0",
    "core-js": "^2.4.1",
    "rxjs": "^5.1.0",
    "zone.js": "^0.8.4"
},
"devDependencies": {
    "@angular/cli": "1.1.0",
    "@angular/compiler-cli": "^4.0.0",
    "@angular/language-service": "^4.0.0",
    "@types/jasmine": "2.5.45",
    "@types/node": "~6.0.60",
    "codelyzer": "~3.0.1",
    "jasmine-core": "~2.6.2",
    "jasmine-spec-reporter": "~4.1.0",
    "karma": "~1.7.0",
    "karma-chrome-launcher": "~2.1.1",
    "karma-cli": "~1.0.1",
    "karma-jasmine": "~1.1.0",
    "karma-jasmine-html-reporter": "^0.2.2",
    "karma-coverage-istanbul-reporter": "^1.2.1",
    "protractor": "~5.1.2",
    "ts-node": "~3.0.4",
    "tslint": "~5.3.2",
    "typescript": "~2.3.3"
}

```

Below are the fixed installations for the above files as of this writing.  You'll likely have versions of the test packages already installed, I'd recommend holding off on getting testing working until you've successfully bootstrapped your hybrid application.

```
export angularversion=4.2.2

# dependencies
yarn add -E core-js@2.4.1
yarn add -E rxjs@5.4.1
yarn add -E zone.js@0.8.12

yarn add -E @angular/core@$angularversion
yarn add -E @angular/common@$angularversion
yarn add -E @angular/compiler@$angularversion
yarn add -E @angular/platform-browser@$angularversion
yarn add -E @angular/platform-browser-dynamic@$angularversion
yarn add -E @angular/forms@$angularVersion
yarn add -E @angular/http@$angularVersion
yarn add -E @angular/router@$angularVersion
yarn add -E @angular/upgrade@$angularversion
yarn add -E @angular/animations$angularVersion

# devDependencies
yarn add -ED typescript@2.3.4
yarn add -ED @angular/cli@1.1.2
yarn add -ED @angular/compiler-cli@$angularVersion
yarn add -ED @angular/language-service@$angularVersion
yarn add -ED @types/node@6.0.78
yarn add -ED codelyzer@3.0.1
yarn add -ED ts-node@3.0.6
yarn add -ED tslint@5.4.3


# packages that will likely conflict with existing apps
# test that upgrading these versions don't break what you already do
# recommended to hold off on these until your app is working with the UpgradeModule
yarn add -ED jasmine-core@2.6.3
yarn add -ED jasmine-spec-reporter@4.1.0
yarn add -ED karma@1.7.0
yarn add -ED karma-chrome-launcher@2.1.1
yarn add -ED karma-cli@1.0.1
yarn add -ED karma-coverage-istanbul-reporter@1.3.0
yarn add -ED karma-jasmine@1.1.0
yarn add -ED karma-jasmine-html-reporter@0.2.2
yarn add -ED protractor@5.1.2
yarn add -ED @types/jasmine@2.5.52
```

Now that our dependencies are installed, we need to update some of the files that we pulled in from our example application.

We'll need to edit `.angular-cli.json`, `tsconfig.json`, and `src/client/ngsrc/tsconfig.app.json`

I'll use vim:

`vim -p .angular-cli.json tsconfig.json src/client/ngsrc/tsconfig.app.json`

**.angular-cli.json**

```
# changes
"root": "src/client/ngsrc"
"outDir": "dist/ng",
"lint": [
    {
      "project": "src/client/ngsrc/tsconfig.app.json"
    },
    {
      "project": "src/client/ngsrc/tsconfig.spec.json"
    },
```

**tsconfig.json**

```
"baseUrl": "src/client/ngsrc",
```

**src/client/ngsrc/tsconfig.app.json**

**NOTE:** As of `@angular/cli@1.1.0` the new `paths` key needs to be added to `compilerOptions`.  Otherwise the only change is to update the relative path for `extends`.

```
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    ...
    "paths": {
      "@angular/*": [
        "../../../node_modules/@angular/*"
      ]
    }
  },
  ...
}
```

[You can see a summary of the above changes here](https://github.com/jensbodal/ng1-ng2-hybrid/commit/acaa2672571dd05eb725bc266bea472274271a3e)

You should now be able to run `ng build` and see that the example app builds with our new structure.  If following along with the repo, add a new static route in `src/client/server/app.js` for: `app.use(express.static('./dist/ng'));`, you can now load the example app at `127.0.0.1:6677/dist/ng`.  You won't need this route for our purposes so feel free to remove it after testing.

Grunt should already be running in a separate shell and serving the AngularJS app.  Open another shell, and leave `ng build --watch` running so that changes to the Angular files will be watched and the builds updated as they change.

[Comparison from step-0 to step-1](https://github.com/jensbodal/ng1-ng2-hybrid/compare/step-0...step-1)

## Step 2: Bootstrapping AngularJS from Angular

Now that all the files are in place to build the Angular application, we will need to make some modifications to our original code in order to bootstrap AngularJS from the Angular app.  We will not be using the `index.html` file inside of the `ngsrc` folder, instead we will just be using the generated bundles from `dist/ng`.

Open the `index.html` file in `dist/ng` and copy the script tags and place at the bottom of the `src/client/index.html` file then update the paths.  If using in your own app, then just make sure these are placed last and in the same order.  **Remember to update the paths to reflect dist/ng**.

**src/client/index.html**

```

...

<body ng-app="angularSeed" ng-strict-di>
    <div class="angular-seed-main" ui-view="angularSeedMain"></div>

...

<script type="text/javascript" src="dist/ng/inline.bundle.js"></script>
<script type="text/javascript" src="dist/ng/polyfills.bundle.js"></script>
<script type="text/javascript" src="dist/ng/styles.bundle.js"></script>
<script type="text/javascript" src="dist/ng/vendor.bundle.js"></script>
<script type="text/javascript" src="dist/ng/main.bundle.js"></script>
</body> <!-- place the script tags above the closing body tag -->
```

Next we need to change how AngularJS is bootstrapped. We'll remove the `ng-app` and `ng-strict-di` attributes from the body tag, and instead bootstrap AngularJS from our new Angular app.  We are leaving in place the initial `ui-view` tag as I am using `ui-router` and this tells the app where to start.


**src/client/index.html**

```

...

<body>
    <div class="angular-seed-main" ui-view="angularSeedMain"></div>

...
```

The final step is to now go into the `app.module.ts` file (`src/client/ngsrc/app/app.module.ts`) and remove `AppComponent` from the declarations and bootstrap arrays.  This is telling Angular that `AppComponent` is a member of this module, and that it can be the initial component view when loading Angular.  This will come into play again later when we add routing support, but for now remove it and instead tell the module that we are going to bootstrap AngularJS instead.

**app.module.ts**

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [
  ],
  bootstrap: [
  ]
})

export class AppModule {
  constructor(private upgrade: UpgradeModule) { }

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['angularSeed'], {strictDi: true})
  }
}
```

Assuming you have `grunt` and `ng build --watch` running (otherwise run `ng build`, and then `grunt`), you should be able to now see that your app is being bootstrapped from Angular.  Congratulations, you now have a hybrid Angular/AngularJS app!

[Comparison from step-1 to step-2](https://github.com/jensbodal/ng1-ng2-hybrid/compare/step-1...step-2)

## Step 3: Modifying the build process

[Comparison from step-2 to step-3](https://github.com/jensbodal/ng1-ng2-hybrid/compare/step-2...step-3)

## Step 4: Downgrading an Angular component


