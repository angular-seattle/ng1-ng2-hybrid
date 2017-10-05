## Step 0: Starting Point

Back in April we made a decision to convert our AngularJS application to a hybrid Angular/AngularJS application.  We had a feeling that we wanted to move towards the newer framework and due to the development of a new shared component the opportunity arose to do so.

Here I will use what I learned and outline the steps needed to convert a sample application from Angular to AngularJS including the steps in between.

## Base AngularJS application

[ng1-ng2-hybrid](/../../../tree/angularjs-base) (linked to angular.js base tag) is a simple angular.js application with two views.  One makes a call to a local nodejs server which mocks a response from GitHub's api (using a mocked version to facilitate ease in testing and to avoid getting rate limited).  The other view is just some silliness with showing a directive which randomly assigns a color to each letter in a string and utilizes an attribute directive as well as two services.

The code tries to follow [John Papa's AngularJS style guide](https://github.com/johnpapa/angular-styleguide/tree/master/a1), and now that his Angular guide [is the official Angular Style guide](https://github.com/johnpapa/angular-styleguide/tree/master/a2#angular-team-endorsed), we will use similar best practices when we start writing that code.

### Build Frameworks

* `npm@4.2.0`
* `bower@1.8.0`
* `grunt@1.0.1`
* [`package.json`](/../../../blob/angularjs-base/package.json) (build/backend deps)
* [`bower.json`](/../../../blob/angularjs-base/bower.json) (front-end deps)

This is what some might consider a *legacy* javascript application, we are using bower for front-end dependencies, npm for back-end and build dependencies, and grunt to wire everything together. Over the course of this example angular-cli/webpack and yarn will be introduced to facilitate our new Angular application.

## What to do in this Step

Not much to do here :)  Checkout the repo at tag `step-0` to see the branch at this state ([or view here](/../../../tree/step-0)).

To build and run the AngularJS app simply run `grunt`.  It's recommended to keep this grunt tasking running in a separate shell through the entirety of this guide as it will continue to serve the app and update as files are changed.


## [Step 1: Adding Angular](./step-1.md)
