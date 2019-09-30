#!/bin/bash

echo "initializing..."
#installing wp
if $(wp core is-installed);
then
    echo "wp already installed"
    
    if $WP_IS_MULTISITE
    then
        if $WP_IS_MULTISITE_SUBDOMAIN
        then
            echo "converting to wp multisite using subdomains..."
            #wp core multisite-install --url=$LOCAL_DEV_DOMAIN --subdomains --title="$WP_SITE_TITLE" --admin_name=$WP_ADMIN_USER --admin_password=$WP_ADMIN_PASSWORD --admin_email=$WP_ADMIN_EMAIL --skip-email
            wp core multisite-convert --title="$WP_SITE_TITLE" --subdomains
        else
            echo "converting to wp multisite using directories..."
            #wp core multisite-install --url=$LOCAL_DEV_DOMAIN --title="$WP_SITE_TITLE" --admin_name=$WP_ADMIN_USER --admin_password=$WP_ADMIN_PASSWORD --admin_email=$WP_ADMIN_EMAIL --skip-email
            wp core multisite-convert --title="$WP_SITE_TITLE" --subdomains
        fi

        if [ -n "$WP_PROJECT_THEME_FOLDER" ];
        then
            echo "wp theme enable $WP_PROJECT_THEME_FOLDER --network"
            wp theme enable $WP_PROJECT_THEME_FOLDER --network
        fi
    fi

    #returning 0 value marks success
    exit 0
else
    echo "installing wp..."
    wp core install --url=$LOCAL_DEV_DOMAIN --title="$WP_SITE_TITLE" --admin_name=$WP_ADMIN_USER --admin_password=$WP_ADMIN_PASSWORD --admin_email=$WP_ADMIN_EMAIL

    if [ -n "$WP_PROJECT_THEME_FOLDER" ];
    then
        echo "mkdir wp-content/themes/$WP_PROJECT_THEME_FOLDER"
        mkdir wp-content/themes/$WP_PROJECT_THEME_FOLDER
        echo "touch wp-content/themes/$WP_PROJECT_THEME_FOLDER/style.css"
        touch wp-content/themes/$WP_PROJECT_THEME_FOLDER/style.css
        echo "touch wp-content/themes/$WP_PROJECT_THEME_FOLDER/index.php"
        touch wp-content/themes/$WP_PROJECT_THEME_FOLDER/index.php

        echo "wp theme activate $WP_PROJECT_THEME_FOLDER"
        wp theme activate $WP_PROJECT_THEME_FOLDER
    fi
fi

#returning non 0 value marks an error, so the container will start again as it has "restart: on-failure"
exit 1
