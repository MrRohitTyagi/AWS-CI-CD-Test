#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v18.19.1/bin

cd cicd-test/Docker-basics/
git pull origin master
pm2 kill
pm2 start index.js