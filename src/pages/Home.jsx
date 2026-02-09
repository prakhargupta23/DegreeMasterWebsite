
import { Box, Typography, Button, Container, Stack, Grid } from "@mui/material";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StorageIcon from '@mui/icons-material/Storage';
import MemoryIcon from '@mui/icons-material/Memory';
import InsightsIcon from '@mui/icons-material/Insights';
import { useTheme } from "../useTheme";
import heroDashboard from "../assets/hero-dashboard2.png";
import { Link, useNavigate } from "react-router-dom";
import efficiencyIcon from "../assets/whyDegreeMaster.ai/efficiency_17892512.png";
import automationIcon from "../assets/whyDegreeMaster.ai/automation_9658063.png";
import checkIcon from "../assets/whyDegreeMaster.ai/check_12031790.png";
import cyberSecurityIcon from "../assets/whyDegreeMaster.ai/cyber-security_3045808.png";
import supplyIcon from "../assets/whyDegreeMaster.ai/supply_6933830.png";
import webOptimizationIcon from "../assets/whyDegreeMaster.ai/web-optimization_12790056.png";
import serviceAiMl from "../assets/ourservices/AI&MachineLearningSolutions.png";
import serviceWorkflow from "../assets/ourservices/WorkflowAutomation&ProcessIntelligence.png";
import serviceDocument from "../assets/ourservices/DocumentIntelligence&OCRSystems.png";
import serviceDataPlatforms from "../assets/ourservices/DataPlatforms&Dashboards.png";
import serviceOptimization from "../assets/ourservices/ProductOptimization&SystemModernization.png";
import serviceGovAi from "../assets/ourservices/GovernmentAIWhyItMattersforIndia.png";
import blogAnomalyImage from "../assets/Blogs/HowAnomalyDetectionWorksinFinancial.png";
import blogDocIntelImage from "../assets/Blogs/AIModelsUsedforDocumentIntelligence.png";
import blogLlmImage from "../assets/Blogs/HowLargeLanguageModels.png";

