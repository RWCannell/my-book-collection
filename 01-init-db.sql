-- CREATE TYPE
DROP TYPE IF EXISTS reading_status;
CREATE TYPE reading_status AS ENUM (
    'DONE',
    'IN_PROGRESS',
    'NOT_STARTED',
    'PAUSED'
);

-- CREATE TABLE
DROP TABLE IF EXISTS books;
CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL,
    author VARCHAR NOT NULL,
    originally_published SMALLINT,
    reading_status reading_status,
);