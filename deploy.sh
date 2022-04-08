#!/bin/bash
pwd
pm2 start "ng serve --host 0.0.0.0 --port 4200" --name "Angular App" #This will start angular app
cd API
pm2 start --name "Nodejs API" npm -- start  
pm2 logs Nodejs API

pm2 startup systemd
