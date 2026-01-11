import { Stack, Typography, List, ListItem, ListItemIcon, ListItemText, Divider} from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import CodeIcon from "@mui/icons-material/Code";
import LayersIcon from "@mui/icons-material/Layers";
import BuildIcon from "@mui/icons-material/Build";
import ComputerIcon from "@mui/icons-material/Computer";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

function SkillGroup({title, icon, items}) {
    return (
    <Stack spacing={0.5}>
      {/* Title row with icon */}
      <Stack direction="column" spacing={1} alignItems="center">
        {icon}
        <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
          {title}
        </Typography>
      </Stack>

      <List dense sx={{ m: 0 }}>
        {items.map((item) => (
          <ListItem key={item} sx={{ py: 0 }}>
            <ListItemIcon sx={{ minWidth: 32 }}>
              <CircleIcon sx={{ fontSize: 10, color: "primary.main" }} />
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
export default function Skills() {
    return (
        <Stack spacing={2}>
            <SkillGroup 
                title = "Languages & Runtime"
                 icon={<CodeIcon color="primary" />}
                items = {["Java (6 years)", "Python - Anaconda (4 years)", "C (4 years)", "JavaScript - Node.js (3 years)", "SQL (3 years)"]} 
            />

            <Divider />
            <SkillGroup 
                title = "Frameworks & Libraries"
                icon={<LayersIcon color="primary" />}
                items = {["React", "Django", "NumPy", "Pandas", "Spring / Spring Boot"]} 
            />
            <Divider />
            <SkillGroup 
                title = "Tools & Platforms"
                icon={<BuildIcon color="primary" />}
                items = {["Git & GitHub", "AWS", "JuPyter Notebook", "GCC, GDB", "Postman", "Oracle DB", "MongoDB", "VS Code", "Eclipse"]}
            />
            <Divider />
            <SkillGroup
                title = "Operating Systems and Platforms"
                icon={<ComputerIcon color="primary" />}
                items = {["Linux / UNIX", "Windows", "macOS"]}
            />
            <Divider />
            <SkillGroup
                title = "Productivity"
                icon={<WorkOutlineIcon color="primary" />}
                items = {["Microsoft Office", "JIRA"]} 
            />

        </Stack>

    );
}