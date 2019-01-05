#!/bin/bash
git pull
rm -r ./node_modules/expo
npm i
expo start
