import { Container, Typography, Stack, Button, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <Box
      sx={{
        minHeight: { xs: "85vh", md: "95vh" },
        display: "flex",
        alignItems: "center",
        // background:
        //   "radial-gradient(circle at top, rgba(255,0,90,0.25), transparent 60%)",
      }}
    >
      <Box sx={{ px: { xs: 3, sm: 4, md: 8, lg: 12 }, width: "100%", mt: "15vh" }}>
        <Stack spacing={4} maxWidth={"80%"}>
          <Typography variant="h2" sx={{ fontWeight: 900, lineHeight: 1.05 }}>
            Building Production Grade AI for Government & Institutions
          </Typography>

          <Typography variant="h6" sx={{ color: "#b5b5b5" }}>
            DegreeMaster.ai is a mission driven AI consulting and product company focused on designing and deploying production ready technology solutions for government organizations and large institutions. We work at the intersection of artificial intelligence, data engineering, and real world public sector workflows—where outcomes matter more than experiments.<br/><br/>
Our solutions help government departments improve operational efficiency, reduce errors, enhance transparency, and make better data driven decisions at scale. From AI powered pension systems and expenditure intelligence to workflow automation and document intelligence platforms, we build technology that directly impacts governance outcomes and citizen services.<br/><br/>
Founded by IIT/IIM alumni and serial entrepreneurs, DegreeMaster.ai brings deep experience in building scalable products, navigating complex stakeholder environments, and delivering systems that function reliably in real world government settings.

          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              component={Link}
              to="/services"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                background: "linear-gradient(135deg, #ff1744, #d50000)",
                fontWeight: 700,
              }}
            >
              Our Services
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
