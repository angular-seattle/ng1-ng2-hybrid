# UpgradeModule with Angular/AngularJS

## [Guide](./guide/README.md)

This guide is to serve as an example for how to upgrade an AngularJS (versions 1.x) application to Angular (versions 2+).

It is written as verbosely as possible to (hoepfully) cover all aspects of what was done to get things working.  This might be helpful to
some, and for others you can just feel free to browse through the code to see what's going on.

While the following is explained in much more detail in the guide above, a few basic pieces about the code layout:

* Source code is split between [`src/client`](./src/client) and [`src/server`](./src/server). This was an AngularJS application so it was
    served with a nodejs server. There was some modification necessary to the node server's code to facilitate the new directories and
    routes when adding Angular. Keep this in mind for your own environments.
* AngularJS code is in [`src/client/app`](./src/client/app).
* Angular code is in [`src/client/ngsrc`](./src/client/ngsrc).
* Grunt is used to build the hybrid Angular/AngularJS application. With the additiona of the `angular-cli`, I added grunt tasks to wrap the
    `ng build` commands.
* A custom plugin is used to provide combined code coverage reports.
