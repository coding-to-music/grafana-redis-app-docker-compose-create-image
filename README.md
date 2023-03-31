# grafana-redis-app-docker-compose-create-image

# 🚀 Redis Application for @grafana provides Application pages and custom panels for Redis Data Source. Built as a combined docker image 🚀

https://github.com/coding-to-music/grafana-redis-app-docker-compose-create-image

From / By https://github.com/RedisGrafana/grafana-redis-app

## Environment variables:

```java

```

## user interfaces:

- Grafana http://localhost:3000

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/grafana-redis-app-docker-compose-create-image.git
git push -u origin main
```

# Redis Application plugin for Grafana

![Application](https://raw.githubusercontent.com/RedisGrafana/grafana-redis-app/master/src/img/redis-app.png)

[![Grafana 8](https://img.shields.io/badge/Grafana-8-orange)](https://www.grafana.com)
[![Redis Data Source](https://img.shields.io/badge/dynamic/json?color=blue&label=Redis%20Data%20Source&query=%24.version&url=https%3A%2F%2Fgrafana.com%2Fapi%2Fplugins%2Fredis-datasource)](https://grafana.com/grafana/plugins/redis-datasource)
[![Redis Application plugin](https://img.shields.io/badge/dynamic/json?color=blue&label=Redis%20Application%20plugin&query=%24.version&url=https%3A%2F%2Fgrafana.com%2Fapi%2Fplugins%2Fredis-app)](https://grafana.com/grafana/plugins/redis-app)
![CI](https://github.com/RedisGrafana/grafana-redis-app/workflows/CI/badge.svg)
![Docker](https://github.com/RedisGrafana/grafana-redis-app/workflows/Docker/badge.svg)
[![codecov](https://codecov.io/gh/RedisGrafana/grafana-redis-app/branch/master/graph/badge.svg?token=15SIRGU8SX)](https://codecov.io/gh/RedisGrafana/grafana-redis-app)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/RedisGrafana/grafana-redis-app.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/RedisGrafana/grafana-redis-app/context:javascript)

## Introduction

The Redis Application is a plugin for Grafana that provides application pages, custom panels, and dashboards for [Redis Data Source](https://grafana.com/grafana/plugins/redis-datasource).

### Custom Panels

- [Command-line interface (CLI)](https://redisgrafana.github.io/redis-app/panels/redis-cli-panel/)
- [Command Latency (graph and table)](https://redisgrafana.github.io/redis-app/panels/redis-latency-panel/)
- [Keys consuming a lot of memory](https://redisgrafana.github.io/redis-app/panels/redis-keys-panel/)
- [RedisGears Script Editor](https://redisgrafana.github.io/redis-app/panels/redis-gears-panel/)
- [CPU Usage](https://redisgrafana.github.io/redis-app/panels/redis-cpu-panel/)

### Dashboards

- [Redis CLI](https://redisgrafana.github.io/redis-app/dashboards/cli/)
- [Redis Overview](https://redisgrafana.github.io/redis-app/dashboards/overview/)
- [RedisGears](https://redisgrafana.github.io/redis-app/dashboards/redis-gears/)

All dashboards are available from the application's icon in the left side menu.

![Redis-CLI-Dashboards](https://raw.githubusercontent.com/RedisGrafana/grafana-redis-app/master/src/img/redis-cli-dashboard.png)

### Demo

Demo is available on [demo.volkovlabs.io](https://demo.volkovlabs.io):

- [Redis Overview dashboard](https://demo.volkovlabs.io/d/TgibHBv7z/redis-overview?orgId=1&refresh=1h)
- [Projects](https://demo.volkovlabs.io)

### Requirements

- **Grafana 8.0+** is required for Redis Application 2.X.
- **Grafana 7.1+** is required for Redis Application 1.X.

## Getting Started

Redis Application plugin can be installed from the Grafana Marketplace or use the `grafana-cli` tool to install from the command line:

```bash
grafana-cli plugins install redis-app
```

![Grafana-Marketplace](https://raw.githubusercontent.com/RedisGrafana/grafana-redis-app/master/src/img/grafana-marketplace.png)

For Docker instructions and installation without Internet access, follow the [Quickstart](https://redisgrafana.github.io/quickstart/) page.

### Open Grafana and enable Redis Application plugin

Open Grafana in your browser, enable Redis Application plugin, and configure Redis Data Sources.

![Enable](https://raw.githubusercontent.com/RedisGrafana/grafana-redis-app/master/src/img/enable.png)

## Documentation

Take a look at the [Documentation](https://redisgrafana.github.io/redis-app/overview/) to learn more about the Redis Application plugin, Redis Data Source, provided dashboards, and custom panels.

## Development

[Developing Redis Application plugin](https://redisgrafana.github.io/development/redis-app/) page provides instructions on building the application.

Are you interested in the latest features and updates? Start nightly built [Docker image for Redis Application plugin](https://redisgrafana.github.io/development/images/).

## Feedback

We love to hear from users, developers, and the whole community interested in this plugin. These are various ways to get in touch with us:

- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/RedisGrafana/grafana-redis-app/issues/new/choose).
- Star the repository to show your support.

## Contributing

- Fork the repository.
- Find an issue to work on and submit a pull request.
- Could not find an issue? Look for documentation, bugs, typos, and missing features.

## License

- Apache License Version 2.0, see [LICENSE](https://github.com/RedisGrafana/grafana-redis-app/blob/master/LICENSE).

## Grafana Plugins

https://github.com/grafana/grafana-json-datasource

## make my local system writable 

To set the ownership of the grafana-data directory on the host system, you can use the following command:

```
sudo chown -R $(id -u):$(id -g) ./grafana-data
```

To use the redis-cli tool to connect to Redis running on port 6380, you can use the following command:

```
redis-cli -p 6380
```

This command will start the redis-cli tool and connect to Redis on port 6380. You can then use the tool to interact with the Redis server.

If you want to connect to Redis running in a Docker container, you can use the following command:

```
docker exec -it redismod redis-cli -p 6380
```

This command will connect to the redismod container running Redis and start the redis-cli tool, connecting to Redis on port 6380. You can then use the tool to interact with Redis in the container.

## To build the Redis Application redis-app Plugin

https://redisgrafana.github.io/development/redis-app/

## Developing Redis Application plugin¶

Developing Application plugin involves setting up the development environment (which can be either Linux-based or macOS-based), building and running tests.

### Install Grafana¶

Grafana can be used in Docker or installed locally:
- Follow Installation instructions to install and start Grafana
- Open Grafana UI in web-browser http://X.X.X.X:3000

### Clone repository¶

```
git clone https://github.com/RedisGrafana/grafana-redis-app.git
```

### Build Application¶

Install the latest version of Node.js using Node Version Manager or download binaries

### Install yarn globally

```
npm install yarn -g
```

- Install dependencies

```
yarn install
```

- Build frontend components

```
yarn build
```

### Start Grafana¶

#### Docker Compose

Prerequisite
- Docker Compose should be pre-installed following documentation.

```
yarn start:dev
```

#### Docker-compose file for Development includes:

- Service `redis` using Redismod
- Service `grafana` using Grafana which allow loading unsigned plugins `redis-app` and `redis-datasource`

#### Redis Data Source

Redis Data Source should be cloned and built following Instructions.

https://redisgrafana.github.io/development/redis-datasource/

```
version: "3.4"

