import { Box, Container } from "@mui/material";

export default function Section({ id, children }) {
  return (
    <Box
      id={id}
      sx={{
        minHeight: "100dvh",
        scrollMarginTop: "64px",
        display: "flex",
        justifyContent: "center",   // horizontal
        alignItems: "center",       // vertical
        width: "100vw",
        px: 2,
        pt: "64px", 
        boxSizing: "border-box",
      }}
    >
      <Container
        maxWidth= "md"
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