#!/bin/bash
git pull
expo build:android &> log.txt
prefix="Successfully built standalone app:.*"
fullUrl=$(cat log.txt | grep -o "Successfully built standalone app: .*")
url=$(echo "${fullUrl}" | sed -e 's/^[ \t]*Successfully built standalone app: //')
echo "function openUrl(){window.open('$url', '_blank')}" | ssh root@104.207.135.80 "cat > /var/www/html/apk/script.js"
sudo ssh -t pi@192.168.1.3 "cd ~/Desktop/NewYearsBox && python start.py ; bash"
read -n 1 -p "Press any key to end..." key
