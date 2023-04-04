#!/bin/bash

echo -n "introduce tu año de nacimiento: "; read dos
echo -n "introduce el año actual "; read uno

edad=$(($uno - $dos))

if [ $edad -ge 18 ]; then 
    echo "eres mayor de edad"
    echo "tienes $edad años"
else 
    echo "eres menor de edad"
    echo "tienes $edad años"
fi

