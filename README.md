# Introduction
A simple application for keeping track of my personal book collection.

# Database Setup
The database used in this application is a PostgreSQL database. Two ways of setting it up will be described below.

## 1. Using init-db.sh Script
Run the `init-db.sh` script that is in the root folder as follows:
```
bash init-db.sh
```
This script creates a docker container named `pg-my-book-collection` with a database named `books` and a schema named `my_books`. The database is empty and some manual steps are required. The creation of tables and the population thereof depends on the database tool being used and/or the user's familiarity with `psql`. The `init-db.sql` contains sql statements that can be used to create a table and populate it with some initial data. 

## 2. Using docker-compose
A `docker-compose.yaml` file exists in the root folder, and so does a `my-book-collection.dockerfile` file. If `docker-compose` is installed and the user is familiar with how it works, then simply running the following commands should initialise a docker container with a database and a `books` table that has some initial data that is specified in the `init-db.sql` file:

```
docker volume create postgres_books
docker-compose up -d
```
Using pgAdmin4, the table can be seen populated with some initial data:
![BOOKS table in PgAdmin4](public/img/pgadmin4-books-table.png?raw=true "BOOKS Table")

Please note that the `docker-compose.yaml` contains environment variables. It is recommended that the user creates a `.env` file in the root folder. Here is an example of how the `.env` file may look:
```
PG_CONTAINER_NAME='pg-my-book-collection'
POSTGRES_USER='postgres'
POSTGRES_PASSWORD='books'
POSTGRES_DB='books'
PGDATA='/var/lib/postgresql/data'
POSTGRES_HOST='localhost'
POSTGRES_PORT=5401
```


