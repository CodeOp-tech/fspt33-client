import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";

export const StudentForm = ({ handleAddStudent }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const student = {
      firstName,
      lastName,
    };

    const { data } = await axios.post(
      "http://localhost:4000/api/students",
      student,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    handleAddStudent(data.data);

    setFirstName("");
    setLastName("");
  };

  return (
    <Stack spacing={2} component="form" onSubmit={handleSubmit}>
      <TextField
        id="firstName"
        label="First Name"
        variant="outlined"
        size="small"
        value={firstName}
        onChange={(event) => {
          setFirstName(event.target.value);
        }}
      />
      <TextField
        id="lastName"
        label="Last Name"
        variant="outlined"
        size="small"
        value={lastName}
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </Stack>
  );
};
