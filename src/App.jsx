import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid2";
import { Banner } from "./components/Banner";
import { StudentForm } from "./components/StudentForm";
import { Students } from "./components/Students";
import { useEffect, useState } from "react";
import axios from "axios";

export const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:4000/api/students");

      setStudents(data.data);
    };

    fetchData();
  }, []);

  const handleAddStudent = (newStudent) => {
    setStudents((currentStudents) => {
      return [...currentStudents, newStudent];
    });
  };

  const handleDeleteStudent = (id) => {
    const filteredStudents = students.filter((student) => student.id !== id);

    setStudents(filteredStudents);
  };

  return (
    <Stack spacing={5}>
      <Banner />
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 12, md: 2 }}>
          <StudentForm handleAddStudent={handleAddStudent} />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 10 }}>
          {students.length > 0 && (
            <Students
              students={students}
              handleDeleteStudent={handleDeleteStudent}
            />
          )}
        </Grid>
      </Grid>
    </Stack>
  );
};
