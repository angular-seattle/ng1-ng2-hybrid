## Step 5: Adding an Angular Route

[Comparison from step-4 to step-5](/../../../compare/step-4...step-5)

The most effective way of upgrading your application is to actually replace entire routes with pure Angular code. Depending on what
services, directives, and components your route is dependent on, this could be a fairly large undertaking. Here I will simply show you how
to add the scaffolding necessary to use the Angular Router along side AngularJS's ui-router, and how to tell each one when to take over the
routing. We will also set up a simple example route to show that our new Angular routes are working.

*If you're using the AngularJS angular router and* `ng-view`*, I've read the steps are quite similar, however you might want to look
[here](http://blog.lssinc.com/2017/05/23/from-angularjs-to-angular-upgrading-made-simple-with-upgrademodule-and-webpack/) or
[here](https://vsavkin.com/migrating-angular-1-applications-to-angular-2-in-5-simple-steps-40621800a25b) to see examples of that.*

**What we'll do**

* Change the way we bootsrap `ui-router` and AngularJS by using our `AppComponent` instead of bootstrapping in `index.html`
* Create a new `app-routing.module.ts` module, `AppRoutingModule`, and define our base `router-outlet` and default route definitions
* Add `AppRoutingModule` to our `AppModule`
* Implement and use a `UrlHandlingStrategy` to say when Angular will handle routes
* Add `router-outlet` to our root `AppComponent`
* Make `ui-router` aware of our Angular routes and tell it to ignore them by using an empty template
* Add our example Angular route and component!

### Changing the way we bootstrap, using the AppComponent

This step is relatively simple. Instead of bootstrapping AngularJS purely from the AppModule, we declare our Angular AppComopnent as a `bootstrap` component and then call that from our index.html, similar to how it would be done in a pure AngularJS/Angular application.  AngularJS is now bootstrapped as part of the process of including the AppComponent.

```
<!-- because we are loading our header here now, we need the ng-cloak attribute to wait for css -->
<body ng-cloak>
    <angular-seed-header></angular-seed-header>

    <aseed-root></aseed-root>

    <div class="angular-seed-main" ui-view="angularSeedMain"></div>
```

Some logic has been refactored on where the header is included in our site, this could just as easily be a ui-view which could be configured elsewhere to hide/show the header as needed. Our main angular app component's template contains only the line:

```
<router-outlet></router-outlet>
```

This starts up the process of handling routes within Angular.  We also need to make some changes to the AppModule file to tell Angular how we'll be handling the routes and also specifying that we are using the `HashLocationStrategy`. Using the hash location strategy simplifies dividing the routes between angular and angularjs.

So what happens now is that AngularJS's ui-router is the primary router, we need to define paths in both the ui-router and an Angular's router if we want Angular to handle them. To accomlish this we'll introduce a new `angularSeed.angularRoutes` module which contains `AngularRoutesConfig` to handle the Angular routes.  Without this ui-router's `$urlRouterProvider.otherwise('/');` definition in `layout.config.js` would take precedence and redirect us to the homepage.

**angularRoutes.config.js**

```
  function AngularRoutesConfig($stateProvider) {
    $stateProvider
      .state('helloWorld', {
        url: '/hello-world',
        // use empty template because ui-router needs something to show
        // Angular component will take over though
        template: ''
      })
      .state('undefinedAngularRoute', {
        url: '/undefined-angular-route',
        template: ''
      });
```

We define the routes in AngularJS with an empty template so that it can recognize the route and then display an empty template.  In Angular we then match these routes with our `UrlHandlingStrategy` implementation.

**app.module.ts**

```

export class AngularUrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url: UrlTree): boolean {
    switch (url.toString()) {
      case '/hello-world':
      case '/undefined-angular-route':
        return true;
      default:
        return false;
    }
  }

  extract(url: UrlTree): UrlTree {
    return url;
  }

  merge(url: UrlTree, whole: UrlTree): UrlTree {
    return url;
  }
}

...

  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: UrlHandlingStrategy, useClass: AngularUrlHandlingStrategy }
  ],
```

This simply tells Angular that it should be handling these routes, but it doesn't tell it how to define the routes.  For that we introduce the `app-routing.module`.

**app-routing.module**

```
export const routes: Routes = [
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    ErrorHandlingModule,
    HelloWorldRoutingModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- for debugging purposes only
    )
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
```

The `**` path is similar to the `$urlRouterProvider.otherwise` functionality of ui-router, it will match any unmatched routes.  For this reason the wildcard route should always go **after** the definition of all   other routes, otherwise it will always match as soon as it's seen. Other routes could be defined above this route, or if you'd like to decompose the logic a bit more, you can include those other routing modules above the definition of the `forRoot` definition in the AppRoutingModule's imports (as above).

These are the basics for deciding how to handle the routes in your hybrid application.  You can take a look at the implementation of the other routing modules and component templates to see how they work.


## [Addendum 1: Angular zone.js $digest issues](./addendum-1.md)
