# MEAN stack seed #

## This repository is my seed for MongoDB, Express, AangularJS, Node.js stack projects ##

***

###Project features:####

* Passportjs integration with user management on both front and back end.
* All-in-one package with the frontend, backend and database all under one directory
* Powerful gruntfile with a lot of built-in function.
* Karma testing out of the box.
* Test coverage reporting.
* Flexible dynamic building for production use.

###Grunt features:####

####Development: ####

* Linting of all javascript files on changes.
* Unit testing runs on changes.
* Front-end auto refresh on changes to the front-end code.
* Server restart on changes to the server code.
* Displaying all HTTP requests received by the server.
* Displaying all back-end errors in one place.

####Production: ####

* Dynamic build system that reads the index.html file directly.
  No need to change anything on the grunt side to add/remove/change files for the build process
* All project javascript files get combined and minified into one minified javascript file.
  All angular partials get compiled into javascript and added to the main javascript file.
* All vendor javascript files get combined into one minified javascript file.
* All css files get combined and minified into one minified css file.


####Grunt dynamic build: ####

Grunt builds the webapp by reading **src/index.html** and according to the following rules:

\<!-- build:css styles/style.css -->
*Place all css files here.*
\<!-- endbuild -->

\<!-- build:jsv scripts/vendor.min.js -->
*Place all vendor js files here.*
\<!-- endbuild -->

\<!-- build:js scripts/dist.min.js -->
*Place angular js files here.*
\<!-- endbuild -->

\<!-- build:clear -->
*Place these tags around anything you want to get rid of from index.html in the production version*
\<!-- endbuild -->

***

### Before you get started, make sure: ###

* Node.js is installed.   
To test, run `node -v`  

* npm is installed  
To test, run `npm -v`

* MongoDB is installed  
To test, run `mongod --version`

* MongoDB is not running as a service (it does by default)  
To stop it, run `sudo service mongod stop`

* grunt and karma are installed globally.
To test, make sure `grunt` and `karma` are recognized commands.
If they are not, install by running `npm install -g grunt-cli` and `npm install -g karma-cli`.

### To get started: ###

* in `\` run `npm install`  
If you get errors, try `sudo npm install`

* in `\src` run `bower install`

***

### To develop: ###

run `grunt`  
open [http://localhost:9000](http://localhost:9000)

### To run: ###

run `grunt build`.  
The files will 'compile' and the database and server will start. By default it will be available at [http://localhost:8081](http://localhost:8081).

***

### Other useful grunt tasks: ###

* `grunt server` will start the public server
* `grunt only-build` will 'compile' the files for the public server without starting the database or the server
* `grunt test` to run karma tests without the rest of the default dev tasks (starting server, database, etc.)