import { Container, Typography, Stack, Button, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: { xs: "85vh", md: "95vh" },
        display: "flex",
        alignItems: "center",
        background:
          "radial-gradient(circle at top, rgba(255,0,90,0.25), transparent 60%)",
      }}
    >
      <Box sx={{ px: { xs: 3, sm: 4, md: 8, lg: 12 }, width: "100%" }}>
        <Stack spacing={4} maxWidth={"100%"}>
          <Typography variant="h2" sx={{ fontWeight: 900, lineHeight: 1.05 }}>
            AI that works for you.
          </Typography>

          <Typography variant="h6" sx={{ color: "#b5b5b5" }}>
            Building AI/ML solutions for government organizations & large institutions
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                background: "linear-gradient(135deg, #ff1744, #d50000)",
                fontWeight: 700,
              }}
            >
              Ongoing Projects
            </Button>

            {/* <Button
              variant="outlined"
              size="large"
              sx={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}
            >
              Work with us
            </Button> */}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
