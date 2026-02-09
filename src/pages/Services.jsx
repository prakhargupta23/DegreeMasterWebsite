import { Box, Typography, Container, Collapse } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "../useTheme";
import serviceAiMl from "../assets/ourservices/AI&MachineLearningSolutions.png";
import serviceWorkflow from "../assets/ourservices/WorkflowAutomation&ProcessIntelligence.png";
import serviceDocument from "../assets/ourservices/DocumentIntelligence&OCRSystems.png";
import serviceDataPlatforms from "../assets/ourservices/DataPlatforms&Dashboards.png";
import serviceOptimization from "../assets/ourservices/ProductOptimization&SystemModernization.png";
import serviceGovAi from "../assets/ourservices/GovernmentAIWhyItMattersforIndia.png";


export default function Services() {
  const { theme } = useTheme();
  const location = useLocation();
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

  const servicesPreview = [
    {
      id: "ai-ml-solutions",
      title: "AI & Machine Learning Solutions",
      desc: "We design and deploy custom AI/ML systems tailored to the needs of government departments and large institutions.",
      image: serviceAiMl
    },
    {
      id: "workflow-automation",
      title: "Workflow Automation & Process Intelligence",
      desc: "Government operations often involve complex, repetitive, and manual workflows. We use AI and automation to streamline these processes end to end.",
      image: serviceWorkflow
    },
    {
      id: "document-intelligence",
      title: "Document Intelligence & OCR Systems",
      desc: "Public sector organizations manage massive volumes of unstructured documents. We build AI powered document intelligence systems that convert documents into actionable data.",
      image: serviceDocument
    },
    {
      id: "data-platforms",
      title: "Data Platforms & Dashboards",
      desc: "We build scalable data platforms and dashboards that enable leadership teams to monitor performance, identify risks, and make informed decisions.",
      image: serviceDataPlatforms
    },
    {
      id: "product-optimization",
      title: "Product Optimization & System Modernization",
      desc: "We help government organizations modernize existing systems and optimize legacy products using AI and data engineering.",
      image: serviceOptimization
    },
    {
      id: "government-ai",
      title: "Government AI: Why It Matters for India",
      desc: "India’s public sector operates at an unmatched scale—millions of records, crores of transactions, and complex policy frameworks. Traditional IT systems alone cannot keep up with this complexity.",
      image: serviceGovAi
    }
  ];

  const serviceDetails = {
    "ai-ml-solutions": {
      intro: "We design and deploy custom AI/ML systems tailored to the needs of government departments and large institutions.",
      sections: [
        { type: "text", value: "Our AI solutions are built for:" },
        {
          type: "list",
          items: [
            "Large scale data environments",
            "High accuracy and explainability",
            "Integration with existing IT systems",
            "Long term maintainability"
          ]
        },
        { type: "text", value: "Capabilities include:" },
        {
          type: "list",
          items: [
            "Predictive analytics and anomaly detection",
            "Intelligent classification and risk scoring",
            "Natural Language Processing (NLP)",
            "AI powered decision support systems"
          ]
        }
      ]
    },
    "workflow-automation": {
      intro: "Government operations often involve complex, repetitive, and manual workflows. We use AI and automation to streamline these processes end to end.",
      sections: [
        { type: "text", value: "What we automate:" },
        {
          type: "list",
          items: [
            "Rule based and exception driven workflows",
            "Approval chains and compliance processes",
            "Multi department data movement",
            "Monitoring and escalation mechanisms"
          ]
        },
        {
          type: "text",
          value: "The result is faster processing, fewer errors, and improved accountability."
        }
      ]
    },
    "document-intelligence": {
      intro: "Public sector organizations manage massive volumes of unstructured documents. We build AI powered document intelligence systems that convert documents into actionable data.",
      sections: [
        { type: "text", value: "Use cases include:" },
        {
          type: "list",
          items: [
            "OCR and data extraction from legacy records",
            "Automated verification and validation",
            "Document classification and indexing",
            "Fraud and inconsistency detection"
          ]
        },
        {
          type: "text",
          value: "Our systems are designed to handle Indian document formats, languages, and real world data quality challenges."
        }
      ]
    },
    "data-platforms": {
      intro: "We build scalable data platforms and dashboards that enable leadership teams to monitor performance, identify risks, and make informed decisions.",
      sections: [
        { type: "text", value: "Key features:" },
        {
          type: "list",
          items: [
            "Real time and near real time analytics",
            "Role based dashboards",
            "Drill down and audit friendly views",
            "Secure access and governance controls"
          ]
        },
        {
          type: "text",
          value: "These platforms turn raw data into clear, actionable insights."
        }
      ]
    },
    "product-optimization": {
      intro: "We help government organizations modernize existing systems and optimize legacy products using AI and data engineering.",
      sections: [
        { type: "text", value: "Services include:" },
        {
          type: "list",
          items: [
            "AI layer integration on legacy platforms",
            "Performance optimization and cost reduction",
            "Data quality and reliability improvements",
            "Scalability and future readiness"
          ]
        }
      ]
    },
    "government-ai": {
      intro: "India’s public sector operates at an unmatched scale—millions of records, crores of transactions, and complex policy frameworks. Traditional IT systems alone cannot keep up with this complexity.",
      sections: [
        { type: "text", value: "AI offers a transformative opportunity to:" },
        {
          type: "list",
          items: [
            "Detect errors and anomalies at scale",
            "Reduce leakages and inefficiencies",
            "Improve speed and accuracy of service delivery",
            "Enhance transparency and public trust",
            "Support evidence based policymaking"
          ]
        },
        {
          type: "text",
          value: "At DegreeMaster.ai, we believe responsible AI adoption in government is not optional—it is essential for building efficient, citizen centric governance in the coming decade."
        }
      ]
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        background: theme.bgGlow,
        color: theme.white,
        py: { xs: 6, md: 8 },
        minHeight: "auto"
      }}
    >
      <Container maxWidth="lg">
        {/* SERVICES */}
        <Box sx={{ pb: 0 }}>
          <Box sx={{ textAlign: "center", mb: { xs: 3, md: 6 } }}>
            <Typography variant="overline" sx={{ color: theme.primary, fontWeight: 700, letterSpacing: 2 }}>
              OUR SERVICES
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 800, color: theme.white, mb: 2, fontSize: { xs: "2rem", md: "3rem" } }}>
              Our Services
            </Typography>
            <Typography variant="body1" sx={{ color: theme.textSoft, maxWidth: "700px", mx: "auto" }}>
              Tap any card to view detailed content
            </Typography>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
              gap: { xs: 2, md: 3 }
            }}
          >
            {servicesPreview.map((service) => {
              const isOpen = openId === service.id;
              const details = serviceDetails[service.id];
              return (
                <Box
                  key={service.id}
                  onClick={() => setOpenId(isOpen ? null : service.id)}
                  sx={{
                    borderRadius: "18px",
                    border: `1px solid ${theme.overlayWhite08}`,
                    overflow: "hidden",
                    background: theme.overlayWhite02,
                    cursor: "pointer",
                    transition: "border-color 0.2s ease",
                    '&:hover': { borderColor: theme.primary }
                  }}
                >
                  <Box sx={{ position: "relative", width: "100%", aspectRatio: { xs: "4 / 3", md: "16 / 9" } }}>
                    <Box component="img" src={service.image} alt={service.title} sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </Box>
                  <Box sx={{ p: 2.5 }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: theme.white }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.textSoft }}>
                      {service.desc}
                    </Typography>
                  </Box>
                  {details && (
                    <Collapse in={isOpen} timeout="auto" unmountOnExit>
                      <Box sx={{ px: 2.5, pb: 2.5, color: theme.textDetail }}>
                        <Typography sx={{ mb: 2 }}>{details.intro}</Typography>
                        <Box sx={{ display: "grid", gap: 0.8, mb: 2 }}>
                          {details.sections.map((section, idx) => {
                            if (section.type === "text") {
                              return (
                                <Typography key={idx} sx={{ color: theme.textDetail }}>
                                  {section.value}
                                </Typography>
                              );
                            }
                            return (
                              <Box key={idx} sx={{ display: "grid", gap: 0.8 }}>
                                {section.items.map((item) => (
                                  <Box key={item} sx={{ display: "flex", gap: 1 }}>
                                    <Box sx={{ color: theme.primary, fontWeight: 700 }}>•</Box>
                                    <Typography>{item}</Typography>
                                  </Box>
                                ))}
                              </Box>
                            );
                          })}
                        </Box>
                      </Box>
                    </Collapse>
                  )}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}


