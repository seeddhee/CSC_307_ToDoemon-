/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/material";

const PREFIX = "useForm";

const classes = {
  root: `${PREFIX}-root`
};

const Root = styled("form")(({ theme }) => ({
  [`&.${classes.root}`]: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1)
    }
  }
}));

export function useForm(initialFValues, validateOnChange = false, validate) {
  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    if (validateOnChange) validate({ [name]: value });
  };

  const resetForm = () => {
    setValues(initialFValues);
    setErrors({});
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  };
}

export function Form(props) {
  const { children, ...other } = props;
  return (
    <Root className={classes.root} autoComplete="off" {...other}>
      {props.children}
    </Root>
  );
}
