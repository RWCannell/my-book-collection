import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./ReadingStatusSelect.css";

export const ReadingStatusSelect = () => {
  const [readingStatus, setReadingStatus] = React.useState("");

  const handleChange = (event) => {
    setReadingStatus(event.target.value);
  };

  return (
    <Box className="reading-status-select">
        <FormControl fullWidth>
            <InputLabel id="readingStatusLabel" className="input-label">Reading Status</InputLabel>
            <Select
                labelId="readingStatusLabel"
                id="readingStatus"
                value={readingStatus}
                label="Reading Status"
                placeholder="Select reading status"
                onChange={handleChange}
                variant="standard"
            >
                <MenuItem value="DONE">Done</MenuItem>
                <MenuItem value="IN_PROGRESS">In Progress</MenuItem>
                <MenuItem value="NOT_STARTED">Not Started</MenuItem>
                <MenuItem value="PAUSED">Paused</MenuItem>
            </Select>
        </FormControl>
    </Box>
  );
}