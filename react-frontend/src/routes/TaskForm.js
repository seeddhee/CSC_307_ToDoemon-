/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import Controls from "../components/controls/Controls";
import { useForm, Form } from "../components/tasks/useForm";
import * as taskService from "../services/taskService";

const taskDifficulty = [
  { id: "easy", title: "Easy" },
  { id: "medium", title: "Medium" },
  { id: "hard", title: "Hard" }
];

const initialFValues = {
  id: 0,
  taskDescription: "",
  difficulty: "medium",
  dueDate: dayjs(Date.now())
};

export default function TaskForm(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("taskDescription" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required.";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email) ? "" : "Email is not valid.";
    if ("mobile" in fieldValues)
      temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required.";
    if ("departmentId" in fieldValues)
      temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required.";
    setErrors({
      ...temp
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } = useForm(
    initialFValues,
    true,
    validate
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };

  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit
      });
  }, [recordForEdit]);

  return (
    <Form onSubmit={handleSubmit}>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap">
        <Controls.Input
          name="taskDesc"
          label="Task Description"
          value={values.fullName}
          onChange={handleInputChange}
          error={errors.fullName}
        />
        <Controls.DateTimePickerValue
          name="date"
          label="Date"
          value={values.dueDate}
          onChange={handleInputChange}
        />
        <Controls.RadioGroup
          name="taskDifficulty"
          label="Task Difficulty"
          value={values.difficulty}
          onChange={handleInputChange}
          items={taskDifficulty}
        />
        <Controls.ContainedButton type="submit" text="Submit" />
        <Controls.ContainedButton text="Reset" color="default" onClick={resetForm} />
      </Stack>
    </Form>
  );
}
