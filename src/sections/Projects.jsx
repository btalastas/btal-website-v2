import { Typography, Box, Card, CardContent } from "@mui/material";

export default function Projects() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>

      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h6">CRM System</Typography>
          <Typography variant="body2">
            Internal CRM built with React and REST APIs.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
