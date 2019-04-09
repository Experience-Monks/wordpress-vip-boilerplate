#!/bin/bash

echo "initializing..."
#installing wp
if $(wp core is-installed); then
    echo "wp installed"
    if [ -n "$WP_PROJECT_THEME_FOLDER" ];
    then
        echo "mkdir wp-content/themes/$WP_PROJECT_THEME_FOLDER"
        mkdir wp-content/themes/$WP_PROJECT_THEME_FOLDER
        echo "wp theme enable $WP_PROJECT_THEME_FOLDER --network"
        wp theme enable $WP_PROJECT_THEME_FOLDER --network
    fi
    #returning 0 value marks success
    exit 0
else
    if $WP_IS_MULTISITE
    then
        if $WP_IS_MULTISITE_SUBDOMAIN
        then
            echo "installing wp multisite using subdomains..."
            wp core multisite-install --url=$LOCAL_DEV_DOMAIN --subdomains --title="$WP_SITE_TITLE" --admin_name=$WP_ADMIN_USER --admin_password=$MYSQL_ROOT_PASSWORD --admin_email=$WP_ADMIN_EMAIL --skip-email
        else
            echo "installing wp multisite using directories..."
            wp core multisite-install --url=$LOCAL_DEV_DOMAIN --title="$WP_SITE_TITLE" --admin_name=$WP_ADMIN_USER --admin_password=$MYSQL_ROOT_PASSWORD --admin_email=$WP_ADMIN_EMAIL --skip-email
        fi
    else
        echo "installing wp..."
        wp core install --url=$LOCAL_DEV_DOMAIN --title="$WP_SITE_TITLE" --admin_name=$WP_ADMIN_USER --admin_password=$MYSQL_ROOT_PASSWORD --admin_email=$WP_ADMIN_EMAIL
    fi
fi

#returning non 0 value marks an error, so the container will start again as it has "restart: on-failure"
exit 1
