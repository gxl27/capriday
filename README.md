# capriday
clone the repository
composer install
create the database 'capriday' and create the user ns1root with the password (can change the .env file with your username and password)
mysql -u ns1root -p capriday < capriday.sql
composer dump-env prod
if there is any error, probably you need to change the "public" folder and the "var" folder security access. For linux use the command "chmod 777 -R public/*"
