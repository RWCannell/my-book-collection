import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./HomePage.css";
import React from "react";
import { BookTabs } from "../BookTabs/BookTabs";

export const HomePage = () => {
    return (
        <>
            <Box className="heading">
                <Typography variant="h2" color="text.secondary" align="center" className="heading-text"> My Book Collection</Typography>
            </Box>
            <Box>
                <BookTabs />
            </Box>
        </>
    );
};
