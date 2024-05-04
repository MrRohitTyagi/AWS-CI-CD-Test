#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v18.19.1/bin

cd cicd-test/Docker-basics/
git pull origin master
pm2 kill
pm2 start index.js

# this is a bash  file and can automate a process  , it will run  the above commands in the sequnce
# but still we need to manually run this file on the remote machine.
# to run this file  ::  source deploy.sh (on remote's terminal)