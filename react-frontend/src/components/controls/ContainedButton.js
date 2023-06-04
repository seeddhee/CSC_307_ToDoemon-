/* eslint-disable no-unused-vars */
import React from "react";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";

const useStyles = styled((theme) => ({
  root: {
    margin: theme.spacing(0.5)
  },
  label: {
    textTransform: "none"
  }
}));

export default function ContainedButton(props) {
  const { text, size, color, variant, onClick, ...other } = props;
  const classes = useStyles();

  return (
    <Button
      variant={variant || "contained"}
      size={size || "large"}
      color={"primary"}
      onClick={onClick}
      {...other}
      classes={{ root: classes.root, label: classes.label }}>
      {text}
    </Button>
  );
}