export default function Home() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const blogPosts = [
    {
      title: "How Anomaly Detection Works in Financial Systems",
      excerpt: "Why traditional rules fail and how AI learns the 'geometry of normality' to detect fraud.",
      image: blogAnomalyImage
    },
    {
      title: "AI Models Used for Document Intelligence",
      excerpt: "Moving beyond OCR: How machines understand meaning, context, and intent in unstructured documents.",
      image: blogDocIntelImage
    },
    {
      title: "Time-Series Analysis for Delay Detection",
      excerpt: "Why delays accumulate quietly and how AI tracks direction, speed, and stability to predict slippage.",
      image: blogAnomalyImage
    },
    {
      title: "The Future of Public Sector AI",
      excerpt: "Exploring the next decade of government technology: Autonomous agents, real-time citizen services, and proactive governance.",
      image: blogLlmImage
    }
  ];

  const coreStrengths = [
    { title: "Deep understanding of government workflows", desc: "Built for the realities of public sector operations and constraints.", icon: efficiencyIcon },
    { title: "Proven experience in building scalable AI platforms", desc: "Delivered systems that operate reliably at institutional scale.", icon: automationIcon },
    { title: "Strong execution focus led by IIT/IIM founders", desc: "Execution-first leadership with deep technical and product experience.", icon: webOptimizationIcon },
    { title: "Emphasis on accuracy, reliability, and trust", desc: "Systems designed for auditability, stability, and accountability.", icon: supplyIcon },
    { title: "Smart Workflow Automation", desc: "Work your way — from head office or on the go — with tools that keep you connected and productive.", icon: cyberSecurityIcon },
    { title: "Commitment to long term public sector impact", desc: "Aligned to outcomes that improve governance and citizen services.", icon: checkIcon }
  ];

  return (
    <Box sx={{ width: "100%", overflowX: "hidden", background: theme.bgGlow, color: theme.white }}>
      {/* HERO */}
      <Box sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center" }}>
            <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, bgcolor: theme.overlayWhite06, backdropFilter: "blur(12px)", px: 2, py: 0.8, borderRadius: "50px", mb: 3, border: `1px solid ${theme.overlayWhite15}` }}>
              <AutoAwesomeIcon fontSize="small" sx={{ color: theme.secondary }} />
              <Typography variant="subtitle2" fontWeight={700} sx={{ color: theme.white }}>Agentic AI & Decision Support Systems</Typography>
            </Box>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.2rem", md: "4rem" },
                fontWeight: 800,
                lineHeight: 1.15,
                mb: 3
              }}
            >
              Building Production Grade AI
              <Box component="span" sx={{ display: 'block' }}>for Government & Institutions</Box>
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: "1rem", md: "1.15rem" }, maxWidth: "900px", mx: "auto", mb: 2, opacity: 0.9, lineHeight: 1.7, color: theme.textBody }}>
              DegreeMaster.ai is a mission driven AI consulting and product company focused on designing and deploying production ready technology solutions for government organizations and large institutions
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: "1rem", md: "1.1rem" }, maxWidth: "900px", mx: "auto", mb: 2, opacity: 0.9, lineHeight: 1.7, color: theme.textBody }}>
              We work at the intersection of artificial intelligence, data engineering, and real world public sector workflows where outcomes matter more than experiments.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: "1rem", md: "1.1rem" }, maxWidth: "900px", mx: "auto", mb: 2, opacity: 0.9, lineHeight: 1.7, color: theme.textBody }}>
              Our solutions help government departments improve operational efficiency, reduce errors, enhance transparency, and make better data driven decisions at scale. From AI powered pension systems and expenditure intelligence to workflow automation and document intelligence platforms, we build technology that directly impacts governance outcomes and citizen services.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: "1rem", md: "1.1rem" }, maxWidth: "900px", mx: "auto", mb: 4, opacity: 0.9, lineHeight: 1.7, color: theme.textBody }}>
              Founded by IIT/IIM alumni and serial entrepreneurs, DegreeMaster.ai brings deep experience in building scalable products, navigating complex stakeholder environments, and delivering systems that function reliably in real world government settings. We don’t build demos. We build systems governments can trust.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center" sx={{ mb: { xs: 5, md: 7 } }}>
              <Button component={Link} to="/contact" variant="contained" size="large" sx={{ bgcolor: theme.white, color: theme.black, fontWeight: 700, px: 4, py: 1.6, borderRadius: "50px", border: `1px solid ${theme.overlayBlack10}`, boxShadow: `0 8px 30px ${theme.overlayWhite10}`, '&:hover': { bgcolor: theme.whiteHover } }}>Get Started Today</Button>
              <Button component={Link} to="/services" variant="outlined" size="large" sx={{ color: theme.white, borderColor: theme.overlayWhite30, fontWeight: 600, px: 4, py: 1.6, borderRadius: "50px", '&:hover': { borderColor: theme.white, background: theme.overlayWhite05 } }}>Explore Solutions</Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* DASHBOARD MEDIA */}
      <Box sx={{ pb: { xs: 6, md: 10 }, px: { xs: 2, md: 0 } }}>
        <Box sx={{ maxWidth: '1200px', mx: 'auto', borderRadius: { xs: '16px', md: '24px' }, overflow: 'hidden', border: `1px solid ${theme.overlayWhite12}` }}>
          <Box
            component="img"
            // src={hero-dashboard1}
            src={heroDashboard}
            alt="Dashboard Preview"
            sx={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </Box>
      </Box>
     
     

      {/* CORE STRENGTHS */}
      <Box sx={{ py: { xs: 6, md: 10 }, borderTop: `1px solid ${theme.overlayWhite08}` }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: { xs: 3, md: 6 } }}>
            <Typography variant="overline" sx={{ color: theme.primary, fontWeight: 700, letterSpacing: 2 }}>CORE STRENGTHS</Typography>
            <Typography variant="h2" sx={{ fontWeight: 800, color: theme.white, mb: 2, fontSize: { xs: "2rem", md: "3rem" } }}>Why DegreeMaster.ai</Typography>
            <Typography variant="body1" sx={{ color: theme.textSoft, maxWidth: "650px", mx: "auto", fontSize: { xs: "0.95rem", md: "1rem" } }}>Built for the unique scale and security needs of the public sector</Typography>
          </Box>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }, gap: { xs: 2, md: 3 } }}>
            {coreStrengths.map((strength, index) => (
              <Box key={index} sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 2, p: { xs: 2.5, md: 3 }, borderRadius: "18px", background: theme.overlayWhite02, border: `1px solid ${theme.overlayWhite08}` }}>
                <Box sx={{ width: 56, height: 56, borderRadius: "14px", background: theme.white, border: `1px solid ${theme.white}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Box
                    role="img"
                    aria-label={strength.title}
                    sx={{
                      width: 32,
                      height: 32,
                      backgroundColor: theme.iconColor,
                      WebkitMaskImage: `url(${strength.icon})`,
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      WebkitMaskSize: "contain",
                      maskImage: `url(${strength.icon})`,
                      maskRepeat: "no-repeat",
                      maskPosition: "center",
                      maskSize: "contain"
                    }}
                  />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ color: theme.white, fontWeight: 800, mb: 1, fontSize: "1.1rem" }}>{strength.title}</Typography>
                  <Typography variant="body2" sx={{ color: theme.textSoft, lineHeight: 1.6, fontSize: "0.95rem" }}>{strength.desc}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* FEATURES PREVIEW */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: { xs: 3, md: 6 } }}>
            <Typography variant="overline" sx={{ color: theme.primary, fontWeight: 700, letterSpacing: 2 }}>OUR SERVICES</Typography>
            <Typography variant="h2" sx={{ fontWeight: 800, color: theme.white, mb: 2, fontSize: { xs: "2rem", md: "3rem" } }}>Our Services</Typography>
            <Typography variant="body1" sx={{ color: theme.textSoft, maxWidth: "700px", mx: "auto" }}>Tap any card to view detailed content</Typography>
          </Box>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }, gap: { xs: 2, md: 3 } }}>
            {[{
              title: "AI & Machine Learning Solutions",
              desc: "We design and deploy custom AI/ML systems tailored to the needs of government departments and large institutions.",
              image: serviceAiMl
            },{
              title: "Workflow Automation & Process Intelligence",
              desc: "Government operations often involve complex, repetitive, and manual workflows. We use AI and automation to streamline these processes end to end.",
              image: serviceWorkflow
            },{
              title: "Document Intelligence & OCR Systems",
              desc: "Public sector organizations manage massive volumes of unstructured documents. We build AI powered document intelligence systems that convert documents into actionable data.",
              image: serviceDocument
            },{
              title: "Data Platforms & Dashboards",
              desc: "We build scalable data platforms and dashboards that enable leadership teams to monitor performance, identify risks, and make informed decisions.",
              image: serviceDataPlatforms
            },{
              title: "Product Optimization & System Modernization",
              desc: "We help government organizations modernize existing systems and optimize legacy products using AI and data engineering.",
              image: serviceOptimization
            },{
              title: "Government AI: Why It Matters for India",
              desc: "India’s public sector operates at an unmatched scale—millions of records, crores of transactions, and complex policy frameworks. Traditional IT systems alone cannot keep up with this complexity.",
              image: serviceGovAi
            }].map((feature, i) => (
              <Box key={i} onClick={() => navigate('/services', { state: { selectedServiceTitle: feature.title } })} sx={{ borderRadius: "18px", border: `1px solid ${theme.overlayWhite08}`, overflow: "hidden", cursor: "pointer", background: theme.overlayWhite02, transition: "transform 0.2s ease, border-color 0.2s ease", '&:hover': { transform: "translateY(-3px)", borderColor: theme.primary } }}>
                <Box sx={{ position: "relative", width: "100%", aspectRatio: { xs: "4 / 3", md: "16 / 9" } }}>
                  <Box component="img" src={feature.image} alt={feature.title} sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Box>
                <Box sx={{ p: 2.5 }}>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: theme.white }}>{feature.title}</Typography>
                  <Typography variant="body2" sx={{ color: theme.textSoft }}>{feature.desc}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

     
      {/* IMPLEMENTATION ENGINE */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              color: theme.white,
              mb: { xs: 5, md: 7 },
              fontSize: { xs: "2rem", md: "2.5rem" },
              letterSpacing: 0.5
            }}
          >
            Our AI Implementation Engine
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: { xs: 2, md: 4 }, flexWrap: "wrap" }}>
            {/* Step 1 + Connector */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 2, md: 4 },
                flex: "0 0 auto",
                '&:hover .icon': { transform: 'translateY(2px)', filter: 'brightness(1.2)' },
                '&:hover .connector': { opacity: 0.8 },
                '&:hover .flow-dot': { animationDuration: '1.5s' }
              }}
            >
              <Box sx={{ p: { xs: 3, md: 4 }, borderRadius: "20px", background: theme.overlayWhite03, border: `2px solid ${theme.primary}44`, textAlign: "center", width: { xs: "100%", sm: 260, md: 280 }, transition: "transform 0.2s ease" }}>
                <StorageIcon className="icon" sx={{ fontSize: { xs: 54, md: 64 }, color: theme.primary, mb: 2, transition: "transform 0.2s ease" }} />
                <Typography variant="h6" sx={{ color: theme.white, fontWeight: 700, mb: 1 }}>Data Ingestion</Typography>
                <Typography variant="body2" sx={{ color: theme.textMuted }}>Securely processing legacy formats & raw streams.</Typography>
              </Box>
              <Box
                className="connector"
                sx={{
                  alignSelf: "center",
                  width: { xs: 40, md: 70 },
                  height: 2,
                  bgcolor: theme.primary,
                  opacity: 0.6,
                  borderRadius: 1,
                  position: 'relative',
                  flex: "0 0 auto",
                  display: { xs: "none", md: "block" },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    right: -8,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: 0,
                    height: 0,
                    borderLeft: `8px solid ${theme.primary}`,
                    borderTop: '4px solid transparent',
                    borderBottom: '4px solid transparent'
                  }
                }}
              >
                <Box
                  className="flow-dot"
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: 0,
                    transform: 'translateY(-50%)',
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: theme.primary,
                    animation: 'flowMove 3s linear infinite',
                    '@keyframes flowMove': {
                      '0%': { left: 0 },
                      '100%': { left: 'calc(100% - 8px)' }
                    }
                  }}
                />
              </Box>
            </Box>

            {/* Step 2 + Connector */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 2, md: 4 },
                flex: "0 0 auto",
                '&:hover .icon': { transform: 'translateY(-2px)', filter: 'brightness(1.2)' },
                '&:hover .connector': { opacity: 0.8 },
                '&:hover .flow-dot': { animationDuration: '1.5s' }
              }}
            >
              <Box sx={{ p: { xs: 3, md: 4 }, borderRadius: "20px", background: theme.overlayWhite03, border: `2px solid ${theme.primary}44`, textAlign: "center", width: { xs: "100%", sm: 260, md: 280 }, transition: "transform 0.2s ease" }}>
                <MemoryIcon className="icon" sx={{ fontSize: { xs: 54, md: 64 }, color: theme.primary, mb: 2, transition: "transform 0.2s ease" }} />
                <Typography variant="h6" sx={{ color: theme.white, fontWeight: 700, mb: 1 }}>AI Processing</Typography>
                <Typography variant="body2" sx={{ color: theme.textMuted }}>Neural networks analyze for patterns & anomalies.</Typography>
              </Box>
              <Box
                className="connector"
                sx={{
                  alignSelf: "center",
                  width: { xs: 40, md: 70 },
                  height: 2,
                  bgcolor: theme.primary,
                  opacity: 0.6,
                  borderRadius: 1,
                  position: 'relative',
                  flex: "0 0 auto",
                  display: { xs: "none", md: "block" },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    right: -8,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: 0,
                    height: 0,
                    borderLeft: `8px solid ${theme.primary}`,
                    borderTop: '4px solid transparent',
                    borderBottom: '4px solid transparent'
                  }
                }}
              >
                <Box
                  className="flow-dot"
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: 0,
                    transform: 'translateY(-50%)',
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: theme.primary,
                    animation: 'flowMove 3s linear infinite',
                    '@keyframes flowMove': {
                      '0%': { left: 0 },
                      '100%': { left: 'calc(100% - 8px)' }
                    }
                  }}
                />
              </Box>
            </Box>

            {/* Step 3 (final) */}
            <Box sx={{ p: { xs: 3, md: 4 }, borderRadius: "20px", background: theme.overlayWhite03, border: `2px solid ${theme.primary}44`, textAlign: "center", width: { xs: "100%", sm: 260, md: 280 }, transition: "transform 0.2s ease", '&:hover .icon': { transform: 'translateY(-2px)', filter: 'brightness(1.2)' } }}>
              <InsightsIcon className="icon" sx={{ fontSize: { xs: 54, md: 64 }, color: theme.primary, mb: 2, transition: "transform 0.2s ease" }} />
              <Typography variant="h6" sx={{ color: theme.white, fontWeight: 700, mb: 1 }}>Decision Support</Typography>
              <Typography variant="body2" sx={{ color: theme.textMuted }}>Real-time dashboard for evidence-based action.</Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* BLOG & INSIGHTS */}
      <Box sx={{ py: { xs: 6, md: 10 }, borderTop: `1px solid ${theme.overlayWhite08}` }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: { xs: 3, md: 7 }, px: { xs: 2, sm: 0 } }}>
            <Typography variant="overline" sx={{ color: theme.primary, fontWeight: 700, letterSpacing: 2 }}>BLOG & INSIGHTS</Typography>
            <Typography variant="h2" sx={{ fontWeight: 800, color: theme.white, mb: 2, fontSize: { xs: "2rem", md: "3rem" } }}>Insights, Guides, and Tips to <Box component="br" sx={{ display: { xs: "none", sm: "block" } }} /> Help You Grow Smarter</Typography>
            <Typography variant="body1" sx={{ color: theme.textSoft, maxWidth: "600px", mx: "auto", fontSize: { xs: "0.95rem", md: "1rem" } }}>Discover expert insights, practical guides, and actionable tips to grow intelligently</Typography>
          </Box>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(2, 1fr)" }, gap: { xs: 2, md: 3 }, maxWidth: "1200px", mx: "auto", width: "100%" }}>
            {blogPosts.map((post, index) => (
              <Box key={index} onClick={() => navigate('/blogs')} sx={{ height: "100%", display: "flex", flexDirection: "column", borderRadius: "18px", background: theme.overlayWhite02, border: `1px solid ${theme.overlayWhite08}`, overflow: "hidden", cursor: "pointer", transition: "transform 0.2s ease, border-color 0.2s ease", '&:hover': { transform: "translateY(-3px)", borderColor: theme.primary } }}>
                <Box sx={{ position: "relative", width: "100%", aspectRatio: { xs: "4 / 3", md: "16 / 9" }, overflow: "hidden" }}>
                  <Box component="img" src={post.image} alt={post.title} sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Box>
                <Stack spacing={1.5} sx={{ p: 3, flex: 1 }}>
                  <Box>
                    <Typography variant="overline" sx={{ color: theme.primary, fontWeight: 700, letterSpacing: 1, fontSize: "0.7rem" }}>INSIGHT</Typography>
                    <Typography variant="h6" sx={{ color: theme.white, fontWeight: 800, lineHeight: 1.3, mt: 0.5, fontSize: "1.25rem" }}>{post.title}</Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: theme.textSoft, lineHeight: 1.6, flex: 1, fontSize: "0.95rem" }}>{post.excerpt}</Typography>
                  <Box sx={{ pt: 1, display: "flex", alignItems: "center", gap: 1, color: theme.primary, fontWeight: 700 }}>
                    <Typography variant="button" sx={{ textTransform: "none", fontSize: "0.85rem" }}>Read Article</Typography>
                    <ArrowForwardIcon sx={{ fontSize: 16 }} />
                  </Box>
                </Stack>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}





