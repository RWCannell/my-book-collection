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
                sx={{".Mui-selected": { color: "#d9fad4" }}}
                TabIndicatorProps={{ style: { background: "#d9fad4" } }}
            >
                <Tab label="All" {...a11yProps(0)} />
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
            All
        </TabPanel>
        <TabPanel value={value} index={1}>
            Done
        </TabPanel>
        <TabPanel value={value} index={2}>
            In Progress
        </TabPanel>
        <TabPanel value={value} index={3}>
            Paused
        </TabPanel>
        <TabPanel value={value} index={4}>
            Not Started
        </TabPanel>
    </>
    );
};