import { AppBar, Toolbar, Button } from "@mui/material";
import { scrollToSection } from "../utils/scrollToSection";

const sections = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Gallery", id: "gallery" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: { xs: 0.5, sm: 1.5 },
        }}
      >
        {sections.map((section) => (
          <Button
            key={section.id}
            color="inherit"
            onClick={() => scrollToSection(section.id)}
            sx={{ minWidth: "auto" }}
          >
            {section.label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}
