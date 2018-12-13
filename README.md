# Docker local environment for WP VIP GO

This repository provides a local docker-based environment for WP VIP Go. It includes WordPress, MySql and phpmyadmin.

## Installation

### Docker Set up

1. Clone or fork this repository

```
$ git clone https://github.com/Jam3/docker-wordpress-vip-go.git [project-name]
```

2. Create a `.env` file based on the `.env.template`
3. Add the local url, the same that `LOCAL_DEV_DOMAIN`, to your `/etc/hosts` file:

```
127.0.0.1 localhost example.local
```

4. Run `$ docker-compose up -d`

You can check out the logs of the installation using `$ docker-compose logs -f`

### Install WordPress

Navigate to http://example.local/ and manually install WordPress. After the installation is done, ~1min, a new folder `wp-container` will appear in the repository.

### Setup Repository

1. Go to `/wp-container` and remove the folder `wp-content` and clone your project repository

Note: If you repository doesn't include the default theme `twentynineteen` you will need to keep it in the folder `wp-content`

```
$ cd /wp-container
$ rm -rf wp-content
$ git clone [github-url] wp-content
```

2. Install the vip mu-plugins

```
$ cd /wp-content
$ git clone https://github.com/Automattic/vip-go-mu-plugins.git --recursive mu-plugins/
```

3. Syncronize the DB

## Troubleshooting

### Issue with some containers
Check the status of the containers using `$ docker-compose ps`.

### Remove all the containers
In case something went wrong and you want to start over, you can use `$ docker-compose down --volumes` to remove all.

### Logging
Our `docker-compose` is running in background, if you want to check the logs use `$docker-compose logs wordpress`
