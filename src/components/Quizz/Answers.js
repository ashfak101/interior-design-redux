import { Checkbox, FormControl, FormControlLabel } from "@mui/material";
import React from "react";

function Answers({ options, handleChange, isDisable }) {
  return (
    <div>
      <FormControl
        sx={{
          width: "100%",
        }}
      >
        {options.map((option, index) => (
          <FormControlLabel
            sx={{
              p: 1,
              border: "1px  solid #999",
              mb: 1,
              ml: 1,
              width: "100%",
            }}
            key={index}
            value={option.id}
            name={option.option}
            checked={option.checked}
            onChange={(e) => handleChange(e, index)}
            control={<Checkbox />}
            disabled={isDisable}
            label={option.option}
          />
        ))}{" "}
      </FormControl>
    </div>
  );
}

export default Answers;
