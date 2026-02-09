import {
  Box,
  Typography,
  Grid,
  Stack,
  Link,
  Container,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useTheme } from "../useTheme";

export default function Contact() {
  const { theme } = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: theme.bgGlow,
        backgroundSize: "cover",
        transition: "background 0.5s ease",
        py: 12
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">

          {/* Left Side: Info */}
          <Grid item xs={12} md={5}>
            <Typography
              variant="overline"
              sx={{ color: theme.primary, fontWeight: 700, letterSpacing: 2 }}
            >
              GET IN TOUCH
            </Typography>
            <Typography variant="h2" sx={{ color: theme.white, fontWeight: 800, mb: 4, lineHeight: 1.1 }}>
              Let's Build the <br /> Future Together
            </Typography>
            <Typography variant="body1" sx={{ color: theme.textMutedSoft, mb: 6, lineHeight: 1.8 }}>
              Ready to transform your government operations with production-grade AI?
              Our team of experts is here to guide you through every step.
            </Typography>

            <Stack spacing={4}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                <Box sx={{ p: 1.5, borderRadius: "12px", bgcolor: theme.overlayWhite05, color: theme.primary }}>
                  <EmailIcon />
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: theme.textDim, display: "block" }}>EMAIL US</Typography>
                  <Link href="mailto:contact@degreemaster.ai" underline="hover" sx={{ color: theme.white, fontWeight: 500 }}>
                    kush@degreemaster.ai
                  </Link>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                <Box sx={{ p: 1.5, borderRadius: "12px", bgcolor: theme.overlayWhite05, color: theme.primary }}>
                  <PhoneIcon />
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: theme.textDim, display: "block" }}>CALL US</Typography>
                  <Typography sx={{ color: theme.white, fontWeight: 500 }}>+91 9958709191</Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                <Box sx={{ p: 1.5, borderRadius: "12px", bgcolor: theme.overlayWhite05, color: theme.primary }}>
                  <LinkedInIcon />
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: theme.textDim, display: "block" }}>FOLLOW</Typography>
                  <Link
                    href="https://www.linkedin.com/company/degreemaster-ai"
                    target="_blank"
                    underline="hover"
                    sx={{ color: theme.white, fontWeight: 500 }}
                  >
                    DegreeMaster AI
                  </Link>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "start", gap: 3 }}>
                <Box sx={{ p: 1.5, borderRadius: "12px", bgcolor: theme.overlayWhite05, color: theme.primary }}>
                  <LocationOnIcon />
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: theme.textDim, display: "block" }}>VISIT US</Typography>
                  <Typography sx={{ color: theme.white, fontWeight: 500, fontSize: "0.9rem" }}>
                    RAW Coworking, Plot no. 8, Govind Marg,<br />
                    Malviya Nagar, Jaipur, Rajasthan 302017
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}



