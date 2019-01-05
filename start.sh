#!/bin/bash
git pull
expo build:android > log.txt
# grep the file for the url after 'Successfully built standalone app: '
# push url to leonkuhne.com/apk
read  -n 1 -p "Press any key to end..." key
