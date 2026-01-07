import { Box } from "@mui/material";

export default function Section({ id, children }) {
  return (
    <Box
      id={id}
      sx={{
        minHeight: "100vh",
        scrollMarginTop: "64px",
        display: "flex",
        justifyContent: "center",   // horizontal
        alignItems: "center",       // vertical
        px: 2,
        pt: "64px", 
        boxSizing: "border-box",
      }}
    >
      {children}
    </Box>
  );
}