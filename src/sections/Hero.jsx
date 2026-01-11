import { Typography, Button, Stack, Box, Avatar } from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import profilePic from "../assets/profile-pic.jpg";
export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack spacing={2.5} alignItems="center" sx={{ textAlign: "center" }}>
        <Avatar
          src={profilePic}
          alt="Bjorn Talastas"
          sx={{
            width: 140,
            height: 140,
          }}
        />

        <Typography variant="h2">
          Bjorn Talastas
        </Typography>

        <Typography variant="h5">
          Software Engineer • React • Docker
        </Typography>

        <Button variant="contained" color="primary">
          Contact Me
        </Button>
      </Stack>
    </Box>
  );
}
