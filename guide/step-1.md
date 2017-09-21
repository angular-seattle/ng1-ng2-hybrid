## Step 1: Adding Angular

[Comparison from step-0 to step-1](/../../../compare/step-0...step-1)

*You can checkout the repo at tag [`step-1`](/../../../tree/step-1) to see the end result of what is detailed here*

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
angularversion=4.2.2

# dependencies
yarn add -E core-js@2.4.1 \
rxjs@5.4.1 \
zone.js@0.8.12 \
@angular/core@$angularversion \
@angular/common@$angularversion \
@angular/compiler@$angularversion \
@angular/platform-browser@$angularversion \
@angular/platform-browser-dynamic@$angularversion \
@angular/forms@$angularversion \
@angular/http@$angularversion \
@angular/router@$angularversion \
@angular/upgrade@$angularversion \
@angular/animations@$angularversion

# devDependencies
yarn add -ED typescript@2.3.4 \
@angular/cli@1.1.2 \
@angular/compiler-cli@$angularversion \
@angular/language-service@$angularversion \
@types/angular@1.6.30 \
@types/node@6.0.78 \
codelyzer@3.0.1 \
ts-node@3.0.6 \
tslint@5.4.3


# packages that will likely conflict with existing apps
# test that upgrading these versions don't break what you already do
# recommended to hold off on these until your app is working with the UpgradeModule
yarn add -ED jasmine-core@2.6.3 \
jasmine-spec-reporter@4.1.0 \
karma@1.7.0 \
karma-chrome-launcher@2.1.1 \
karma-cli@1.0.1 \
karma-coverage-istanbul-reporter@1.3.0 \
karma-jasmine@1.1.0 \
karma-jasmine-html-reporter@0.2.2 \
protractor@5.1.2 \
@types/angular@1.6.20 \
@types/jasmine@2.5.52
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

**NOTE:** As of `@angular/cli@1.1.0` the new `paths` key needs to be added to `compilerOptions`.  Otherwise the only changes are
to update the relative path for `extends` and add `angular` to the types array.

```
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    ...
    "types": ["angular"],
    "paths": {
      "@angular/*": [
        "../../../node_modules/@angular/*"
      ]
    }
  },
  ...
}
```

[You can see a summary of the above changes here](/../../../commit/acaa2672571dd05eb725bc266bea472274271a3e)

(***Note*** `@types/angular` *is not included in this commit because I moved that step here after the fact, it's mentioned later in the guide
 where it's added*)

You should now be able to run `ng build` and see that the example app builds with our new structure.  If following along with the repo, add a new static route in `src/client/server/app.js` for: `app.use(express.static('./dist/ng'));`, you can now load the example app at `127.0.0.1:6677/dist/ng`.  You won't need this route for our purposes so feel free to remove it after testing.

Grunt should already be running in a separate shell and serving the AngularJS app.  Open another shell, and leave `ng build --watch` running so that changes to the Angular files will be watched and the builds updated as they change.



