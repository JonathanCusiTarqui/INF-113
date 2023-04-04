#!/bin/bash

# Se verifica que el usuario pertenece al grupo indicado
if groups $1 | grep -q "\b$2\b"; then
  echo "El usuario $1 pertenece al grupo $2"
else
  echo "El usuario $1 no pertenece al grupo $2"
fi
