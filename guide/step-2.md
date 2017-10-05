## Step 2: Bootstrapping AngularJS from Angular

[Comparison from step-1 to step-2](/../../../compare/step-1...step-2)

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


## [Step 3: Modifying the build process](./step-3.md)
