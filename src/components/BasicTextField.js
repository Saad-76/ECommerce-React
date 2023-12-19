import * as React from "react";
import TextField from "@mui/material/TextField";

export default function BasicTextField({ id, label, type, value, onChange }) {
  return (
    <TextField
      label={label}
      variant="standard"
      type={type}
      value={value}
      onChange={onChange}
      id={id}
      sx={{
        margin: "8px 0px",
        width: "100%",
      }}
    />
  );
}
