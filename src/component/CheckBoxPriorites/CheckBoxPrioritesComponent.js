import * as React from "react";
import { Box, Checkbox, Stack, Typography } from "@mui/material";

function CheckBoxPriorites({ text, title, isChecked, onSelect }) {

    const handleCheckboxChange = (event) => {
        const value = event.target.checked;
        onSelect(value);
      };

  return (
    <Box>
      <Stack direction="row" alignItems="start">
        <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
        <Stack>
          <Typography variant="h4"> {title}</Typography>
          <Typography variant="h6">{text}</Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default CheckBoxPriorites;
