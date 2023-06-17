import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import { ReadingStatusSelect } from "../ReadingStatusSelect/ReadingStatusSelect";
import "./AddBookDialog.css";


export const AddBookDialog = (props) => {
    const { open, handleClickClose } = props;

    return (
        <div>
            <Dialog open={open} onClose={handleClickClose}>
                <DialogTitle>Add Book</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please provide details of the book you'd like to add.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Book Title"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="author"
                        label="Author"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="readMoreUrl"
                        label="Read More Url (Optional)"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <Box className="select-container">
                        <ReadingStatusSelect />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickClose}>Cancel</Button>
                    <Button onClick={handleClickClose}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

AddBookDialog.propTypes = {
    open: PropTypes.bool,
    handleClickClose: PropTypes.func,
};