services:
  redis:
    container_name: redismod
    image: redislabs/redismod:latest
    ports:
      - 6379:6379/tcp
    # Uncomment and edit the local path in the following line to have
    # Redis' data persisted to the host's filesystem.
    # volumes:
    #   - ./dump.rdb:/data/dump.rdb

  grafana:
    container_name: grafana
    image: grafana/grafana:latest
    ports:
      - 3000:3000/tcp
    environment:
      - GF_AUTH_ANONYMOUS_ORG_ROLE=Admin
      - GF_AUTH_ANONYMOUS_ENABLED=true
      - GF_AUTH_BASIC_ENABLED=false
      - GF_ENABLE_GZIP=true
      - GF_USERS_DEFAULT_THEME=light
      - GF_PLUGINS_ALLOW_LOADING_UNSIGNED_PLUGINS=redis-app,redis-datasource
      # Uncomment to run in debug mode
      # - GF_LOG_LEVEL=debug
    volumes:
      # Redis Data Source should be cloned and built
      - ../../grafana-redis-datasource/dist:/var/lib/grafana/plugins/redis-datasource
      - ../dist:/var/lib/grafana/plugins/redis-app
      - ../provisioning/datasources:/etc/grafana/provisioning/datasources
      - ../provisioning/plugins:/etc/grafana/provisioning/plugins
      # Uncomment to preserve Grafana configuration
      # - ./data:/var/lib/grafana
