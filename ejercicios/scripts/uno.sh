#!/bin/bash

echo -n "introduce un numero: "; read num
mod=$(($num % 2))
if [ $mod -eq "0" ]; then
    echo "es par"
else
    echo "es impar"
fi
