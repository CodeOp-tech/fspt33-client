import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export const Banner = () => {
  return (
    <Stack textAlign="center" spacing={2}>
      <Typography variant="h3" gutterBottom component="h1">
        Attendance Manager
      </Typography>
      <Typography variant="h5" gutterBottom component="h2">
        Manage your Attendance
      </Typography>
    </Stack>
  );
};
