import * as React from "react";

export const useBooks = () => {
    const [loadingBooks, setLoadingBooks] = React.useState(true);
    const [allBooks, setAllBooks] = React.useState([]);

    React.useEffect(() => {
        fetch("http://localhost:3001/api/books")
            .then((res) => res.json())
            .then((data) => {
                const books = data;
                setAllBooks(books);
            })
            .catch((error) => {
                setLoadingBooks(false);
                console.log(JSON.stringify(error), "Error fetching books");
            })
            .finally(() => {
                setLoadingBooks(false);
                console.log("Request for books has completed")
            });
    }, []);

    return {
        loadingBooks,
        allBooks,
    };
}