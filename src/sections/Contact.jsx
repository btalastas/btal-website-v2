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

export default function Contact() {
  return (
    <Box sx={{ width: "100%", maxWidth: 700 }}>
      <Stack spacing={2} alignItems="center" textAlign="center">
        <Typography variant="h4" sx={{ fontWeight: 800 }}>
          Contact Me
        </Typography>

        <Typography sx={{ opacity: 0.9 }}>
          Feel free to reach out via email or connect with me online.
        </Typography>

        <Divider sx={{ width: "100%" }} />


        <Stack direction="row" spacing={1} alignItems="center">
          <EmailIcon color="primary" />
          <Link
            href="bjorntalastas@outlook.com"
            underline="hover"
            sx={{ fontWeight: 500 }}
          >
            bjorntalastas@outlook.com
          </Link>
        </Stack>

        {/* Social Icons */}
        <Stack direction="row" spacing={2}>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/btalastas/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon fontSize="large" sx={{ color: 'common.white'}} />
          </IconButton>

          <IconButton
            component="a"
            href="https://github.com/btalastas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon fontSize="large" sx={{ color: "common.white"}} />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}
