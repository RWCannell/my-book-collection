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
    READING_STATUS READING_STATUS,
    READ_MORE_URL VARCHAR
);

-- INITIALISE BOOKS TABLE WITH DATA
INSERT INTO BOOKS(ID, TITLE, AUTHOR, ORIGINALLY_PUBLISHED, READING_STATUS, READ_MORE_URL)
VALUES
    (1, 'Harry Potter and the Philosopher''s Stone', 'J.K Rowling', 1997, 'DONE', 'https://en.wikipedia.org/wiki/Harry_Potter_and_the_Philosopher%27s_Stone'),
    (2, 'Harry Potter and the Chamber of Secrets', 'J.K Rowling', 1998, 'DONE', 'https://en.wikipedia.org/wiki/Harry_Potter_and_the_Chamber_of_Secrets'),
    (3, 'Harry Potter and the Prisoner of Azkaban', 'J.K Rowling', 1999, 'DONE', 'https://en.wikipedia.org/wiki/Harry_Potter_and_the_Prisoner_of_Azkaban'),
    (4, 'Harry Potter and the Goblet of Fire', 'J.K Rowling', 2000, 'DONE', 'https://en.wikipedia.org/wiki/Harry_Potter_and_the_Goblet_of_Fire'),
    (5, 'Harry Potter and the Order of the Phoenix', 'J.K Rowling', 2003, 'DONE', 'https://en.wikipedia.org/wiki/Harry_Potter_and_the_Order_of_the_Phoenix'),
    (6, 'Harry Potter and the Half Blood Prince', 'J.K Rowling', 2005, 'DONE', 'https://en.wikipedia.org/wiki/Harry_Potter_and_the_Half-Blood_Prince'),
    (7, 'Harry Potter and the Deathly Hallows', 'J.K Rowling', 2007, 'DONE', 'https://en.wikipedia.org/wiki/Harry_Potter_and_the_Deathly_Hallows'),
    (8, 'A Game of Thrones', 'George R. R. Martin', 1996, 'DONE', 'https://en.wikipedia.org/wiki/A_Game_of_Thrones'),
    (9, 'A Clash of Kings', 'George R. R. Martin', 1998, 'DONE', 'https://en.wikipedia.org/wiki/A_Clash_of_Kings'),
    (10, 'A Storm of Swords', 'George R. R. Martin', 2000, 'DONE', 'https://en.wikipedia.org/wiki/A_Storm_of_Swords'),
    (11, 'A Feast for Crows', 'George R. R. Martin', 2005, 'DONE', 'https://en.wikipedia.org/wiki/A_Feast_for_Crows'),
    (12, 'A Dance with Dragons', 'George R. R. Martin', 2011, 'DONE', 'https://en.wikipedia.org/wiki/A_Dance_with_Dragons'),
    (13, 'A Tale of Two Cities', 'Charles Dickens', 1859, 'DONE', 'https://en.wikipedia.org/wiki/A_Tale_of_Two_Cities'),
    (14, 'Nicholas Nickleby', 'Charles Dickens', 1839, 'DONE', 'https://en.wikipedia.org/wiki/Nicholas_Nickleby'),
    (15, 'Great Expectations', 'Charles Dickens', 1861, 'DONE', 'https://en.wikipedia.org/wiki/Great_Expectations'),
    (16, 'Hard Times', 'Charles Dickens', 1854, 'DONE', 'https://en.wikipedia.org/wiki/Hard_Times_(novel)'),
    (17, 'The Pickwick Papers', 'Charles Dickens', 1837, 'PAUSED', 'https://en.wikipedia.org/wiki/The_Pickwick_Papers'),
    (18, 'Oliver Twist', 'Charles Dickens', 1839, 'DONE', 'https://en.wikipedia.org/wiki/Oliver_Twist'),
    (19, 'Little Dorrit', 'Charles Dickens', 1857, 'NOT_STARTED', 'https://en.wikipedia.org/wiki/Little_Dorrit'),
    (20, 'The Old Curiosity Shop', 'Charles Dickens', 1841, 'PAUSED', 'https://en.wikipedia.org/wiki/The_Old_Curiosity_Shop'),
    (21, 'Sense and Sensibility', 'Jane Austen', 1811, 'DONE', 'https://en.wikipedia.org/wiki/Sense_and_Sensibility'),
    (22, 'Pride and Prejudice', 'Jane Austen', 1813, 'DONE', 'https://en.wikipedia.org/wiki/Pride_and_Prejudice'),
    (23, 'Mansfield Park', 'Jane Austen', 1814, 'NOT_STARTED', 'https://en.wikipedia.org/wiki/Mansfield_Park'),
    (24, 'Emma', 'Jane Austen', 1815, 'NOT_STARTED', 'https://en.wikipedia.org/wiki/Emma_(novel)'),
    (25, 'Northanger Abbey', 'Jane Austen', 1818, 'NOT_STARTED', 'https://en.wikipedia.org/wiki/Northanger_Abbey'),
    (26, 'Persuasion', 'Jane Austen', 1818, 'NOT_STARTED', 'https://en.wikipedia.org/wiki/Persuasion_(novel)'),
    (27, 'The Brothers Karamazov', 'Fyodor Dostoevsky', 1880, 'DONE', 'https://en.wikipedia.org/wiki/The_Brothers_Karamazov'),
    (28, 'Crime and Punishment', 'Fyodor Dostoevsky', 1866, 'DONE', 'https://en.wikipedia.org/wiki/Crime_and_Punishment'),
    (29, 'The Idiot', 'Fyodor Dostoevsky', 1869, 'NOT_STARTED', 'https://en.wikipedia.org/wiki/The_Idiot'),
    (30, 'The Lord of the Rings and The Fellowship of the Ring', 'J. R. R. Tolkien', 1869, 'DONE', 'https://en.wikipedia.org/wiki/The_Fellowship_of_the_Ring'),
    (31, 'The Lord of the Rings and The Two Towers', 'J. R. R. Tolkien', 1869, 'DONE', 'https://en.wikipedia.org/wiki/The_Two_Towers'),
    (32, 'The Lord of the Rings and The Return of the King', 'J. R. R. Tolkien', 1869, 'DONE', 'https://en.wikipedia.org/wiki/The_Return_of_the_King'),
    (33, 'Zen and The Art of Motorcycle Maintenance', 'Robert M. Pirsig', 1974, 'PAUSED', 'https://en.wikipedia.org/wiki/Zen_and_the_Art_of_Motorcycle_Maintenance'),
    (34, 'Nineteen Eighty-Four', 'George Orwell', 1949, 'DONE', 'https://en.wikipedia.org/wiki/Nineteen_Eighty-Four'),
    (35, 'Animal Farm', 'George Orwell', 1945, 'IN_PROGRESS', 'https://en.wikipedia.org/wiki/Animal_Farm');