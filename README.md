![angular-seed-icon](src/img/angular-seed.png?raw=true)

This seed only contains the basic structure and files for browser web apps.

# Prerequisites

[Node.js](https://nodejs.org) and npm installed.

__Optional__: [nginx](https://www.nginx.com), [Docker](https://www.docker.com/)

# Start

Clone or download as a zip file.

```
$ git clone https://www.github.com/adrian-bueno/angular-seed.git <new-project-name>
```

Install dependencies:

```
$ npm install
```

# Development

```
$ npm start
```

Your default browser will open. App will be reloaded everytime you modify and safe a file in __/src__ directory.

# Production

```
$ bash build-prod.sh
```

Use a server like [nginx](https://www.nginx.com) to serve files inside __/dist__ directory.

[More info about deploying Angular apps](https://angular.io/docs/ts/latest/guide/deployment.html)

## How to use nginx

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
    server_name _;

    listen 80 default_server;
    listen [::]:80 default_server ipv6only=on;
    # listen 443 ssl;

    # ssl_certificate /etc/nginx/ssl/nginx.crt;
    # ssl_certificate_key /etc/nginx/ssl/nginx.key;

    # access_log off;
    # error_log off;

    root <global-path-to-project>/dist;

    location / {
        try_files $uri /index.html;
    }
}
```
_(Change &lt;global-path-to-project&gt;)_

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

## Docker

Build image:

```
$ bash build-prod.sh
$ docker build -t <image-name> .
```

Execute:

```
$ docker run -it -p 3000:80 -p 3001:443 <image-name>
```

Check [Dockerfile](Dockerfile) to see how to change SSL certificates.

Current image size: __16.6 MB__

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
│   │   └── styles.css
│   ├── img
│   │   ├── angular-seed.png
│   │   └── icons
│   │       ├── icon32.png
│   │       ├── icon48.png
│   │       ├── icon64.png
│   │       ├── icon128.png
│   │       ├── icon192.png
│   │       ├── icon256.png
│   │       └── icon512.png
│   ├── favicon.ico
│   ├── index-aot.html
│   ├── index.html
│   ├── main-aot.ts
│   ├── main.ts
│   ├── manifest.json
│   └── systemjs.config.js
├── .gitignore
├── build-prod.sh
├── clean-src.sh
├── Dockerfile
├── LICENSE.md
├── lite-server.config.json
├── nginx.conf
├── package-lock.json
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
