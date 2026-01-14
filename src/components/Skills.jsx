import { useState } from "react";
import {
  Stack,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CircleIcon from "@mui/icons-material/Circle";

import CodeIcon from "@mui/icons-material/Code";
import LayersIcon from "@mui/icons-material/Layers";
import BuildIcon from "@mui/icons-material/Build";
import ComputerIcon from "@mui/icons-material/Computer";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

function SkillGroup({ title, icon, items, expanded, onChange }) {
  return (
    <Accordion
      expanded={expanded}
      onChange={onChange}
      disableGutters
      elevation={0}
      sx={{
        borderRadius: 2,
        border: 1,
        borderColor: "divider",
        overflow: "hidden",
        "&:before": { display: "none" }, // remove default top line
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          bgcolor: "background.paper",
          "& .MuiAccordionSummary-expandIconWrapper": {
            color: "text.secondary",
          },
          "&.Mui-expanded": {
            bgcolor: "action.hover",
          },
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          {/* Theme-consistent icon color */}
          <Stack
            sx={{
              color: "primary.main",
              display: "flex",
              alignItems: "center",
            }}
          >
            {icon}
          </Stack>

          <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
            {title}
          </Typography>
        </Stack>
      </AccordionSummary>

      <AccordionDetails sx={{ bgcolor: "background.default" }}>
        <List dense sx={{ m: 0 }}>
          {items.map((item) => (
            <ListItem key={item} sx={{ py: 0 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CircleIcon sx={{ fontSize: 10, color: "primary.main" }} />
              </ListItemIcon>
              <ListItemText
                primary={item}
                primaryTypographyProps={{ sx: { color: "text.primary" } }}
              />
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
}

export default function Skills() {

  const [expandedId, setExpandedId] = useState("languages"); // default open

  const handleChange = (panelId) => (event, isExpanded) => {
    setExpandedId(isExpanded ? panelId : false);
  };

  return (
    <Stack spacing={1.5} sx={{ width: "100%" }}>
      <Typography variant="h5" sx={{ fontWeight: 800, textAlign: "center" }}>
        Skills
      </Typography>

      <SkillGroup
        id="languages"
        title="Languages & Runtime"
        icon={<CodeIcon />}
        items={[
          "Java (6 years)",
          "Python (Anaconda) (4 years)",
          "C (4 years)",
          "JavaScript (Node.js) (3 years)",
          "SQL (3 years)",
        ]}
        expanded={expandedId === "languages"}
        onChange={handleChange("languages")}
      />

      <SkillGroup
        id="frameworks"
        title="Frameworks & Libraries"
        icon={<LayersIcon />}
        items={["React", "Django", "NumPy", "Pandas", "Spring / Spring Boot"]}
        expanded={expandedId === "frameworks"}
        onChange={handleChange("frameworks")}
      />

      <SkillGroup
        id="tools"
        title="Tools & Platforms"
        icon={<BuildIcon />}
        items={[
          "Git & GitHub",
          "AWS",
          "Jupyter Notebook",
          "GCC / GDB",
          "Postman",
          "Oracle DB",
          "MongoDB",
          "VS Code",
          "Eclipse",
          "JIRA",
        ]}
        expanded={expandedId === "tools"}
        onChange={handleChange("tools")}
      />

      <SkillGroup
        id="os"
        title="Operating Systems"
        icon={<ComputerIcon />}
        items={["Linux / UNIX", "Windows", "macOS"]}
        expanded={expandedId === "os"}
        onChange={handleChange("os")}
      />

      <SkillGroup
        id="productivity"
        title="Productivity"
        icon={<WorkOutlineIcon />}
        items={["Microsoft Office"]}
        expanded={expandedId === "productivity"}
        onChange={handleChange("productivity")}
      />
    </Stack>
  );
}
