#!/bin/bash

echo "fecha"
date | cut -c1-7

echo "usuarios conectados"
who  | sort  | uniq

echo "tiempo de uso"
uptime  | tr 'a-z' 'A-Z'
