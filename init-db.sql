-- CREATE READING_STATUS TYPE
DROP TYPE IF EXISTS READING_STATUS;
CREATE TYPE READING_STATUS AS ENUM (
    'DONE',
    'IN_PROGRESS',
    'NOT_STARTED',
    'PAUSED'
);

-- CREATE BOOKS TABLE
DROP TABLE IF EXISTS BOOKS;
CREATE TABLE BOOKS (
    ID SERIAL PRIMARY KEY,
    TITLE VARCHAR NOT NULL,
    AUTHOR VARCHAR NOT NULL,
    ORIGINALLY_PUBLISHED SMALLINT,
    READING_STATUS READING_STATUS
);

-- INITIALISE BOOKS TABLE WITH DATA
INSERT INTO BOOKS(ID, TITLE, AUTHOR, ORIGINALLY_PUBLISHED, READING_STATUS)
VALUES
    (1, 'Harry Potter and the Philosopher''s Stone', 'J.K Rowling', 1997, 'DONE'),
    (2, 'Harry Potter and the Chamber of Secrets', 'J.K Rowling', 1998, 'DONE'),
    (3, 'Harry Potter and the Prisoner of Azkaban', 'J.K Rowling', 1999, 'DONE'),
    (4, 'Harry Potter and the Goblet of Fire', 'J.K Rowling', 2000, 'DONE'),
    (5, 'Harry Potter and the Order of the Phoenix', 'J.K Rowling', 2003, 'DONE'),
    (6, 'Harry Potter and the Half Blood Prince', 'J.K Rowling', 2005, 'DONE'),
    (7, 'Harry Potter and the Deathly Hallows', 'J.K Rowling', 2007, 'DONE'),
    (8, 'A Game of Thrones', 'George R. R. Martin', 1996, 'DONE'),
    (9, 'A Clash of Kings', 'George R. R. Martin', 1998, 'DONE'),
    (10, 'A Storm of Swords', 'George R. R. Martin', 2000, 'DONE'),
    (11, 'A Feast for Crows', 'George R. R. Martin', 2005, 'DONE'),
    (12, 'A Dance with Dragons', 'George R. R. Martin', 2011, 'DONE'),
    (13, 'A Tale of Two Cities', 'Charles Dickens', 1859, 'DONE'),
    (14, 'Nicholas Nickleby', 'Charles Dickens', 1839, 'DONE'),
    (15, 'Great Expectations', 'Charles Dickens', 1861, 'DONE'),
    (16, 'Hard Times', 'Charles Dickens', 1854, 'DONE'),
    (17, 'The Pickwick Papers', 'Charles Dickens', 1837, 'PAUSED'),
    (18, 'Oliver Twist', 'Charles Dickens', 1839, 'DONE'),
    (19, 'Little Dorrit', 'Charles Dickens', 1857, 'NOT_STARTED'),
    (20, 'The Old Curiosity Shop', 'Charles Dickens', 1841, 'PAUSED'),
    (21, 'Sense and Sensibility', 'Jane Austen', 1811, 'DONE'),
    (22, 'Pride and Prejudice', 'Jane Austen', 1813, 'DONE'),
    (23, 'Mansfield Park', 'Jane Austen', 1814, 'NOT_STARTED'),
    (24, 'Emma', 'Jane Austen', 1815, 'NOT_STARTED'),
    (25, 'Northanger Abbey', 'Jane Austen', 1818, 'NOT_STARTED'),
    (26, 'Persuasion', 'Jane Austen', 1818, 'NOT_STARTED'),
    (27, 'The Brothers Karamazov', 'Fyodor Dostoevsky', 1880, 'DONE'),
    (28, 'Crime and Punishment', 'Fyodor Dostoevsky', 1866, 'DONE'),
    (29, 'The Idiot', 'Fyodor Dostoevsky', 1869, 'NOT_STARTED'),
    (30, 'The Lord of the Rings and The Fellowship of the Ring', 'J. R. R. Tolkien', 1869, 'DONE'),
    (31, 'The Lord of the Rings and The Two Towers', 'J. R. R. Tolkien', 1869, 'DONE'),
    (32, 'The Lord of the Rings and The Return of the King', 'J. R. R. Tolkien', 1869, 'DONE'),
    (33, 'Zen and The Art of Motorcycle Maintenance', 'Robert M. Pirsig', 1974, 'PAUSED'),
    (34, 'Nineteen Eighty-Four', 'George Orwell', 1949, 'DONE'),
    (35, 'Animal Farm', 'George Orwell', 1945, 'IN_PROGRESS');