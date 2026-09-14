import {
  Box,
  Typography,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import {
  chipRowSx,
  mutedBodySx,
  outlinedChipSx,
  timelineBlockSx,
} from "../styles/sectionStyles";

export default function Education({
  school,
  location,
  degree,
  dates,
  chips = [],
  bullets = [],
}) {
  return (
    <Stack spacing={1.5}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "baseline" }}
      >
        <Typography variant="h6">{school}</Typography>
        {location && (
          <Typography variant="body2" sx={mutedBodySx}>{location}</Typography>
        )}
      </Stack>

      <Box sx={timelineBlockSx}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "baseline" }}
          sx={{ mb: 0.5 }}
        >
          <Typography variant="subtitle1">{degree}</Typography>
          {dates && (
            <Typography variant="body2" sx={mutedBodySx}>{dates}</Typography>
          )}
        </Stack>

        {chips.length > 0 && (
          <Stack direction="row" spacing={1} sx={chipRowSx}>
            {chips.map((chip) => (
              <Chip
                key={chip}
                size="small"
                label={chip}
                variant="outlined"
                sx={outlinedChipSx}
              />
            ))}
          </Stack>
        )}

        {bullets.length > 0 && (
          <List dense sx={{ mt: 0.5 }}>
            {bullets.map((bullet) => (
              <ListItem key={bullet} sx={{ py: 0.25 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleOutlineIcon
                    fontSize="small"
                    sx={{ color: "primary.main" }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={bullet}
                  primaryTypographyProps={{ sx: mutedBodySx }}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </Stack>
  );
}
