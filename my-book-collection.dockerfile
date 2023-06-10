FROM postgres:14

LABEL author="Regan W. Cannell"
LABEL description="Postgres Image for my-book-collection"
LABEL version="1.0.0"

COPY *.sql /docker-entrypoint-initdb.d/