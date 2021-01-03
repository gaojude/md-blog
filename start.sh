#!/bin/bash
cd ./client || return
npm run build
rm -rf ../server/public
cp ./build ../server/public
cd ../server || return
sudo npm start
