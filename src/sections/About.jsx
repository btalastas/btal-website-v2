import { Box, Typography, Divider, Stack} from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CompanyExperience from "../components/CompanyExperience";

import Skills from "../components/Skills";

export default function About() {
  return (
    <Box sx={{ width: "100%", maxWidth: 900 }}>
      <Stack spacing={2}>
        <Stack direction="column" spacing={1} alignItems="center">
          <WorkOutlineIcon />
          <Typography variant="h3" sx={{ fontWeight: 800 }}>
            About
          </Typography>
        </Stack>

        <Divider />

        <Typography sx={{ opacity: 0.9 }}>
          George Mason University alumnus with a B.S. in Computer Science. 10+ years of professional experience ranging from start-ups to supporting government contracts. <br /><br />
          Looking to leverage my skills acquired through education and diverse work experiences to transition into a developement or analyst role. 
        </Typography>

        <Divider />


        <Divider />

        <Typography variant="h5" sx={{ fontWeight: 800, justifyContent: "center", display: "flex" }}>
          Work Experience
        </Typography>

        <CompanyExperience
          company="Oxford GC"
          location="McLean, VA"
          roles={[
            {
              title: "Business Analyst",
              dates: "2024-2025",
              chips: [
                "Public Trust Clearance",
                "Federal Contract Compliance",
                "PII Handling",
                "Process Documentation",
                "Training & Workforce Enablement",
                "Data Extraction",
                "High-Volume Data Entry",
                "Performance Monitoring",
                "Operational Reporting",
                "Team Coordination (60+ Staff)"

              ],
              bullets: [
                "Held Public Trust Clearance.",
                "Supported large-scale government document conversion efforts involving document preparation, scanning, indexing, and data extraction in compliance with contract standards. ",
                "Developed supplemental process documentation and job aids to guide a team of 60 operators through complex workflows and evolving contract requirements.",
                "Formalized and delivered comprehensive training programs for new and existing operators to ensure consistent execution of business processes across data entry phases.",
                "Monitored team performance, analyzed operational trends, and collaborated with supervisors to resolve real-time issues and maintain productivity and data accuracy.",
                "Handled and processed PII in compliance with federal security and privacy standards.",
                "Managed and coordinated a team of 60+ onsite and remote operators, ensuring alignment with contract requirements and operational goals.",
                "Performed high-volume data entry to complete document batches accurately and within strict deadlines.",
                "Demonstrated strong leadership, communication, and problem-solving skills in a fast-paced federally regulated environment."
              ]
            },
      
          ]}
          />

        <CompanyExperience
          company="MobileSentrix"
          location="Manassas, VA"
          roles={[
            {
              title: "Business Analyst",
              dates: "2022 – 2024",
              chips: [
                "Requirements Definition",
                "CRM / POS Systems",
                "SQL Queries",
                "Python (Data Cleaning)",
                "Cross-Functional Collaboration",
                "Process Mapping",
                "Vendor Collaboration",
                "Flowcharts"
              ],
              bullets: [
                "Assisted in defining requirements and designing a subscription-based CRM-POS system to enhance customer transaction management and reporting for upwards of hundred different business store locations.",
                "Contributed to the development of basic SQL queries enabling key data operations and reporting functions within the CRM-POS system.",
                "Utilized Python for data cleanup and normalization to ensure consistent datasets across integrated CRM-POS systems.",
                "Collaborated with cross-functional teams and external vendors to streamline business processes, improve data accuracy, and enhance overall operational efficiency.",
                "Partnered with third-party vendors to design and implement business solutions, streamlining processes across departments and enhancing operational efficiency.",
                "Created process graphs and flowcharts to illustrate complex business processes to support interdepartmental understanding and project progression.",
              ],
            },
            {
              title: "Quality Control Specialist",
              dates: "2017 – 2022",
              chips: [
                "Quality Control",
                "Data Analysis",
                "Reporting & Metrics",
                "Database Record Management",
                "Process Improvement",
                "Training & Mentorship",
                "Hardware Testing"
              ],
              bullets: [
                "Assessed and graded hundreds of broken LCD screens for recycling, collaborating with refurbishing teams to maintain a high standard of quality control.",
                "Developed Python scripts to create automated monthly reports summarizing financial, management, and production performance.",
                "Maintained accurate order records in database management system, ensuring efficient order fulfillment and traceability.",
                "Supervised and trained new employees on grading criteria and workflows, enabling a consistent and productive department environment.",
                "Assembled and maintained testing devices, significantly improving team productivity and process reliability."
              ],
            },
            {
              title: "Shipping Coordinator",
              dates: "2015 – 2017",
              chips: [
                "Logistics Management",
                "Shipping & Receiving",
                "Cost Optimization",
                "Vendor Coordination",
                "Process Optimization",
                "Compliance Documentation",
                "End-to-End Operations"
              ],
              bullets: [
                "Developed optimized shipping and receiving processes, selecting methods to minimize costs and improving delivery schedules.",
                "Collaborated with third-party vendors and shipping companies to resolve shipment issues, ensuring company goals were met and client expectations were met.",
                "Managed end-to-end shipment logistics, from production through delivery, monitoring transportation costs and maintaining thorough documents for compliance and reporting."
              ],
            },
          ]}
        />


        <Skills />
      </Stack>
    </Box>
  );
}
