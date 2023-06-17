import * as React from "react";
import { BookCard } from "../BookCard/BookCard";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";


export const BookCardList = (props) => {
    const { books } = props;
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                >
                {
                    books.map(book => 
                    <Grid item xs={3} className="book-grid" key={book.id} justifyContent="flex-start" alignItems="stretch">
                        <BookCard bookTitle={book.title} author={book.author} readMoreUrl={book.readMoreUrl}/>
                    </Grid>
                )}
            </Grid>
        </>
    );
}

BookCardList.propTypes = {
    books: PropTypes.array,
};