# WebServiceMatching

You can also:
  - Import and save files from GitHub

### Tech

The project uses a series of open source projects to work correctly:

* [node.js] - evented I/O for the backend
* [Hapi] - build powerful, scalable applications, with minimal overhead and full out-of-the-box functionality
* [Gulp] - the streaming build system
* [sequelize] - sequelize is a promise-based Node.js ORM
* [Mysql] - a small, fast, self-contained, high-reliability, full-featured, SQL database engine
* [Workbench] - a small, fast, self-contained, high-reliability, full-featured, SQL database engine


### Installation

WebServiceMatching requires [Node.js](https://nodejs.org/) v12+ to run.

X-API-KEY = abcde12345

Install the dependencies and devDependencies and start the server.

```sh
$ cd webserviceMatching
$ npm install
$ node run start
```

For production environments...
Create a .env file in the root of your project and insert your key/value pairs in the following format of KEY=VALUE:

>NODE_ENV=prod

For development environments...
Create a .env file in the root of your project and insert your key/value pairs in the following format of KEY=VALUE:

>NODE_ENV=dev 

For test environments...
Create a .env file in the root of your project and insert your key/value pairs in the following format of KEY=VALUE:

>NODE_ENV=test

Rest API documentation http://127.0.0.1:3000/docs

### Development

Want to contribute? Great!

WebServiceMatching uses Gulp for fast developing.
Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run these commands.

First Tab:
```sh
$ npm run start
```

Second Tab:
```sh
$ npm run test
```

#### Building for source
For production release:
```sh
$ npm run build
```

License
----

MIT


**Free Software!**

[//]: #

   [wof]: <https://github.com/wiltonof>
   [node.js]: <http://nodejs.org>
   [hapi]: <https://hapi.dev/api/>
   [Gulp]: <http://gulpjs.com>
   [sequelize]: <https://sequelize.org/>
   [Mysql]: <https://dev.mysql.com/downloads/mysql/>
   [Workbench]: <https://dev.mysql.com/downloads/workbench/>
