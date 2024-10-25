import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import axios from "axios";
import { upload } from "@testing-library/user-event/dist/upload";

export const Students = ({
  students,
  handleDeleteStudent,
  handleUpdateStudent,
}) => {
  const handleClick = async (id) => {
    await axios.delete(`http://localhost:4000/api/students/${id}`);

    handleDeleteStudent(id);
  };

  const handleUpdate = async (id, attendance) => {
    // switch attendance to the opposite of what it was
    attendance = attendance ? 0 : 1;

    // update in database
    await axios.put(
      `http://localhost:4000/api/students/${id}`,
      { attendance },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // update in state
    handleUpdateStudent(id, attendance);
  };

  return (
    <Stack>
      <List>
        {students.map((student) => {
          return (
            <Stack key={student.id}>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="h6">
                  {student.firstName} {student.lastName}
                </Typography>
                <Switch
                  checked={student.attendance}
                  onClick={() => handleUpdate(student.id, student.attendance)}
                />
              </Stack>
              <Box>
                <Button
                  variant="contained"
                  color="error"
                  fullWidth={false}
                  onClick={() => handleClick(student.id)}
                >
                  Delete
                </Button>
              </Box>
            </Stack>
          );
        })}
      </List>
    </Stack>
  );
};
