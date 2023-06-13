import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import TaskForm from "./TaskForm";
import { Paper, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from "@mui/material";
import useTable from "../components/tasks/useTable";
import * as taskService from "../services/taskService";
import Controls from "../components/controls/Controls";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Popup from "../components/tasks/Popup";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";

import "../style/task-style.css";

const PREFIX = "Tasks";

const classes = {
  pageContent: `${PREFIX}-pageContent`,
  searchInput: `${PREFIX}-searchInput`,
  newButton: `${PREFIX}-newButton`
};

const Root = styled("div")(({ theme }) => ({
  [`& .${classes.pageContent}`]: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  },

  [`& .${classes.searchInput}`]: {
    width: "75%"
  },

  [`& .${classes.newButton}`]: {
    position: "absolute",
    right: "10px"
  }
}));

const headCells = [
  { id: "taskDescription", label: "Task Description" },
  { id: "date", label: "Date" },
  { id: "difficulty", label: "Difficulty" },
  { id: "actions", label: "Actions", disableSorting: true }
];

export default function Tasks() {
  document.title = "Taskemon | Tasks";
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [records, setRecords] = useState(taskService.getAllEmployees());
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    }
  });
  const [openPopup, setOpenPopup] = useState(false);

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } = useTable(
    records,
    headCells,
    filterFn
  );

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == "") return items;
        else return items.filter((x) => x.taskDescription.toLowerCase().includes(target.value));
      }
    });
  };

  const addOrEdit = (employee, resetForm) => {
    if (employee.id == 0) taskService.insertEmployee(employee);
    else taskService.updateEmployee(employee);
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
    setRecords(taskService.getAllEmployees());
  };

  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };

  return (
    <Root className="task-page">
      <Paper className={classes.pageContent}>
        <Toolbar>
          <Controls.Input
            label="Search Tasks"
            className={classes.searchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
            onChange={handleSearch}
          />
          <Controls.ContainedButton
            text="Add New"
            variant="outlined"
            startIcon={<AddIcon />}
            className={classes.newButton}
            onClick={() => {
              setOpenPopup(true);
              setRecordForEdit(null);
            }}
          />
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.taskDescription}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.difficulty}</TableCell>
                <TableCell>
                  <Controls.ActionButton
                    color="primary"
                    onClick={() => {
                      openInPopup(item);
                    }}>
                    <EditIcon fontSize="small" />
                  </Controls.ActionButton>
                  <Controls.ActionButton color="secondary">
                    <CloseIcon fontSize="small" />
                  </Controls.ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
      <Popup title="Task Form" openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <TaskForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
      </Popup>
    </Root>
  );
}
