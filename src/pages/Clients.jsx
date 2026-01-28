import { Box, Typography, Stack } from "@mui/material";

export default function Clients() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 14 },
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
              fontSize: { xs: "1.6rem", md: "2.6rem" },
            }}
          >
            Our Work & Clients
          </Typography>

          <Typography
            sx={{
              lineHeight: 1.9,
              color: "#c7c7c7",
              fontSize: { xs: "1rem", md: "1.1rem" },
              maxWidth: "900px",
            }}
          >
            We have designed and delivered AI driven systems for government organizations, including:<br/><br/>
            <strong>North Western Railway (NWR)</strong>
            <ul>
              <li><strong>AI Pension Portal:</strong> An intelligent pension management system to improve accuracy, reduce discrepancies, and streamline pension workflows</li>
              <li><strong>PFA Dashboard:</strong> A data driven financial analytics dashboard for enhanced visibility and control</li>
              <li><strong>AI Expenditure Agent:</strong> An AI powered system for monitoring, analyzing, and flagging expenditure patterns and anomalies</li>
            </ul>
            These platforms demonstrate our ability to build mission critical, production grade AI systems within government environments.
          </Typography>

          
        </Stack>
      </Box>
    </Box>
  );
}
