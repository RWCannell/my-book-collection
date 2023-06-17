import * as React from "react";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';

export const BookSearchBar = () => {
    return (
        <form>
          <TextField
            id="book-search"
            // onInput={(e) => {
            //   setSearchQuery(e.target.value);
            // }}
            label="Search books"
            variant="outlined"
            placeholder="Search..."
            size="small"
            type="search"
          />
          <IconButton type="submit" aria-label="search" className="button-search-book">
            <SearchIcon style={{ fill: "#000000" }} />
          </IconButton>
        </form>
    );
}