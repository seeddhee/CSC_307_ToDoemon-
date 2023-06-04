import React from "react";
import { styled } from "@mui/system";
import { Button as MuiButton } from "@mui/material";

const useStyles = styled((theme) => ({
  root: {
    margin: theme.spacing(0.5)
  },
  label: {
    textTransform: "none"
  }
}));

export default function Button(props) {
  const { text, size, color, variant, onClick, ...other } = props;
  const classes = useStyles();

  return (
    <MuiButton
      variant={variant || "contained"}
      size={size || "large"}
      color={color || "primary"}
      onClick={onClick}
      {...other}
      classes={{ root: classes.root, label: classes.label }}>
      {text}
    </MuiButton>
  );
}
