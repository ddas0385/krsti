#!/bin/bash

#Usage:
#sudo ./apache_virtualhost.sh krsti.org 127.0.0.1 80 /home/dj/Research/kri/krsti

echo $2' '$1 >> /etc/hosts

a2enmod vhost_alias

echo '
<VirtualHost *:'$3'>
  ServerAdmin webmaster'@$1'
  ServerName '$1'
  ServerAlias www.'$1'

  DocumentRoot '$4'

  <Directory '$4'>
  	Options Indexes FollowSymLinks
  	AllowOverride All
  	Require all granted
  </Directory>

  ErrorLog ${APACHE_LOG_DIR}/error.log
  CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>' >> /etc/apache2/sites-available/$1'.conf'

a2ensite $1

/etc/init.d/apache2 restart

