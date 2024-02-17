#!/usr/bin/env bash

echo "Start postgres docker container"
docker run --rm --name pg-my-book-collection -e POSTGRES_PASSWORD=books -d -p 5401:5432 -v postgres_books:/var/lib/postgresql/data postgres:14
echo "Database starting..."
sleep 10
echo "Create books Database"
docker exec -it pg-my-book-collection bash -c 'PGPASSWORD=books psql -U postgres -c "create database books"'
echo "Create my_books Schema"
docker exec -it pg-my-book-collection bash -c 'PGPASSWORD=books psql -U postgres -d books -c "create schema my_books"'