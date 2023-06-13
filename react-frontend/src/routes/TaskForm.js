/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import Controls from "../components/controls/Controls";
import { useForm, Form } from "../components/tasks/useForm";

const taskDifficulty = [
  { id: "Easy", title: "Easy" },
  { id: "Medium", title: "Medium" },
  { id: "Hard", title: "Hard" }
];

const initialFValues = {
  id: 0,
  taskDescription: "",
  difficulty: "Medium",
  date: dayjs(Date.now())
};

export default function TaskForm(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("taskDescription" in fieldValues)
      temp.taskDescription = fieldValues.taskDescription ? "" : "This field is required.";
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
          name="taskDescription"
          label="Task Description"
          value={values.taskDescription}
          onChange={handleInputChange}
          error={errors.taskDescription}
        />
        <Controls.DateTimePickerValue
          name="date"
          label="Date"
          value={values.date}
          onChange={handleInputChange}
        />
        <Controls.RadioGroup
          name="difficulty"
          label="Difficulty"
          value={values.difficulty}
          onChange={handleInputChange}
          items={taskDifficulty}
        />
        <Controls.ContainedButton type="submit" text="Submit" color="success" />
        <Controls.ContainedButton
          text="Reset"
          variant="outlined"
          color="default"
          onClick={resetForm}
        />
      </Stack>
    </Form>
  );
}
