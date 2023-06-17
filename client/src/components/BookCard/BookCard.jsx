import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Link from '@mui/material/Link';

export const BookCard = (props) => {
    const { bookTitle, author, readMoreUrl } = props;
    return (
        <>
            <Box className="book-card">
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {bookTitle}
                        </Typography>
                        <Typography variant="body2">
                            {author}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link href={readMoreUrl} target="_blank" rel="noopener" color="#276b1d" underline="hover">Read More</Link>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}

BookCard.propTypes = {
    bookTitle: PropTypes.string,
    author: PropTypes.string,
    readMoreUrl: PropTypes.string,
};
