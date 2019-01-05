#!/bin/bash
git pull
rm -r ./node_modules
npm i
expo start
