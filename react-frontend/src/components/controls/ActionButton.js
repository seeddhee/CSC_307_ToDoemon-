import React from "react";
import { styled } from "@mui/material/styles";
import Button from "./ContainedButton";

const PREFIX = "ActionButton";

const classes = {
  root: `${PREFIX}-root`,
  secondary: `${PREFIX}-secondary`,
  primary: `${PREFIX}-primary`
};

const StyledButton = styled(Button)(({ theme }) => ({
  [`& .${classes.root}`]: {
    minWidth: 0,
    margin: theme.spacing(0.5)
  },

  [`& .${classes.secondary}`]: {
    backgroundColor: theme.palette.secondary.light,
    "& .MuiButton-label": {
      color: theme.palette.secondary.main
    }
  },

  [`& .${classes.primary}`]: {
    backgroundColor: theme.palette.primary.light,
    "& .MuiButton-label": {
      color: theme.palette.primary.main
    }
  }
}));

export default function ActionButton(props) {
  const { color, children, onClick } = props;

  return (
    <StyledButton className={`${classes.root} ${color}`} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
