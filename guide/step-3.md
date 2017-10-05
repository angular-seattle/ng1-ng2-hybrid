## Step 3: Modifying the build process

[Comparison from step-2 to step-3](/../../../compare/step-2...step-3)

It will probably be most helpful to just check out the comparison between steps 2 and 3 to see the changes that were added to support
building the Angular application along side AngularJS using grunt. The primary changes being made and how the process works:

* Angular and AngularJS apps are built separately
* `grunt-injector` is used to wire up the bundled Angular files into the `index.html` file
* `dev` and `prod` builds output to separate folders to ease in the wiring up process
* all used `ng build` commands are wrapped into npm script commands within `package.json`
* the `ng build --watch` wrapped command is added to our default concurrent tasks


## [Step 4: Downgrading an Angular component](./step-4.md)
