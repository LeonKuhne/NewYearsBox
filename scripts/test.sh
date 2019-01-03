#!/bin/bash
echo "Toggling..."
curl --data "" 192.168.1.3:7272/toggle
echo "" # add a new line

echo "Meditating..."
curl --data "" 192.168.1.3:7272/meditate
echo "" # add a new line

echo "Adding Music..."
curl --data "" 192.168.1.3:7272/music/30-min
echo "" # add a new line

echo "Drinking..."
curl --data "" 192.168.1.3:7272/drink
echo "" # add a new line

echo "Cheating..."
curl --data "" 192.168.1.3:7272/cheat
echo "" # add a new line