```

#### Update local Grafana Configuration

Move distribution to Grafana's plugins/ folder

```
mv dist/ /var/lib/grafana/plugins/redis-app
```

Add redis-app to allowed unsigned plugins

```
vi /etc/grafana/grafana.ini
```

```
[plugins]
;enable_alpha = false
;app_tls_skip_verify_insecure = false
# Enter a comma-separated list of plugin identifiers to identify plugins that are allowed to be loaded even if they lack a valid signature.
allow_loading_unsigned_plugins = redis-datasource,redis-app
```

Restart and verify that plugin is registered

```
tail -100 /var/log/grafana/grafana.log
```

#### Configuration¶

The Overview page explains how to enable plugin and manage multiple Redis Data Sources.

## install go programming language

```
wget https://golang.org/dl/go1.17.6.linux-amd64.tar.gz

tar -xvf go1.17.6.linux-amd64.tar.gz

sudo mv go /usr/local
```

Set the environment variables required for Go to work correctly. Add the following lines to your ~/.bashrc file to set the Go environment variables:

```
export PATH=$PATH:/usr/local/go/bin
export GOPATH=$HOME/go
```

Developing Redis Data Source¶

https://redisgrafana.github.io/development/redis-datasource/

Developing Redis Data Source involves setting up the development environment (which can be either Linux-based or macOS-based), building and running tests.

## Install Grafana¶
Grafana can be started in Docker or installed locally:

Follow Installation instructions to install and start Grafana

Open Grafana UI in web-browser http://X.X.X.X:3000

## Clone repository¶
git clone https://github.com/RedisGrafana/grafana-redis-datasource.git

## Build¶

### Frontend¶

Install the latest version of Node.js using Node Version Manager or download binaries

- Install yarn globally

```
npm install yarn -g
```

Install dependencies
```
yarn install
```

Build frontend components

```
yarn build
```

## Backend¶

- Install Golang for your platform

```
yum install go
```

- Install Grafana plugin SDK for Go dependency

```
go get -u github.com/grafana/grafana-plugin-sdk-go
```

- Install Mage (make-like build tool using Go)

```
git clone https://github.com/magefile/mage
cd mage
go run bootstrap.go
```

- Build backend binaries for Linux, Windows and MacOS for supported platforms

```
yarn build:backend
```

## Start Grafana¶

Docker Compose
Prerequisite

Docker Compose should be pre-installed following documentation.

```
yarn start:dev
```

Update local Grafana Configuration

Move distribution to Grafana's plugins/ folder

```
mv dist/ /var/lib/grafana/plugins/redis-datasource
```

Add redis-datasource to allowed unsigned plugins

```
vi /etc/grafana/grafana.ini
```

```
[plugins]
;enable_alpha = false
;app_tls_skip_verify_insecure = false
# Enter a comma-separated list of plugin identifiers to identify plugins that are allowed to be loaded even if they lack a valid signature.
allow_loading_unsigned_plugins = redis-datasource
```

Restart Grafana and verify that plugin registered

```
tail -100 /var/log/grafana/grafana.log
```

```
t=2020-07-01T06:03:38+0000 lvl=info msg="Starting plugin search" logger=plugins
t=2020-07-01T06:03:38+0000 lvl=warn msg="Running an unsigned backend plugin" logger=plugins pluginID=redis-datasource pluginDir=/var/lib/grafana/plugins/redis-datasource
t=2020-07-01T06:03:38+0000 lvl=info msg="Registering plugin" logger=plugins name=redis-datasource
t=2020-07-01T06:03:38+0000 lvl=info msg="HTTP Server Listen" logger=http.server address=[::]:3000 protocol=http subUrl= socket=
```

## Configuration¶

The Redis Data Source Configuration page explains how to connect data source to Redis database.

```
npm install --save-dev babel-jest
```
