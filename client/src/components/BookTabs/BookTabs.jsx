import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "./BookTabs.css";
import { BookSearchBar } from "../BookSearchBar/BookSearchBar";
import { BookCard } from "../BookCard/BookCard";
import { useBooks } from "../../hooks/useBooks";
import { BookCardRow } from "../BookCardRow/BookCardRow";

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const addBookButtonStyle = {
    backgroundColor: "#d9fad4",
    color: "#000000"
};

export const BookTabs = () => {
    const [value, setValue] = React.useState(0);
    const { loadingBooks, allBooks } = useBooks();
    const [booksDone, setBooksDone] = React.useState([]);
    const [booksInProgress, setBooksInProgress] = React.useState([]);
    const [booksPaused, setBooksPaused] = React.useState([]);
    const [booksNotStarted, setBooksNotStarted] = React.useState([]);

    React.useEffect(() => {
        const doneBooks = allBooks.filter(book => book.readingStatus === "DONE");
        setBooksDone(doneBooks);

        const inProgressBooks = allBooks.filter(book => book.readingStatus === "IN_PROGRESS");
        setBooksInProgress(inProgressBooks);

        const pausedBooks = allBooks.filter(book => book.readingStatus === "PAUSED");
        setBooksPaused(pausedBooks);

        const notStartedBooks = allBooks.filter(book => book.readingStatus === "NOT_STARTED");
        setBooksNotStarted(notStartedBooks);
    }, [allBooks.length]);

    console.log(allBooks);

    const handleChange = (_, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="book tabs"
                    sx={{ ".Mui-selected": { color: "#276b1d" } }}
                    textColor="#d9fad4"
                    indicatorColor="#d9fad4"
                    TabIndicatorProps={{ style: { background: "#276b1d" } }}
                >
                    <Tab label={"All"} {...allBooks.length} {...a11yProps(0)} />
                    <Tab label="Done" {...a11yProps(1)} />
                    <Tab label="In Progress" {...a11yProps(2)} />
                    <Tab label="Paused" {...a11yProps(3)} />
                    <Tab label="Not Started" {...a11yProps(4)} />
                </Tabs>
            </Box>
            <Box className="button-container">
                <Grid container spacing={2} justifyContent="space-between" alignItems="center" direction="row">
                    <Grid item xs={9} >
                        <Button variant="contained" style={addBookButtonStyle}>Add Book</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <BookSearchBar />
                    </Grid>
                </Grid>
            </Box>
            <TabPanel value={value} index={0}>
                <Box className="book-card-container">
                    <BookCardRow books={allBooks} />
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Box className="book-card-container">
                    <BookCardRow books={booksDone} />
                </Box>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Box className="book-card-container">
                    <BookCardRow books={booksInProgress} />
                </Box>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Box className="book-card-container">
                    <BookCardRow books={booksPaused} />
                </Box>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Box className="book-card-container">
                    <BookCardRow books={booksNotStarted} />
                </Box>
            </TabPanel>
        </>
    );
};