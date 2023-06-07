import React from "react";
import { styled } from "@mui/material/styles";
import { Dialog, DialogTitle, DialogContent, Typography } from "@mui/material";
import Controls from "../controls/Controls";
import CloseIcon from "@mui/icons-material/Close";

const PREFIX = "Popup";

const classes = {
  dialogWrapper: `${PREFIX}-dialogWrapper`,
  dialogTitle: `${PREFIX}-dialogTitle`
};

const StyledDialog = styled(Dialog)(({ theme }) => ({
  [`& .${classes.dialogWrapper}`]: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5)
  },

  [`& .${classes.dialogTitle}`]: {
    paddingRight: "0px"
  }
}));

export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;

  return (
    <StyledDialog open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Controls.ActionButton
            color="secondary"
            onClick={() => {
              setOpenPopup(false);
            }}>
            <CloseIcon />
          </Controls.ActionButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </StyledDialog>
  );
}
