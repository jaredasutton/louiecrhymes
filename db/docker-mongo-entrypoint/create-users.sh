#!/usr/bin/env bash
echo "Creating mongo users..."
mongo "mongodb://$MONGO_INITDB_ROOT_USERNAME:$MONGO_INITDB_ROOT_PASSWORD@db:27017/admin" --eval "db.getSiblingDB('louiec1').createUser({user: '$MONGO_PRIMARY_UN', pwd: '$MONGO_PRIMARY_PW', roles: [{role: 'readWrite', db: 'louiec1'}]});"
echo "Mongo users created."
