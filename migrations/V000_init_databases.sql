CREATE DATABASE lolamarellagoodies;
CREATE DATABASE lolamarellagoodies_develop;
CREATE DATABASE lolamarellagoodies_test;

CREATE USER 'admin'@'localhost' IDENTIFIED BY 'admin';
GRANT ALL PRIVILEGES ON lolamarellagoodies.* TO 'admin'@'localhost';

CREATE USER 'developer'@'localhost' IDENTIFIED BY 'developer';
GRANT ALL PRIVILEGES ON lolamarellagoodies_develop.* TO 'developer'@'localhost';

CREATE USER 'automatedtest'@'localhost' IDENTIFIED BY 'automatedtest';
GRANT ALL PRIVILEGES ON lolamarellagoodies_test.* TO 'automatedtest'@'localhost';

FLUSH PRIVILEGES;