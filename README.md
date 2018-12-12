# Docker local environment for WP VIP GO

This repository provides a local docker-based environment for WP VIP Go. It includes WordPress, MySql and phpmyadmin.

## Installation

### Docker Set up

1. Clone or fork this repository
2. Create a `.env` file base on the `.env.template`
3. Add the local url, the same that `LOCAL_DEV_DOMAIN`, to your `/etc/hosts` file:

```
127.0.0.1 localhost example.local
```

4. Run `$ docker-compose up -d`

### Install WordPress

Navigate to http://example.local/ and manually install WordPress. After the installation is done, ~5min, a new folder `wp-container` will appear in the repository.

### Setup Repository

1. Go to `/wp-container/wp-content` and remove everything inside and clone your project repository

```
$ git clone [github-url] .
```

2. Install the vip mu-plugins

```
$ git clone git@github.com:Automattic/vip-go-mu-plugins.git --recursive wp-container/wp-content/mu-plugins/
```

3. Syncronize the DB
