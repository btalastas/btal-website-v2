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

function Role({ title, dates, bullets, chips = [] }) {
  return (
    <Box sx={timelineBlockSx}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "baseline" }}
        sx={{ mb: 0.5 }}
      >
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="body2" sx={mutedBodySx}>{dates}</Typography>
      </Stack>

      {chips.length > 0 && (
        <Stack direction="row" spacing={1} sx={chipRowSx}>
          {chips.map((c) => (
            <Chip
              key={c}
              size="small"
              label={c}
              variant="outlined"
              sx={outlinedChipSx}
            />
          ))}
        </Stack>
      )}

      <List dense sx={{ mt: 0.5 }}>
        {bullets.map((b, i) => (
          <ListItem key={i} sx={{ py: 0.25 }}>
            <ListItemIcon sx={{ minWidth: 32 }}>
              <CheckCircleOutlineIcon
                fontSize="small"
                sx={{ color: "primary.main" }}
              />
            </ListItemIcon>
            <ListItemText
              primary={b}
              primaryTypographyProps={{ sx: mutedBodySx }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default function CompanyExperience({
  company,
  location,
  chips = [],
  roles,
}) {
  return (
    <Stack spacing={1.5}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "baseline" }}
      >
        <Typography variant="h6">{company}</Typography>
        <Typography variant="body2" sx={mutedBodySx}>{location}</Typography>
      </Stack>

      {chips.length > 0 && (
        <Stack direction="row" spacing={1} sx={chipRowSx}>
          {chips.map((c) => (
            <Chip
              key={c}
              size="small"
              label={c}
              variant="outlined"
              sx={outlinedChipSx}
            />
          ))}
        </Stack>
      )}

      <Stack spacing={2}>
        {roles.map((role, idx) => (
          <Role key={idx} {...role} />
        ))}
      </Stack>
    </Stack>
  );
}
