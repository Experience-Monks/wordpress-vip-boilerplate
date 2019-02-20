# Docker local environment for WP VIP GO

This repository provides a local docker-based environment for WP VIP Go. It includes WordPress, MySql and phpmyadmin.

## Installation

### Docker Set up

1. Install Docker
   - Mac OS: https://docs.docker.com/docker-for-mac/install/
   - Centos or Amazon Linux:
     ```bash
     [user]$ sudo yum update -y
     [user]$ sudo yum install -y docker
     ```
2. Start docker service
   ```bash
   [user]$ sudo service docker start
   [user]$ sudo usermod -aG docker user
   ```
   - Logout from the system and login again to apply last change.
3. In order to verify docker installation:
   ```bash
   [user]$ docker info
   ```
4. Install Docker Compose
   - Mac OS: Docker already include Compose
   - Centos or Amazon Linux:
     ```bash
     [user]$ sudo curl -L "https://github.com/docker/compose/releases/download/1.22.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
     sudo chmod +x /usr/local/bin/docker-compose
     ```
5. In order to verify docker-compose installation:
   ```bash
   [user]$ docker-compose --version
   ```

### Docker Set up

1. Clone this repository
2. Create a `.env` file based on the `.env.template`
3. Run `$ docker-compose up -d`
4. Run `$ ./local_init.sh`

The script will clone your repository and replace it with wp-content folder
You can check out the logs of the installation using `$ docker-compose logs -f`

Once done, you should be able to access Wordpress at http://jam3site.local/wp-admin. You should see the default Wordpress setup screen.

### DB Administration

PHPMyAdmin is installed by default locally and can be accessed at http://jam3site.local:8889/. If however you want to access the db using another tool, like [Sequel Pro](https://www.sequelpro.com/), you can comment out the PHPMyAdmin service from `docker-compose.yml` and add:

```
    ports:
      - "3306:3306"
```

to the mysql service. This will expose MySQL service to your local machine.

### Setup Repository

1. Synchronize the DB

## Troubleshooting

### Issue with some containers

Check the status of the containers using `$ docker-compose ps`.

### Stopping containers

In the same folder where `docker-compose up -d` was executed do `docker-compose stop` the container will be stoped and the system is prepared to up new containers using same ports.
Using `docker ps` we can see the container running and using `docker stop CONTANINERID` we can stop conatiners individually

### Accessing containers

You can access the shell of a container using `$ docker-compose exec SERVICENAME /bin/bash`. So for example, `docker-compose exec db /bin/bash` will connect to the MySQL container, and then `root@8d9a9bc9e2ea:/# echo $MYSQL_ROOT_PASSWORD` will echo out your environment password.

### Remove all the containers

In case something went wrong and you want to start over, you can use `$ docker-compose down --volumes` to remove all.

If you want to remove them entirely from the system, you can also run `$ docker system prune -a` to remove all stray, not running, images, containers, volumes, and networks.

### Logging

Our `docker-compose` is running in background, if you want to check the logs use `$docker-compose logs wordpress`
