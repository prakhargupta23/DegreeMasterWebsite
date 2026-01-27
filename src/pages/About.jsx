import { Box, Typography, Stack } from "@mui/material";

export default function About() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 14 },
        width: "100%",
        display: "flex",
        justifyContent: "center",
        background: "radial-gradient(circle at top, rgba(255,0,90,0.25), transparent 60%)",
      }}
    >
      {/* Content Wrapper */}
      <Box
        sx={{
          width: "100%",
          px: { xs: 3, sm: 6, md: 8 },
        }}
      >
        <Stack spacing={4}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.6rem" },
            }}
          >
            About Us
          </Typography>

          <Typography
            sx={{
              lineHeight: 1.9,
              color: "#c7c7c7",
              fontSize: { xs: "1rem", md: "1.1rem" },
              maxWidth: "900px",
            }}
          >
            Degreemaster.ai is a mission-driven AI consulting and product company focused on building production-grade technology solutions for government organizations and large institutions. Our work spans AI/ML systems, workflow automation, document intelligence, and scalable digital platforms that directly impact public-sector efficiency and governance outcomes.
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
