#!/bin/bash
git pull
expo build:android
read  -n 1 -p "Press any key to end..." key
