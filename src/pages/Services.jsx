import { Box, Typography, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function OurServices() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 14 },
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Content Wrapper */}
      <Box sx={{ px: { xs: 3, sm: 4, md: 8, lg: 12 }, width: "100%", mt: "15vh" }}>
        <Stack spacing={4} maxWidth={"80%"}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.6rem" },
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            Our Services
            <ArrowForwardIcon sx={{ fontSize: "1em", }} />
          </Typography>
        </Stack>
        <Stack spacing={4} sx={{mt: "10vh"}}>
          

          <Typography variant="h4" sx={{ color: "#b5b5b5", fontWeight: 700, }}>AI & Machine Learning Solutions</Typography>
        
          <Typography
            sx={{
              lineHeight: 1.9,
              color: "#c7c7c7",
              fontSize: { xs: "1rem", md: "1.1rem" },
              maxWidth: "900px",
            }}
          >
            We design and deploy custom AI/ML systems tailored to the needs of government departments and large institutions.<br/><br/>
            Our AI Solutions are build for:
            <ul>
              <li>Improve operational efficiency</li>
              <li>Reduce human errors and leakages</li>
              <li>Enhance transparency and accountability</li>
              <li>Enable data backed decision making</li>
              <li>Ultimately improve citizen outcomes</li>
            </ul>
            Cpabilities Include:
            <ul>
              <li>Predictive analytics and anomaly detection</li>
              <li>Intelligent classification and risk scoring</li>
              <li>Natural Language Processing</li>
              <li>AI powered decision making systems</li>
              
            </ul>

          </Typography>

          
        </Stack>

        <Stack spacing={4} sx={{mt: "10vh"}}>
          

          <Typography variant="h4" sx={{ color: "#b5b5b5", fontWeight: 700, }}>Workflow Automation & Process Intelligence</Typography>
        
          <Typography
            sx={{
              lineHeight: 1.9,
              color: "#c7c7c7",
              fontSize: { xs: "1rem", md: "1.1rem" },
              maxWidth: "900px",
            }}
          >
            Government operations often involve complex, repetitive, and manual workflows. We use AI and automation to streamline these processes end to end.<br/><br/>What we automate:
            <ul>
              <li>Rule based and exception driven workflows</li>
              <li>Approval chains and compliance processes</li>
              <li>Multi department data movement</li>
              <li>Monitoring and escalation mechanisms</li>
            </ul>
            The result is faster processing, fewer errors, and improved accountability.

          </Typography>

          
        </Stack>
        <Stack spacing={4} sx={{mt: "10vh"}}>
          

          <Typography variant="h4" sx={{ color: "#b5b5b5", fontWeight: 700, }}>Document Intelligence & OCR Systems</Typography>
        
          <Typography
            sx={{
              lineHeight: 1.9,
              color: "#c7c7c7",
              fontSize: { xs: "1rem", md: "1.1rem" },
              maxWidth: "900px",
            }}
          >
            Public sector organizations manage massive volumes of unstructured documents. We build AI powered document intelligence systems that convert documents into actionable data.<br/><br/>Use cases include:
            <ul>
              <li>OCR and data extraction from legacy records</li>
              <li>Automated verification and validation</li>
              <li>Document classification and indexing</li>
              <li>Fraud and Inconsistency Detection</li>
            </ul>
            Our systems are designed to handle Indian document formats, languages, and real world data quality challenges.

          </Typography>

          
        </Stack>
        <Stack spacing={4} sx={{mt: "10vh"}}>
          

          <Typography variant="h4" sx={{ color: "#b5b5b5", fontWeight: 700, }}>Data Platforms & Dashboards</Typography>
        
          <Typography
            sx={{
              lineHeight: 1.9,
              color: "#c7c7c7",
              fontSize: { xs: "1rem", md: "1.1rem" },
              maxWidth: "900px",
            }}
          >
            We build scalable data platforms and dashboards that enable leadership teams to monitor performance, identify risks, and make informed decisions.<br/><br/>Key Features:
            <ul>
              <li>Real time and near real time analytics</li>
              <li>Role based dashboards</li>
              <li>down and audit friendly views</li>
              <li>Secure access and governance controls</li>
            </ul>
            These platforms turn raw data into clear, actionable insights.

          </Typography>

          
        </Stack>
        <Stack spacing={4} sx={{mt: "10vh"}}>
          

          <Typography variant="h4" sx={{ color: "#b5b5b5", fontWeight: 700, }}>Product Optimization & System Modernization</Typography>
        
          <Typography
            sx={{
              lineHeight: 1.9,
              color: "#c7c7c7",
              fontSize: { xs: "1rem", md: "1.1rem" },
              maxWidth: "900px",
            }}
          >
            We help government organizations modernize existing systems and optimize legacy products using AI and data engineering.<br/><br/>Services include:
            <ul>
              <li>AI layer integration on legacy platforms</li>
              <li>Performance optimization and cost reduction</li>
              <li>Data quality and reliability improvements</li>
              <li>Scalability and future readiness</li>
            </ul>
            These platforms turn raw data into clear, actionable insights.

          </Typography>

          
        </Stack>
        <Stack spacing={4} sx={{mt: "10vh"}}>
          

          <Typography variant="h4" sx={{ color: "#b5b5b5", fontWeight: 700, }}>Government AI: Why It Matters for India</Typography>
        
          <Typography
            sx={{
              lineHeight: 1.9,
              color: "#c7c7c7",
              fontSize: { xs: "1rem", md: "1.1rem" },
              maxWidth: "900px",
            }}
          >
            India's public sector operates at an unmatched scale—millions of records, crores of transactions, and complex policy frameworks. Traditional IT systems alone cannot keep up with this complexity.<br/><br/>
            AI offers a transformative opportunity to:
            <ul>
              <li>Detect errors and anomalies at scale</li>
              <li>Reduce leakages and inefficiencies</li>
              <li>Improve speed and accuracy of service delivery</li>
              <li>Enhance transparency and public trust</li>
              <li>Support evidence based policymaking</li>
            </ul>
            At DegreeMaster.ai, we believe responsible AI adoption in government is not optional—it is essential for building efficient, citizen centric governance in the coming decade.

          </Typography>

          
        </Stack>
      </Box>
    </Box>
  );
}
