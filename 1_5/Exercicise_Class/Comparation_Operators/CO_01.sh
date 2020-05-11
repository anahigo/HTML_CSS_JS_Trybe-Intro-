#!/bin/bash

if [ $USER = root ] && [ -x ope.sh ]
then
    echo "O usuário é o $USER e tem permissão sobre o arquivo"                                
else 
    echo "Ou o usuário não é o root ou não tem permissão sobre o arquivo" 
fi