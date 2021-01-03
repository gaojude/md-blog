#!/bin/bash
cd ./client || return
npm run build
rm -rf ../server/public
mv ./build ../server/public
cd ../server || return
sudo npm start
