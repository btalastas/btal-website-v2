import { Typography, Box, Link } from "@mui/material";

export default function Contact() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Typography variant="h4" gutterBottom>
        Contact
      </Typography>
      <Link href="mailto:youremail@example.com">
        youremail@example.com
      </Link>
    </Box>
  );
}
