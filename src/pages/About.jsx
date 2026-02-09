import {
  Box,
  Typography,
  Stack,
  Container,
  Grid,
  Paper
} from "@mui/material";
import StorageIcon from '@mui/icons-material/Storage';
import MemoryIcon from '@mui/icons-material/Memory';
import InsightsIcon from '@mui/icons-material/Insights';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from "../useTheme";
import kushSir from "../assets/kush_sir_founder.png";
import manishSir from "../assets/manish_sir_founder.png";
import outcomeFirst from "../assets/philosophy/outcome-first.png";
import productionOver from "../assets/philosophy/production.png";
import domainAware from "../assets/philosophy/domain-aware.png";
import responsibleEthical from "../assets/philosophy/responsibe-ethical.png";
import improveOperational from "../assets/mission/improve-operational.png";
import reduceHumanErrors from "../assets/mission/reduce-humanerros.png";
import enhanceTransparency from "../assets/mission/enhance-transparency.png";
import dataBackend from "../assets/mission/data-backend.png";
import improveCitizen from "../assets/mission/improve-citizen.png";

export default function About() {
  const { theme } = useTheme();
  const contentMaxWidth = "1200px";

  return (
    <Box
      sx={{
        pt: { xs: 8, md: 14 },
        pb: { xs: 8, md: 14 },
        width: "100%",
        minHeight: "100vh",
        background: theme.bgGlow,
        backgroundSize: "cover",
        transition: "background 0.5s ease",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Background minimization: removed floating particles and orbs */}

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* HERO SECTION - WHO WE ARE */}
        <Box sx={{ mb: { xs: 8, md: 12 }, textAlign: "center", position: "relative" }}>
            <Typography
              variant="overline"
              sx={{
                color: theme.primary,
                fontWeight: 700,
                letterSpacing: 4,
                fontSize: "0.95rem"
              }}
            >
              ABOUT US
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 4,
                color: theme.white,
                fontSize: { xs: "2.5rem", md: "4rem" }
              }}
            >
              Who We Are
            </Typography>

            <Box sx={{
              maxWidth: contentMaxWidth,
              mx: "auto",
              width: "100%",
              p: { xs: 2.5, md: 4.5 },
              borderRadius: "20px",
              background: theme.overlayWhite02,
              backdropFilter: "blur(10px)",
              border: `1px solid ${theme.overlayWhite05}`,
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background: `linear-gradient(90deg, transparent, ${theme.primary}20, transparent)`,
                animation: "slide 3s infinite",
                "@keyframes slide": {
                  "0%": { left: "-100%" },
                  "100%": { left: "100%" }
                }
              }
            }}>
              <Typography variant="body1" sx={{ color: theme.white, fontSize: { xs: "1.05rem", md: "1.2rem" }, lineHeight: 1.75, mb: 3, fontWeight: 500 }}>
                DegreeMaster.ai was founded with a clear purpose: to bridge the gap between advanced AI capabilities and the practical realities of government technology.
              </Typography>
              <Typography variant="body1" sx={{ color: theme.textMutedSoft, fontSize: { xs: "0.98rem", md: "1.08rem" }, lineHeight: 1.7, mb: 3 }}>
                While much of the AI ecosystem focuses on prototypes and proofs of concept, public sector organizations require robust, auditable, scalable, and secure systems that work under real constraintsâ€”legacy data, regulatory frameworks, and mission critical operations.
              </Typography>
              <Typography variant="body1" sx={{ color: theme.textMuted, fontSize: { xs: "0.95rem", md: "1.02rem" }, lineHeight: 1.7 }}>
                Our team comprises IIT and IIM alumni, experienced engineers, data scientists, and product leaders who have built and scaled technology platforms across education, fintech, analytics, and enterprise systems. We bring this execution mindset to government AI.
              </Typography>
            </Box>

            {/* 3D Abstract Visualization */}
            {/*  */}
          </Box>




        {/* MISSION & VISION GRID */}
        <Box sx={{ maxWidth: contentMaxWidth, mx: "auto", width: "100%" }}>
          <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: { xs: 8, md: 12 }, justifyContent: "center", alignItems: "stretch" }}>
            <Grid item xs={12} md={12}>
              <Box sx={{
                p: { xs: 3, md: 4.5 },
                height: "100%",
                borderRadius: "24px",
                background: theme.overlayWhite03,
                border: `1px solid ${theme.overlayWhite10}`,
                position: "relative",
                overflow: "hidden",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "box-shadow 0.3s ease",
                width: "100%"
              }}>
                <Typography variant="h4" sx={{ fontWeight: 800, color: theme.white, mb: 3, position: "relative", zIndex: 1 }}>
                  Our Mission
                </Typography>
                <Typography variant="body1" sx={{ color: theme.textMutedSoft, mb: 3, lineHeight: 1.7, position: "relative", zIndex: 1 }}>
                  To work closely with public sector organizations and build AI driven platforms that:
                </Typography>
                {/* Mission cards grid - no internal scroll */}
                <Box sx={{
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  display: "grid",
                  gap: { xs: 2, md: 2.5 },
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                    lg: "repeat(5, 1fr)"
                  }
                }}>
                  {[
                    {  desc: "Improve operational efficiency", icon: improveOperational },
                    {  desc: "Reduce human errors and leakages", icon: reduceHumanErrors },
                    {  desc: "Enhance transparency and accountability", icon: enhanceTransparency },
                    {  desc: "Enable data backed decision making", icon: dataBackend },
                    {  desc: "Ultimately improve citizen outcomes", icon: improveCitizen }
                  ].map((item, idx) => (
                    <Paper key={idx} sx={{
                      p: { xs: 2, md: 2.25 },
                      borderRadius: "20px",
                      bgcolor: theme.surfaceLight,
                      color: theme.textDark,
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      boxShadow: `0 20px 40px -20px ${theme.primary}33`,
                      border: `1px solid ${theme.borderLight}`,
                      transition: "transform 0.15s ease, box-shadow 0.15s ease",
                      '&:hover': { transform: 'translateY(-2px)', boxShadow: `0 30px 50px -20px ${theme.primary}44` }
                    }}>
                      <Box
                        component="img"
                        src={item.icon}
                        alt={item.desc}
                        sx={{
                          width: 56,
                          height: 56,
                          mb: 1.5,
                          objectFit: "cover",
                          borderRadius: "50%"
                        }}
                      />
                      <Typography variant="body2" sx={{ color: theme.textDarkMuted, fontWeight: 600 }}>{item.desc}</Typography>
                    </Paper>
                  ))}
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.white,
                    mt: 3,
                    fontStyle: "italic",
                    opacity: 0.9,
                    p: 2,
                    textAlign: "center",
                    background: `${theme.primary}1A`,
                    borderRadius: "8px",
                    position: "relative",
                    zIndex: 1,
                    borderTop: `2px solid ${theme.primary}2A`,
                    borderBottom: `2px solid ${theme.primary}2A`
                  }}
                >
                  "We believe AI, when designed responsibly and deployed correctly, can be a game changer for governance in India."
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={12}>
              <Box sx={{
                p: { xs: 3, md: 4.5 },
                height: "100%",
                borderRadius: "24px",
                background: theme.overlayWhite03,
                border: `1px solid ${theme.overlayWhite10}`,
                position: "relative",
                overflow: "hidden",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "box-shadow 0.3s ease"
              }}>
                <Typography variant="h4" sx={{ fontWeight: 800, color: theme.white, mb: 3, position: "relative", zIndex: 1 }}>
                  Our Vision
                </Typography>
                <Typography variant="body1" sx={{ color: theme.textMutedSoft, lineHeight: 1.8, fontSize: "1.1rem", mb: 4, position: "relative", zIndex: 1 }}>
                  To become a trusted AI transformation partner for governments and institutions across India, helping them harness technology to deliver better outcomes for citizens.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.white,
                    lineHeight: 1.8,
                    fontWeight: 500,
                    p: 2.5,
                    borderRadius: "12px",
                    background: theme.overlayWhite04,
                    border: `1px solid ${theme.secondary}40`,
                    position: "relative",
                    zIndex: 1
                  }}
                >
                  At DegreeMaster.ai, we are building the future of AI powered governanceâ€”responsibly, securely, and at scale.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* TECH FLOW VISUALIZATION */}
        <Box sx={{ mb: { xs: 8, md: 14 }, position: "relative", maxWidth: contentMaxWidth, mx: "auto", width: "100%" }}>
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

          <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 2, md: 4 },
            flexWrap: { xs: "wrap", md: "nowrap" }
          }}>
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
              <Paper sx={{
                p: { xs: 3, md: 4 },
                borderRadius: "20px",
                bgcolor: theme.overlayWhite03,
                border: `2px solid ${theme.primary}44`,
                textAlign: "center",
                position: "relative",
                width: { xs: "100%", sm: 260, md: 280 },
                flex: "0 0 auto",
                transition: 'transform 0.2s ease'
              }}>
                <StorageIcon
                  className="icon"
                  sx={{ fontSize: { xs: 54, md: 64 }, color: theme.primary, mb: 2, transition: 'transform 0.2s ease' }}
                />
                <Typography variant="h6" sx={{ color: theme.white, fontWeight: 700, mb: 1 }}>Data Ingestion</Typography>
                <Typography variant="body2" sx={{ color: theme.textMuted }}>Securely processing legacy formats & raw streams.</Typography>
              </Paper>

              {/* Animated Connector */}
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
              <Paper sx={{
                p: { xs: 3, md: 4 },
                borderRadius: "20px",
                bgcolor: theme.overlayWhite03,
                border: `2px solid ${theme.primary}44`,
                textAlign: "center",
                position: "relative",
                width: { xs: "100%", sm: 260, md: 280 },
                flex: "0 0 auto",
                transition: 'transform 0.2s ease'
              }}>
                <MemoryIcon
                  className="icon"
                  sx={{ fontSize: { xs: 54, md: 64 }, color: theme.primary, mb: 2, transition: 'transform 0.2s ease' }}
                />
                <Typography variant="h6" sx={{ color: theme.white, fontWeight: 700, mb: 1 }}>AI Processing</Typography>
                <Typography variant="body2" sx={{ color: theme.textMuted }}>Neural networks analyze for patterns & anomalies.</Typography>
              </Paper>

              {/* Animated Connector */}
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
            <Paper sx={{
              p: { xs: 3, md: 4 },
              borderRadius: "20px",
              bgcolor: theme.overlayWhite03,
              border: `2px solid ${theme.primary}44`,
              textAlign: "center",
              position: "relative",
              width: { xs: "100%", sm: 260, md: 280 },
              flex: "0 0 auto",
              transition: 'transform 0.2s ease',
              '&:hover .icon': { transform: 'translateY(-2px)', filter: 'brightness(1.2)' }
            }}>
              <InsightsIcon
                className="icon"
                sx={{ fontSize: { xs: 54, md: 64 }, color: theme.primary, mb: 2, transition: 'transform 0.2s ease' }}
              />
              <Typography variant="h6" sx={{ color: theme.white, fontWeight: 700, mb: 1 }}>Decision Support</Typography>
              <Typography variant="body2" sx={{ color: theme.textMuted }}>Real-time dashboard for evidence-based action.</Typography>
            </Paper>
          </Box>
        </Box>

        {/* PHILOSOPHY - Single Row Cards */}
        <Box sx={{ mb: { xs: 6, md: 10 }, maxWidth: contentMaxWidth, mx: "auto", width: "100%" }}>
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                color: theme.white,
                mb: 4,
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -8,
                  left: "30%",
                  width: "40%",
                  height: "3px",
                  background: `linear-gradient(90deg, transparent, ${theme.primary}, transparent)`,
                  borderRadius: "2px"
                }
              }}
            >
              Our Philosophy
            </Typography>
          </Box>

          <Grid
            container
            spacing={{ xs: 2, md: 1.5 }}
            justifyContent="center"
            alignItems="stretch"
          >
            {[
              {
                title: "Outcome First",
                desc: "Technology must deliver measurable impact.",
                icon: outcomeFirst
              },
              {
                title: `Production over Experimentation`,
                desc: "Systems must run reliably at scale.",
                icon: productionOver
              },
              {
                title: "Domain-aware AI",
                desc: "Models must understand real workflows.",
                icon: domainAware
              },
              {
                title: "Responsible & Ethical AI",
                desc: "Accuracy, auditability, and trust matter.",
                icon: responsibleEthical
              }
            ].map((item, idx) => (
              <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={idx} sx={{ minWidth: 0 }}>
                <Paper sx={{
                  p: { xs: 1.5, md: 1.5 },
                  height: "100%",
                  borderRadius: "20px",
                  bgcolor: theme.surfaceLight,
                  color: theme.textDark,
                  boxShadow: `0 20px 40px -20px ${theme.primary}33`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  border: `1px solid ${theme.borderLight}`,
                  width: "100%",
                  maxWidth: "100%",
                  mx: "auto",
                  transition: "transform 0.15s ease, box-shadow 0.15s ease",
                  '&:hover': { transform: 'translateY(-2px)', boxShadow: `0 30px 50px -20px ${theme.primary}44` }
                }}>
                  <Box
                    component="img"
                    src={item.icon}
                    alt={item.title}
                    sx={{
                      width: 56,
                      height: 56,
                      mb: 0.5,
                      objectFit: "cover",
                      borderRadius: "50%"
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      mb: 0.4,
                      fontSize: { xs: "0.9rem", md: "0.84rem", lg: "0.92rem" },
                      lineHeight: 1.2,
                      whiteSpace: { xs: "normal", md: "nowrap" }
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.textDarkMuted,
                      fontSize: { xs: "0.78rem", md: "0.76rem", lg: "0.8rem" },
                      lineHeight: 1.25,
                      whiteSpace: { xs: "normal", md: "nowrap" }
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* FOUNDER INSIGHTS SECTION */}
      <Box sx={{ py: { xs: 8, sm: 12, md: 14 }, background: theme.bgGlow, position: "relative", mt: { xs: 8, md: 12 }, borderTop: `1px solid ${theme.overlayWhite08}` }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}>
            <Typography variant="overline" sx={{ color: theme.primary, fontWeight: 700, letterSpacing: 2 }}>
              FOUNDER INSIGHTS
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 800, color: theme.white, mb: 2, fontSize: { xs: "2rem", sm: "2.5rem", md: "3.25rem" } }}>
              The Visionaries Behind <br /> DegreeMaster.ai
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 5, md: 14 }} justifyContent="center">
            {/* FOUNDER 1: KUSH BEEJAL */}
            <Grid item xs={12} sm={6} md={5}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "left",
                  height: "100%",
                  mx: "auto",
                  maxWidth: { xs: 320, sm: 360, md: 400 }
                }}
              >
                <Box
                  sx={{
                    width: { xs: 200, sm: 240, md: 280 },
                    height: { xs: 200, sm: 240, md: 280 },
                    bgcolor: theme.blackSolid,
                    borderRadius: "50%",
                    border: `2px solid ${theme.primary}`,
                    overflow: "hidden",
                    mb: { xs: 5, md: 6 },
                    transition: "transform 0.4s ease",
                    mx: "auto",
                    "&:hover": { transform: "translateY(-5px)" }
                  }}
                >
                  <Box
                    component="img"
                    src={kushSir}
                    alt="Kush Beejal"
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    width: { xs: 200, sm: 240, md: 280 },
                    fontWeight: 800,
                    color: theme.white,
                    mb: 0.5,
                    fontSize: "1.75rem",
                    textAlign: "center"
                  }}
                >
                  Kush Beejal
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    width: { xs: 200, sm: 240, md: 280 },
                    color: theme.textMutedMid,
                    fontWeight: 500,
                    mb: 2,
                    fontSize: "1rem",
                    textAlign: "center"
                  }}
                >
                  Founder & CEO
                </Typography>
                <Typography variant="body1" sx={{ width: "100%", color: theme.textFooter, lineHeight: 1.6, fontSize: "0.95rem", pl: { xs: 0.5, md: 1 }, textAlign: "justify", hyphens: "auto" }}>
                  Degreemaster.ai is my 3rd startup having previously built NeoStencil, a successful and profitable edtech platform acquired by Indiaâ€™s leading edtech company Unacademy in 2020 & StoxHero, a financial education platform using AI/ML to provide quality insights & better learning experience around financial markets. As VP, Business at Unacademy, I launched new business segments. In earlier roles, I worked as a Derivatives Trader for a leading prop-trading desk for 2.5 years. I hold degrees from IIT Bombay & IIM Calcutta.
                </Typography>
              </Box>
            </Grid>

            {/* FOUNDER 2: MANISH NAIR */}
            <Grid item xs={12} sm={6} md={5}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "left",
                  height: "100%",
                  mx: "auto",
                  maxWidth: { xs: 320, sm: 360, md: 400 }
                }}
              >
                <Box
                  sx={{
                    width: { xs: 200, sm: 240, md: 280 },
                    height: { xs: 200, sm: 240, md: 280 },
                    borderRadius: "50%",
                    border: `2px solid ${theme.primary}`,
                    bgcolor: theme.blackSolid,
                    overflow: "hidden",
                    mb: { xs: 5, md: 6 },
                    transition: "transform 0.4s ease",
                    mx: "auto",
                    "&:hover": { transform: "translateY(-5px)" }
                  }}
                >
                  <Box
                    component="img"
                    src={manishSir}
                    alt="Manish Nair"
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    width: { xs: 200, sm: 240, md: 280 },
                    fontWeight: 800,
                    color: theme.white,
                    mb: 0.5,
                    fontSize: "1.75rem",
                    textAlign: "center"
                  }}
                >
                  Manish Nair
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    width: { xs: 200, sm: 240, md: 280 },
                    color: theme.textMutedMid,
                    fontWeight: 500,
                    mb: 2,
                    fontSize: "1rem",
                    textAlign: "center"
                  }}
                >
                  Co-Founder
                </Typography>
                <Typography variant="body1" sx={{ width: "100%", color: theme.textFooter, lineHeight: 1.6, fontSize: "0.95rem", pl: { xs: 0.5, md: 1 }, textAlign: "justify", hyphens: "auto" }}>
                 Degreemaster.ai is my 3rd startup. Previously I have built StoxHero, an advanced AI/ML-powered live trading simulator focused on stock market education & Vegavruddhi, a multi-domain solutions company specializing in AI/ML-based technology products & large-scale ground operations. With a decade of startup leadership, I bring expertise in business development, operations, and strategy. I have worked across online advertising, marketplaces, & EdTech, collaborating with organizations such as IndiaMART, OLA, NeoStencil, & Unacademy
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}



