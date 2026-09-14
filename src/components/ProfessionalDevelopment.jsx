import { Box, Chip, Stack, Typography } from "@mui/material";
import {
  centeredTitleSx,
  chipRowSx,
  mutedBodySx,
  outlinedChipSx,
  sectionHeaderSx,
  timelineBlockSx,
} from "../styles/sectionStyles";

export default function ProfessionalDevelopment({ entries = [] }) {
  return (
    <Stack spacing={3} sx={{ width: "100%" }}>
      <Box sx={{ ...sectionHeaderSx, alignSelf: "center" }}>
        <Typography variant="h4" sx={centeredTitleSx}>
          Professional Development
        </Typography>
      </Box>

      {entries.map(({ title, provider, dates, status, chips = [], description }) => (
        <Stack key={`${provider}-${title}`} spacing={1.5}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "baseline" }}
            spacing={1}
            sx={{ textAlign: "left" }}
          >
            <Typography variant="h6">{title}</Typography>
            {dates && (
              <Typography variant="body2" sx={mutedBodySx}>{dates}</Typography>
            )}
          </Stack>

          <Box sx={timelineBlockSx}>
            {(provider || status) && (
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="baseline"
                sx={{ gap: 1 }}
              >
                {provider && (
                  <Typography variant="subtitle1" sx={{ textAlign: "left" }}>
                    {provider}
                  </Typography>
                )}
                {status && (
                  <Typography
                    variant="body2"
                    sx={{ ...mutedBodySx, ml: "auto", textAlign: "right" }}
                  >
                    {status}
                  </Typography>
                )}
              </Stack>
            )}
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
            {description && <Typography sx={mutedBodySx}>{description}</Typography>}
          </Box>
        </Stack>
      ))}
    </Stack>
  );
}
