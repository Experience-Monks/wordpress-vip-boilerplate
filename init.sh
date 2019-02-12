#installing wp
wp core install --url=$LOCAL_DEV_DOMAIN --title="$WP_SITE_TITLE" --admin_name=$WP_ADMIN_USER --admin_password=$MYSQL_ROOT_PASSWORD --admin_email=$WP_ADMIN_EMAIL
if $(wp core is-installed); then
    echo "wp installed"
    #returning 0 value marks success
    return 0
fi

#returning non 0 value marks an error, so the container will start again as it has "restart: on-failure"
return 1