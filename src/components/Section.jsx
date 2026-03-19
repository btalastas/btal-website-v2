import { Box, Container } from "@mui/material";

export default function Section({ id, children }) {
  return (
    <Box
      id={id}
      sx={{
        minHeight: "auto",
        scrollMarginTop: "64px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "100%",
        px: { xs: 2, sm: 3 },
        pt: { xs: 10, sm: 12 },
        pb: { xs: 4, sm: 6 },
        boxSizing: "border-box",
      }}
    >
      <Container
        sx={{
          width: "100%",
          mx: "auto",
          textAlign: "center",
        }}
      >
        {children}
      </Container>
    </Box>
  );
}
