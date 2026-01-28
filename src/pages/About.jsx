import { Box, Typography, Stack } from "@mui/material";

export default function About() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 14 },
        width: "100%",
        display: "flex",
        justifyContent: "center",
        //background: "radial-gradient(circle at top, rgba(255,0,90,0.25), transparent 60%)",
      }}
    >
      {/* Content Wrapper */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 1280,
          pt: "10vh",
          px: { xs: 3, sm: 4, md: 8, lg: 12 },
        }}
      >
        <Stack spacing={4}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.6rem" },
            }}
          >
            Who We Are
          </Typography>
          {/* <Typography variant="h4" sx={{ color: "#b5b5b5" }}>Who We Are</Typography> */}

          <Typography
            sx={{
              lineHeight: 1.9,
              color: "#c7c7c7",
              fontSize: { xs: "1rem", md: "1.1rem" },
              maxWidth: "900px",
            }}
          >
            DegreeMaster.ai was founded with a clear purpose: to bridge the gap between advanced AI capabilities and the practical realities of government technology.<br/><br/>
While much of the AI ecosystem focuses on prototypes and proofs of concept, public sector organizations require robust, auditable, scalable, and secure systems that work under real constraints—legacy data, regulatory frameworks, and mission critical operations.<br/><br/>
Our team comprises IIT and IIM alumni, experienced engineers, data scientists, and product leaders who have built and scaled technology platforms across education, fintech, analytics, and enterprise systems. We bring this execution mindset to government AI.


          </Typography>

          
        </Stack>

        <Stack spacing={4} sx={{mt: "10vh"}}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.6rem" },
            }}
          >
            Our Mission
          </Typography>
          {/* <Typography variant="h4" sx={{ color: "#b5b5b5" }}>Who We Are</Typography> */}

          <Typography
            sx={{
              lineHeight: 1.9,
              color: "#c7c7c7",
              fontSize: { xs: "1rem", md: "1.1rem" },
              maxWidth: "900px",
            }}
          >
            To work closely with public sector organizations and build AI driven platforms that:
            <ul>
              <li>Improve operational efficiency</li>
              <li>Reduce human errors and leakages</li>
              <li>Enhance transparency and accountability</li>
              <li>Enable data backed decision making</li>
              <li>Ultimately improve citizen outcomes</li>
            </ul>

We believe AI, when designed responsibly and deployed correctly, can be a game changer for governance in India.



          </Typography>

          
        </Stack>

        <Stack spacing={4} sx={{mt: "10vh"}}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.6rem" },
            }}
          >
            Our Philosophy
          </Typography>

          <Typography
            sx={{
              lineHeight: 1.9,
              color: "#c7c7c7",
              fontSize: { xs: "1rem", md: "1.1rem" },
              maxWidth: "900px",
            }}
          >
            <ul>
              <li>Outcome first approach: Technology must deliver measurable impact</li>
              <li>Production over experimentation: Systems must run reliably at scale</li>
              <li>Domain aware AI: Models must understand real world workflows</li>
              <li>Responsible & ethical AI: Accuracy, auditability, and trust matter</li>
            </ul>
          </Typography>

          
        </Stack>

        <Stack spacing={4} sx={{mt: "10vh"}}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.6rem" },
            }}
          >
            Why DegreeMaster.ai
          </Typography>

          <Typography
            sx={{
              lineHeight: 1.9,
              color: "#c7c7c7",
              fontSize: { xs: "1rem", md: "1.1rem" },
              maxWidth: "900px",
            }}
          >
            <ul>
              <li>Deep understanding of government workflows</li>
              <li>Proven experience in building scalable AI platforms</li>
              <li>Strong execution focus led by IIT/IIM founders</li>
              <li>Emphasis on accuracy, reliability, and trust</li>
              <li>Commitment to long term public sector impact</li>
            </ul>
          </Typography>

          
        </Stack>

        <Stack spacing={4} sx={{mt: "10vh"}}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.6rem" },
            }}
          >
            Our Vision
          </Typography>

          <Typography
            sx={{
              lineHeight: 1.9,
              color: "#c7c7c7",
              fontSize: { xs: "1rem", md: "1.1rem" },
              maxWidth: "900px",
            }}
          >
            To become a trusted AI transformation partner for governments and institutions across India, helping them harness technology to deliver better outcomes for citizens.<br/><br/>
            At DegreeMaster.ai, we are building the future of AI powered governance—responsibly, securely, and at scale.
          </Typography>

          
        </Stack>
      </Box>
    </Box>
  );
}
