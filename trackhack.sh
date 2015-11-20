#!/bin/sh
while [ true ]
do
sudo iwlist wlp3s0 scan | grep ESSID
sleep 20
done
