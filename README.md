![angular-seed-icon](src/img/angular-seed.png?raw=true)

This is my Angular project seed that I use as base for my new projects.
It only contains the basic structure and files.

# Prerequisites

[Node.js](https://nodejs.org) and npm installed.

# How to start

```
$ git clone https://www.github.com/adrian-bueno/angular-seed.git <new-project-name>
```

Or download as a zip file.

## Development

```
$ npm install
$ npm start
```

Your default browser will open. App will be reloaded everytime you modify and safe a file in __/src__ directory.

## Production

```
$ npm install
$ bash build-prod.sh
```

Use a server like [NGINX](https://www.nginx.com) to serve files inside __/dist__ directory.

[More info about deploying Angular 2 apps](https://angular.io/docs/ts/latest/guide/deployment.html)

### How to use [NGINX](https://www.nginx.com)

[Install](https://www.nginx.com/resources/wiki/start/topics/tutorials/install/)

Ubuntu:

```
$ sudo apt-get install nginx
```

Open configuration file:

```
$ sudo gedit /etc/nginx/sites-available/default
```

Comment or delete default configuration and copy and paste this:

```
server {
    server_name <your-IP>;

    listen 80 default_server;
    listen [::]:80 default_server ipv6only=on;
    listen 443 ssl;

    ssl_certificate /etc/nginx/ssl/nginx.crt;
    ssl_certificate_key /etc/nginx/ssl/nginx.key;

    root <global-path-to-project>/dist;

    location / {
        try_files $uri /index.html;
    }
}
```

SSL certificates are only necessary if you want to connect to the server over HTTPS.
SSL certificates can be generated with the next command:

```
$ sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/ssl/nginx.key -out /etc/nginx/ssl/nginx.crt
```

Note that this certificates are not signed and will be marked as unsafe by browsers.

Finally
```
$ sudo service nginx restart
```

# Project structure

```
.
├── src
│   ├── app
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app.routing.ts
│   │   ├── home
│   │   │   ├── home.component.css
│   │   │   ├── home.component.html
│   │   │   ├── home.component.ts
│   │   │   └── index.ts
│   │   └── shared
│   │       ├── index.ts
│   │       └── services
│   │           ├── global.service.ts
│   │           └── index.ts
│   ├── css
│   │   └── loading.css
│   ├── img
│   │   ├── angular-seed-267x107.png
│   │   ├── angular-seed-758x300.png
│   │   ├── angular-seed.png
│   │   └── icons
│   │       ├── icon16.png
│   │       ├── icon24.png
│   │       ├── icon32.png
│   │       ├── icon48.png
│   │       ├── icon64.png
│   │       ├── icon128.png
│   │       ├── icon192.png
│   │       ├── icon256.png
│   │       └──  icon512.png
│   ├── favicon.ico
│   ├── index-aot.html
│   ├── index.html
│   ├── main-aot.ts
│   ├── main.ts
│   ├── manifest.json
│   └── systemjs.config.js
├── build-prod.sh
├── clean-src.sh
├── LICENSE.md
├── lite-server.config.json
├── package.json
├── README.md
├── rollup.config.js
├── tsconfig-aot.json
└── tsconfig.json
```

# Icon

[Original icon]( http://www.flaticon.com/free-icon/sprout_355401) made by [Freepik](http://www.freepik.com/) from [www.flaticon.com](http://www.flaticon.com)

Edited by me.

# License
[MIT](LICENSE.md)
