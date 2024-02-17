const books = [
    {
        id: 1,
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K Rowling",
        originallyPublished: 1997,
        readingStatus: "DONE",
        readMoreUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Philosopher%27s_Stone"
    },
    {
        id: 2,
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K Rowling",
        originallyPublished: 1998,
        readingStatus: "DONE",
        readMoreUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Chamber_of_Secrets"
    },
    {
        id: 3,
        title: "Harry Potter and the Prisoner of Azkaban",
        author: "J.K Rowling",
        originallyPublished: 1999,
        readingStatus: "DONE",
        readMoreUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Prisoner_of_Azkaban"
    },
    {
        id: 4,
        title: "Harry Potter and the Goblet of Fire",
        author: "J.K Rowling",
        originallyPublished: 2000,
        readingStatus: "DONE",
        readMoreUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Goblet_of_Fire"
    },
    {
        id: 5,
        title: "Harry Potter and the Order of the Phoenix",
        author: "J.K Rowling",
        originallyPublished: 2003,
        readingStatus: "DONE",
        readMoreUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Order_of_the_Phoenix"
    },
    {
        id: 6,
        title: "Harry Potter and the Half Blood Prince",
        author: "J.K Rowling",
        originallyPublished: 2005,
        readingStatus: "DONE",
        readMoreUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Half-Blood_Prince"
    },
    {
        id: 7,
        title: "Harry Potter and the Deathly Hallows",
        author: "J.K Rowling",
        originallyPublished: 2007,
        readingStatus: "DONE",
        readMoreUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Deathly_Hallows"
    },
    {
        id: 8,
        title: "A Game of Thrones",
        author: "George R. R. Martin",
        originallyPublished: 1996,
        readingStatus: "DONE",
        readMoreUrl: "https://en.wikipedia.org/wiki/A_Game_of_Thrones"
    },
    {
        id: 9,
        title: "A Clash of Kings",
        author: "George R. R. Martin",
        originallyPublished: 1998,
        readingStatus: "DONE",
        readMoreUrl: "https://en.wikipedia.org/wiki/A_Clash_of_Kings"
    },
    {
        id: 10,
        title: "A Storm of Swords",
        author: "George R. R. Martin",
        originallyPublished: 2000,
        readingStatus: "DONE",
        readMoreUrl: "https://en.wikipedia.org/wiki/A_Storm_of_Swords"
    },
    {
        id: 11,
        title: "A Feast for Crows",
        author: "George R. R. Martin",
        originallyPublished: 2005,
        readingStatus: "DONE",
        readMoreUrl: "https://en.wikipedia.org/wiki/A_Feast_for_Crows"
    },
    {
        id: 12,
        title: "A Dance with Dragons",
        author: "George R. R. Martin",
        originallyPublished: 2011,
        readingStatus: "DONE",
        readMoreUrl: "https://en.wikipedia.org/wiki/A_Dance_with_Dragons"
    },
    {
        id: 13,
        title: "A Tale of Two Cities",
        author: "Charles Dickens",
        originallyPublished: 1859,
        readingStatus: "DONE",
        readMoreUrl: "https://en.wikipedia.org/wiki/A_Tale_of_Two_Cities"
    },
    {
        id: 14,
        title: "Nicholas Nickleby",
        author: "Charles Dickens",
        originallyPublished: 1839,
        readingStatus: "DONE",
        readMoreUrl: "https://en.wikipedia.org/wiki/Nicholas_Nickleby"
    },
    {
        id: 15,
        title: "Great Expectations",
        author: "Charles Dickens",
        originallyPublished: 1861,
        readingStatus: "DONE",
        readMoreUrl: "https://en.wikipedia.org/wiki/Great_Expectations"
    },
    {
        id: 16,
        title: "Hard Times",
        author: "Charles Dickens",
        originallyPublished: 1997,
        readingStatus: "DONE",
        readMoreUrl: "https://en.wikipedia.org/wiki/Hard_Times_(novel)"
    },
    {
        id: 17,
        title: "The Pickwick Papers",
        author: "Charles Dickens",
        originallyPublished: 1837,
        readingStatus: "PAUSED",
        readMoreUrl: "https://en.wikipedia.org/wiki/The_Pickwick_Papers"
    },
    {
        id: 18,
        title: "Oliver Twist",
        author: "Charles Dickens",
        originallyPublished: 1839,
        readingStatus: "DONE",
        readMoreUrl: "https://en.wikipedia.org/wiki/Oliver_Twist"
    },
    {
        id: 19,
        title: "Little Dorrit",
        author: "Charles Dickens",
        originallyPublished: 1857,
        readingStatus: "DONE",
        readMoreUrl: "https://en.wikipedia.org/wiki/Little_Dorrit"
    },
    {
        id: 20,
        title: "The Old Curiosity Shop",
        author: "Charles Dickens",
        originallyPublished: 1841,
        readingStatus: "PAUSED",
        readMoreUrl: "https://en.wikipedia.org/wiki/The_Old_Curiosity_Shop"
    },
    {
        id: 21,
        title: "Sense and Sensibility",
        author: "Jane Austen",
        originallyPublished: 1811,
        readingStatus: "DONE",
        readMoreUrl: "https://en.wikipedia.org/wiki/Sense_and_Sensibility"
    },
    {
        id: 22,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        originallyPublished: 1813,
        readingStatus: "DONE",
        readMoreUrl: "https://en.wikipedia.org/wiki/Pride_and_Prejudice"
    },
    {
        id: 23,
        title: "Mansfield Park",
        author: "Jane Austen",
        originallyPublished: 1814,
        readingStatus: "NOT_STARTED",
        readMoreUrl: "https://en.wikipedia.org/wiki/Mansfield_Park"
    },
    {
        id: 24,
        title: "Emma",
        author: "Jane Austen",
        originallyPublished: 1815,
        readingStatus: "NOT_STARTED",
        readMoreUrl: "https://en.wikipedia.org/wiki/Emma_(novel)"
    },
    {
        id: 25,
        title: "Northanger Abbey",
        author: "Jane Austen",
        originallyPublished: 1818,
        readingStatus: "NOT_STARTED",
        readMoreUrl: "https://en.wikipedia.org/wiki/Northanger_Abbey"
    },
    {
        id: 26,
        title: "Persuasion",
        author: "Jane Austen",
        originallyPublished: 1818,
        readingStatus: "NOT_STARTED",
        readMoreUrl: "https://en.wikipedia.org/wiki/Persuasion_(novel)"
    },
    {
        id: 27,
        title: "The Brothers Karamazov",
        author: "Fyodor Dostoevsky",
        originallyPublished: 1880,
        readingStatus: "DONE",
        readMoreUrl: "https://en.wikipedia.org/wiki/The_Brothers_Karamazov"
    },
    {
        id: 28,
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        originallyPublished: 1866,
        readingStatus: "DONE",
        readMoreUrl: "https://en.wikipedia.org/wiki/Crime_and_Punishment"
    },
    {
        id: 29,
        title: "The Idiot",
        author: "Fyodor Dostoevsky",
        originallyPublished: 1869,
        readingStatus: "DONE",
        readMoreUrl: "https://en.wikipedia.org/wiki/The_Idiot"
    },
    {
        id: 30,
        title: "The Lord of the Rings and The Fellowship of the Ring",
        author: "J. R. R. Tolkien",
        originallyPublished: 1954,
        readingStatus: "DONE",
        readMoreUrl: "https://en.wikipedia.org/wiki/The_Fellowship_of_the_Ring"
    },
    {
        id: 31,
        title: "The Lord of the Rings and The Two Towers",
        author: "J. R. R. Tolkien",
        originallyPublished: 1954,
        readingStatus: "DONE",
        readMoreUrl: "https://en.wikipedia.org/wiki/The_Two_Towers"
    },
    {
        id: 32,
        title: "The Lord of the Rings and The Return of the King",
        author: "J. R. R. Tolkien",
        originallyPublished: 1955,
        readingStatus: "DONE",
        readMoreUrl: "https://en.wikipedia.org/wiki/The_Return_of_the_King"
    },
    {
        id: 33,
        title: "Zen and The Art of Motorcycle Maintenance",
        author: "Robert M. Pirsig",
        originallyPublished: 1974,
        readingStatus: "PAUSED",
        readMoreUrl: "https://en.wikipedia.org/wiki/Zen_and_the_Art_of_Motorcycle_Maintenance"
    },
    {
        id: 34,
        title: "Nineteen Eighty-Four",
        author: "George Orwell",
        originallyPublished: 1949,
        readingStatus: "DONE",
        readMoreUrl: "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four"
    },
    {
        id: 35,
        title: "Animal Farm",
        author: "George Orwell",
        originallyPublished: 1945,
        readingStatus: "DONE",
        readMoreUrl: "https://en.wikipedia.org/wiki/Animal_Farm"
    }
]

export default { books }