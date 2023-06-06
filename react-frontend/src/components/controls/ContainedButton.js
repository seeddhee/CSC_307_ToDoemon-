/* eslint-disable no-unused-vars */
import React from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/material";
import Button from "@mui/material/Button";

const PREFIX = "ContainedButton";

const classes = {
  root: `${PREFIX}-root`,
  label: `${PREFIX}-label`
};

const StyledButton = styled(Button)(({ theme }) => ({
  [`& .${classes.root}`]: {
    margin: theme.spacing(0.5)
  },

  [`& .${classes.label}`]: {
    textTransform: "none"
  }
}));

export default function ContainedButton(props) {
  const { text, size, color, variant, onClick, ...other } = props;

  return (
    <StyledButton
      variant={variant || "contained"}
      size={size || "large"}
      color={"primary"}
      onClick={onClick}
      {...other}
      classes={{ root: classes.root, label: classes.label }}>
      {text}
    </StyledButton>
  );
}
