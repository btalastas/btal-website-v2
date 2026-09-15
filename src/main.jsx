import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline, ThemeProvider } from "@mui/material";
import './index.css'
import App from './App.jsx'
import theme from "./theme";

// Start at the top instead of restoring the previous scroll position on refresh.
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}
window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
