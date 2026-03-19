import { Typography, Button, Stack, Box, Avatar } from "@mui/material";
import profilePic from "../assets/profile-pic.webp";
import {scrollToSection} from "../utils/scrollToSection";
import { mutedBodySx } from "../styles/sectionStyles";

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: { xs: "70dvh", md: "78dvh" },
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack spacing={2.5} alignItems="center" sx={{ textAlign: "center", width: "100%", maxWidth: 720, mx: "auto" }}>
        <Avatar
          src={profilePic}
          alt="Bjorn Talastas"
          slotProps={{
            onError: (e) => console.log("Avatar failed:", e.currentTarget.src),
      }}
          sx={{
            width: 140,
            height: 140,
          }}
        />

        <Typography variant="h2">Bjorn Nathanial Talastas</Typography>

        <Typography variant="h5" sx={mutedBodySx}>
          Aspiring Developer / Analyst • B.S. Computer Science, GMU
        </Typography>

        <Button variant="contained" color="primary" onClick={() => scrollToSection("contact")}>
          Contact Me
        </Button>
      </Stack>
    </Box>
  );
}
