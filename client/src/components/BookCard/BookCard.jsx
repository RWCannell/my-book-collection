import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export const BookCard = (props) => {
    const { bookTitle, author } = props;
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
                        <Button size="small" style={{color: "#276b1d"}}>Read More</Button>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}

BookCard.propTypes = {
    bookTitle: PropTypes.string,
    author: PropTypes.string,
};
