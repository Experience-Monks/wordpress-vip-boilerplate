#!/bin/bash

source .env

echo "Checking hosts file for $LOCAL_DEV_DOMAIN....."
if (grep -q $LOCAL_DEV_DOMAIN /etc/hosts); then
    echo "$LOCAL_DEV_DOMAIN already in hosts file"
else
    #asking for root password
    echo "Appending $LOCAL_DEV_DOMAIN to the hosts file....."
    sudo sh -c "echo \"127.0.0.1 $LOCAL_DEV_DOMAIN\" >> /etc/hosts"
fi

echo 'Removing wp-content directory.....'
rm -Rf wp-container/wp-content
echo 'Cloning repository.....'
git clone $PROJECT_REPOSITORY_SSH_URL wp-container/

if $IS_VIP_ENV
then
    git clone https://github.com/Automattic/vip-go-mu-plugins.git --recursive wp-container/wp-content/mu-plugins
fi
