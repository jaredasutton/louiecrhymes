#!/usr/bin/env bash
echo "Creating mongo users..."
mongo $MONGO_INITDB_DATABASE --eval "db.createUser({user: '$MONGO_PRIMARY_UN', pwd: '$MONGO_PRIMARY_PW', roles: [{role: 'readWrite', db: 'louiec1'}]});"
echo "Mongo users created."
