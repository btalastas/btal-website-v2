import { Typography, Divider, Stack } from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CompanyExperience from "../components/CompanyExperience";
import Education from "../components/Education";
import ProfessionalDevelopment from "../components/ProfessionalDevelopment";
import Skills from "../components/Skills";
import SectionHeader from "../components/SectionHeader";
import {
  mutedBodySx,
  sectionStackSx,
} from "../styles/sectionStyles";

export default function About() {
  return (
    <Stack spacing={3} sx={sectionStackSx}>
      <SectionHeader
        icon={<WorkOutlineIcon color="primary" />}
        title="About"
        titleVariant="h4"
        subtitle="A little about my background, work history, and the skills I bring to new teams."
      />

      <Divider />

      <Typography sx={mutedBodySx}>
        George Mason University alumnus with a B.S. in Computer Science. 10+ years of professional experience ranging from start-ups to supporting government contracts. <br /><br />
        Currently attending the RiseUp with ServiceNow program to build skills in system administration, IT service management, and workflow automation. Looking to apply my education and diverse work experience to a development or analyst role.
      </Typography>

      <Divider />

      <Education
        school="George Mason University"
        degree="B.S. in Computer Science"
        dates={"Aug 2021 - Aug 2024"}
        chips={
          ["Software Engineering",
            "Web Application Devlopment",
            "Algorithm Analysis",
            "Data Structures",
            "Object-Oriented Programming",
            "Systems Programming",
            "Operating Systems",
            "Data Mining",
            "Database Concepts",
            "Secure Programming",
            "Computer Networks",
          ]
        }
      />

      <Divider />

      <ProfessionalDevelopment
        entries={[
          // Add courses, training, or certifications here:
          // {
          //   title: "Course or certification name",
          //   provider: "Training provider or issuing organization",
          //   dates: "Completion date or date range",
          //   status: "Completed or In progress",
          //   chips: ["Topic or skill"],
          //   description: "What you learned or achieved.",
          // },
          {
            title: "RiseUp with ServiceNow",
            provider: "ServiceNow",
            dates: "2026",
            status: "In progress",
            chips: [
              "ServiceNow Platform",
              "System Administration",
              "IT Service Management (ITSM)",
              "Workflow Automation",
              "Service Catalog",
              "Reporting & Dashboards",
              "User & Access Management",
            ],
            bullets: [
              "Building foundational ServiceNow administration skills, including platform navigation, lists, filters, and form configuration.",
              "Learning to manage tables, create reports, and organize platform changes using update sets.",
              "Developing an understanding of IT service management processes and how ServiceNow supports business operations.",
              "Learning application development fundamentals, including creating application tables and designing how users interact with custom applications.",
              "Exploring ServiceNow scripting with client scripts, business rules, UI policies, and Script Includes to customize application behavior.",
            ],
          },
          {
            title: "Google Cybersecurity Professional Certificate",
            provider: "Google / Coursera",
            dates: "2026",
            status: "Completed",
            chips: [
              "Python for Cybersecurity",
              "Linux",
              "SQL",
              "SIEM Tools",
              "Intrusion Detection Systems (IDS)",
              "Incident Detection & Response",
              "Packet Capture & Analysis",
              "Security Frameworks & Controls",
            ],
            bullets: [
              "Completed practical training in identifying security risks, threats, and vulnerabilities and applying security frameworks and controls.",
              "Used Python, Linux, and SQL to automate cybersecurity tasks and work with security-related data.",
              "Practiced detecting and investigating security incidents using SIEM tools and intrusion detection systems.",
              "Performed packet capture and network traffic analysis to identify potential security threats.",
            ],
          },
        ]}
      />




      <Divider />

      <CompanyExperience
        entries={[
          {
            title: "Hospitality Associate",
            company: "Mount Vernon Ladies Association",
            location: "Mount Vernon, VA",
            dates: "Apr 2026 – Aug 2026",
            chips: [
              "Customer Support",
              "Transaction Processing",
              "Cash Reconciliation",
              "Operational Procedures",
              "Team Communication"
            ],
            bullets: [
              "Provide high-volume customer support to hundreds of daily visitors, ensuring efficient service and operational flow in a fast-paced environment.",
              "Perform accurate transaction processing and cash reconciliation, maintaining accountability and data accuracy standards.",
              "Execute opening and closing procedures using structured checklists, ensuring operational consistency and compliance.",
              "Maintain strong attention to detail while managing simultaneous customer interactions and operational tasks.",
              "Communicate clearly with visitors and team members to ensure smooth handoffs and issue resolution."
            ]
          },
          {
            title: "Business Analyst",
            company: "Oxford Government Consulting",
            location: "McLean, VA",
            dates: "Jan 2025 – Dec 2025",
            chips: [
              "Public Trust Clearance",
              "Federal Contract Compliance",
              "PII / CUI Handling",
              "KPI Monitoring",
              "Data Quality Analysis",
              "Process Documentation",
              "Training",
              "User Acceptance Testing (UAT)"
            ],
            bullets: [
              "Supported federal data operations, ensuring compliance with security, data handling (PII/CUI), and contract requirements.",
              "Monitored KPIs and performed data quality analysis to identify bottlenecks and improve processing accuracy.",
              "Authored job aids and documentation for 60+ operators, improving workflow consistency and audit readiness.",
              "Led training sessions to standardize operational processes across teams.",
              "Performed user acceptance testing (UAT) validation of workflows, outputs, and data integrity.",
              "Collaborated cross-functionally to resolve data discrepancies and maintain production timelines."
            ]
          },
          {
            title: "Business Analyst",
            company: "MobileSentrix",
            location: "Manassas, VA",
            dates: "Sep 2023 – Jan 2024",
            chips: [
              "Business Requirements",
              "SQL",
              "Python",
              "Data Validation",
              "Process Flows",
              "System Diagrams",
              "Engineering Collaboration"
            ],
            bullets: [
              "Gathered and documented business requirements, supporting system enhancements and operational workflows.",
              "Performed data validation and reporting using SQL, ensuring data accuracy across systems.",
              "Used Python to clean, normalize, and validate datasets, improving data reliability.",
              "Created process flows and system diagrams to support clear communication and onboarding.",
              "Collaborated with engineering teams to align business needs with system functionality."
            ]
          },
          {
            title: "Quality Control Specialist",
            company: "MobileSentrix",
            location: "Manassas, VA",
            dates: "Aug 2018 – Sep 2023",
            chips: [
              "Data Validation",
              "Quality Assurance",
              "Python",
              "Report Automation",
              "Data Integrity",
              "Training & Mentorship"
            ],
            bullets: [
              "Performed high-volume data validation and quality checks, ensuring accuracy across internal systems.",
              "Automated operational and financial reports using Python, improving reporting efficiency.",
              "Identified and resolved data inconsistencies, strengthening data integrity and reporting reliability.",
              "Trained and mentored employees, improving process consistency and operational performance."
            ]
          },
          {
            title: "Shipping Coordinator",
            company: "MobileSentrix",
            location: "Manassas, VA",
            dates: "Aug 2015 – Aug 2018",
            chips: [
              "Logistics Operations",
              "Shipment Tracking",
              "Vendor & Carrier Coordination",
              "Record Management",
              "Operational Reporting"
            ],
            bullets: [
              "Managed logistics operations and maintained accurate tracking and documentation of shipments.",
              "Resolved vendor and carrier issues, minimizing operational disruptions.",
              "Maintained detailed records to support reporting and operational visibility."
            ]
          }
        ]}
      />



      <Skills />

      <Divider />


    </Stack>
  );
}
