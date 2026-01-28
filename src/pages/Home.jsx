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
      }}
    >
      <Box sx={{ px: { xs: 3, md: 8, }, width: "100%", mt: {xs: "15vh",mt: "30vh"} }}>
        <Stack spacing={4} maxWidth={"100%"}>
          <Typography variant="h2" sx={{ fontWeight: 800, lineHeight: 1.05, fontSize: { xs: "2rem", md: "3rem" } }}>
            <br/>Building Production Grade AI for Government & Institutions<br/>
          </Typography>

          <Typography variant="h6" sx={{ color: "#b5b5b5",fontSize: { xs: "1rem", md: "1.1rem" } }}>
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
