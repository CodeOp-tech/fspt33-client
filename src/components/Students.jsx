import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import axios from "axios";

export const Students = ({ students, handleDeleteStudent }) => {
  const handleClick = async (id) => {
    await axios.delete(`http://localhost:4000/api/students/${id}`);

    handleDeleteStudent(id);
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
                <Switch />
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
