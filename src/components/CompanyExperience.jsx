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

function Role({ title, dates, bullets, chips = [] }) {
  return (
    <Box sx={{ pl: 2, borderLeft: "2px solid", borderColor: "divider" }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "baseline" }}
        sx={{ mb: 0.5 }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.75 }}>
          {dates}
        </Typography>
      </Stack>

      {/* 🔹 Role-level chips */}
      {chips.length > 0 && (
        <Stack
          direction="row"
          spacing={1}
          sx={{ mt: 0.75, mb: 0.75, flexWrap: "wrap", gap: 1 }}
        >
          {chips.map((c) => (
            <Chip
              key={c}
              size="small"
              label={c}
              variant="outlined"
              sx={{
                borderColor: "primary.main",
                color: "primary.main",
                fontWeight: 500,
              }}
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
              primaryTypographyProps={{ sx: { opacity: 0.9 } }}
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
        <Typography variant="h6" sx={{ fontWeight: 800 }}>
          {company}
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.75 }}>
          {location}
        </Typography>
      </Stack>

      {chips.length > 0 && (
        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
          {chips.map((c) => (
            <Chip
              key={c}
              size="small"
              label={c}
              variant="outlined"
              sx={{
                borderColor: "primary.main",
                color: "primary.main",
                fontWeight: 500,
              }}
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
