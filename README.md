# Docker local environment for WP VIP GO

This repository provides a local docker-based environment for WP VIP Go. It includes WordPress, MySql and phpmyadmin.

## Installation

### Docker Set up
1. Install Docker
    * Mac OS: https://docs.docker.com/docker-for-mac/install/
    * Centos or Amazon Linux:
        ```bash
        [user]$ sudo yum update -y
        [user]$ sudo yum install -y docker
        [user]$ sudo service docker start
        [user]$ sudo usermod -aG docker user
        ```
        * Logout from the system and login again to apply last change.

2. In order to verify docker installation:
    ```bash
    [user]$ docker info
    ```
3. Install Docker Compose
    * Mac OS: Docker already include Compose
    * Centos or Amazon Linux:
        ```bash
        [user]$ sudo curl -L "https://github.com/docker/compose/releases/download/1.22.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
        sudo chmod +x /usr/local/bin/docker-compose
        ```
4. In order to verify docker-compose installation:
    ```bash
    [user]$ docker-compose --version
    ```

### Docker Set up

1. Clone this repository
2. Create a `.env` file based on the `.env.template`
3. Move to the folder where this repository was cloned `$ cd docker-wordpress-vip-go`
3. Run `$ docker-compose up -d`
4. Run `$ ./local_init.sh`

The script will clone your repository and replace it with wp-content folder
You can check out the logs of the installation using `$ docker-compose logs -f`

### Setup Repository

1. Syncronize the DB

## Troubleshooting

### Issue with some containers
Check the status of the containers using `$ docker-compose ps`.

### Stopping containers
In the same folder where `docker-compose up -d` was executed do `docker-compose stop` the container will be stooped and the system is prepared to up new containers using same ports.
Using `docker ps` we can see the container running and using `docker stop CONTANINERID` we can stop conatiners individually

### Remove all the containers
In case something went wrong and you want to start over, you can use `$ docker-compose down --volumes` to remove all.

### Logging
Our `docker-compose` is running in background, if you want to check the logs use `$docker-compose logs wordpress`
