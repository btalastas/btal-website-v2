import { Stack, Typography } from "@mui/material";
import {
  sectionHeaderSx,
  sectionTitleRowSx,
  mutedBodySx,
} from "../styles/sectionStyles";

export default function SectionHeader({ icon, title, subtitle, titleVariant = "h3" }) {
  return (
    <Stack spacing={1.5} sx={{ ...sectionHeaderSx, alignItems: "center" }}>
      <Stack {...sectionTitleRowSx} sx={{ width: "100%" }}>
        {icon}
        <Typography variant={titleVariant}>{title}</Typography>
      </Stack>
      {subtitle ? <Typography sx={{ ...mutedBodySx, width: "100%" }}>{subtitle}</Typography> : null}
    </Stack>
  );
}
