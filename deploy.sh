#!/bin/bash
pwd
pm2 start "ng serve --host 0.0.0.0 --port 4200" --name "Angular App" --watch #This will start angular app
cd API
pm2 start --name "Nodejs API" npm -- start --watch
# pm2 logs Nodejs API


