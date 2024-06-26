import React from "react";
import { TextField } from "@mui/material";

export function InputRender({
  params,
  placeholder,
  onChange,
  value,
  InputProps,
  type,
  disabled,
  id,
}) {
  return (
    <TextField
      id={id}
      type={type}
      disabled={disabled}
      InputProps={InputProps}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      sx={{
        svg: { color: (theme) => theme.palette.secondary.main },
        marginTop: "10px",
        marginBottom: "20px",
        width: "100%",
      }}
      {...params}
    />
  );
}
