import { Typography, Grid, Card, CardContent, Stack, CardActions, Button, Chip, Box } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import SectionHeader from "../components/SectionHeader";
import {
  cardShellSx,
  chipRowSx,
  mutedBodySx,
  sectionStackSx,
} from "../styles/sectionStyles";

const projects = [
  {
    title: "Leetcode",
    description: "Solutions to various leetcode problems using Java + Maven. Utilizes JUnit for testing.",
    chips: ["Java", "Algorithms", "Data Structures", "Problem Solving", "OOP", "JUnit"],
    link: "https://github.com/btalastas/leetcode_solutions",
  },
  {
    title: "Traveling Salesman Problem Comparison",
    description: "Comparison between brute-force to the approximate solution using Prim's MST algorithm for the Traveling Salesman Problem.",
    chips: ["Java", "Algorithms", "Graph Theory", "MST", "Brute-Force"],
    link: "https://github.com/btalastas/traveling_salesman_problem"
  },
  {
    title: "Matching job seekers to job openings",
    description: "Maximual bipartite matching implementation to match job seekers to job openings using Ford-Fulkerson algorithm.",
    chips: ["Java", "Algorithms", "Graph Theory", "Bipartite Matching", "Ford-Fulkerson"],
    link: "https://github.com/btalastas/maximal-bipartite-graph-matching"
  },
  {
    title: "Sports Lookup",
    description: "React application that allows users to view upcoming sports events, and statistics for teams and players. Uses Python and AWS Lambda for API calls.",
    chips: ["React", "JavaScript", "Python", "AWS Lambda"],
    link: "https://github.com/btalastas/sports-lookup"
  },
  {
    title: "ACL Papers Database",
    description: "Database of ACL Papers using Oracle DBM and JDBC. Funcitonalities include viewing, searching, and updating paper links",
    chips: ["Java", "Oracle DBM", "JDBC", "SQL",],
    link: "https://github.com/btalastas/ACL-papers-database",
  },
  {
    title: "Classification of Handwritten Numbers",
    description: "Detection of handwritten numbers using K-Nearest Neighbors.",
    chips: ["Python", "Machine Learning", "KNN", "PCA", "NumPy", "Jupyter Notebook"],
    link: "https://github.com/btalastas/classification-of-handwritten-numbers",
  },
  {
    title: "Detecting Sign Language",
    description: "Computer vision project that detects American Sign Language letters and compares the results using different methods such as edge and corner dectection.",
    chips: ["Python", "Computer Vision", "OpenCV", "Machine Learning"],
    link: "https://github.com/HelenChen001/Detecting-Sign-Language",
  },
  {
    title: "OS161",
    description: "Implemented various components of an educational operating system including system calls, and synchronization mechanisms. Solved the stoplight problem using locks.",
    chips: ["C", "Operating Systems", "Synchronization", "System Calls"],
    link: "",
  },
  {
    title: "Task Controller",
    description: "Implemented a systems programming project in C focused on process control and signaling, reinforced by pointer-based data structures such as linked lists and queues.",
    chips: ["C", "Systems Programming", "Process Control", "Data Structures"],
    link: "https://github.com/btalastas/Task-Controller",
  },
  {
    title: "DNS Client",
    description: "Implementation of a DNS Client that maps domain name to IP address using UDP sockets through command line interface.",
    chips: ["Python", "UDP", "DNS", "Command Line Interface"],
    link: "https://github.com/btalastas/dns-client"
  }
];

export default function Projects() {
  return (
    <Stack spacing={3} sx={sectionStackSx}>
      <SectionHeader
        title="Projects"
        titleVariant="h4"
        subtitle="Selected personal and academic work across software engineering, algorithms, and data-focused projects."
      />

      <Box sx={{ width: "100%" }}>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 4 }} key={project.title} sx={{ display: "flex" }}>
            <Card sx={cardShellSx}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6">{project.title}</Typography>
                <Stack direction="row" spacing={1} useFlexGap sx={chipRowSx}>
                  {project.chips.map((chip) => (
                    <Chip key={chip} label={chip} size="small" color="primary" variant="outlined"/>
                  ))}
                </Stack>
                <Typography variant="body2" sx={mutedBodySx}>{project.description}</Typography>
              </CardContent>

              <CardActions>
                <Button size="small" endIcon={<LaunchIcon />} href={project.link} target="_blank" rel="noopener noreferrer" disabled={!project.link}>
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Box>
      
    </Stack>
  );
}
