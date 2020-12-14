#!/bin/bash

if [ $USER = root ] || [ -x ope.sh ]
then
    echo "Ou o usuário é o $USER ou tem permissão sobre o arquivo"                                
else 
    echo "O usuário não é o root e não tem permissão sobre o arquivo" 
fi