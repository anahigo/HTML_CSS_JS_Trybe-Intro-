#!/bin/bash

if [ $USER = ana ] && [ -x ope.sh ]
then
    echo "O usuário é a $USER e tem permissão sobre o arquivo"                                
else 
    echo "Ou o usuário não é a ana ou não tem permissão sobre o arquivo" 
fi