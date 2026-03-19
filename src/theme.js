import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#13d44d",
    },
    secondary: {
      main: "#38bdf8",
    },
    background: {
      default: "#0f172a",
      paper: "#111c34",
    },
    text: {
      primary: "#e5edf8",
      secondary: "#a7b6cc",
    },
    divider: "rgba(167, 182, 204, 0.18)",
  },
  shape: {
    borderRadius: 18,
  },
  typography: {
    fontFamily: '"Poppins", "Segoe UI", sans-serif',
    h2: {
      fontWeight: 800,
      letterSpacing: "-0.03em",
    },
    h3: {
      fontWeight: 800,
      letterSpacing: "-0.025em",
    },
    h4: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
    subtitle1: {
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.8,
    },
    body2: {
      lineHeight: 1.7,
    },
    button: {
      fontWeight: 700,
      letterSpacing: "0.02em",
      textTransform: "none",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          background:
            "radial-gradient(circle at top, rgba(56, 189, 248, 0.14), transparent 28%), linear-gradient(180deg, #0f172a 0%, #111827 100%)",
        },
        "#root": {
          minHeight: "100vh",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(15, 23, 42, 0.72)",
          backdropFilter: "blur(14px)",
          boxShadow: "none",
          borderBottom: "1px solid rgba(167, 182, 204, 0.14)",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "md",
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 18,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#111c34",
          border: "1px solid rgba(167, 182, 204, 0.18)",
          boxShadow: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 600,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgba(167, 182, 204, 0.18)",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          border: "1px solid rgba(167, 182, 204, 0.18)",
          overflow: "hidden",
          backgroundColor: "#111c34",
          boxShadow: "none",
          "&:before": {
            display: "none",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          minHeight: 62,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "hover",
      },
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
