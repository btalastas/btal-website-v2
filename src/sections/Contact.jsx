import {
  Box,
  Stack,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SectionHeader from "../components/SectionHeader";
import { mutedBodySx } from "../styles/sectionStyles";

export default function Contact() {
  return (
    <Stack spacing={2} alignItems="center" textAlign="center">
      <SectionHeader
        title="Contact Me"
        titleVariant="h4"
        subtitle="Feel free to reach out via email or connect with me online."
      />

      <Divider sx={{ width: "100%" }} />

      <Stack direction="row" spacing={1} alignItems="center">
        <EmailIcon color="primary" />
        <Link
          href="mailto:bjorntalastas@outlook.com"
          sx={mutedBodySx}
        >
          bjorntalastas@outlook.com
        </Link>
      </Stack>
      <Stack direction="row" spacing={2}>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/btalastas/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
        <LinkedInIcon fontSize="large" sx={{ color: "text.primary"}} />
        </IconButton>
          <IconButton
            component="a"
            href="https://github.com/btalastas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon fontSize="large" sx={{ color: "text.primary"}} />
          </IconButton>
        </Stack>
      </Stack>
  );
}
