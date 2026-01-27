import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Stack,
  Link,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Contact() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 14 },
        maxWidth: "90vw",
        display: "flex",
        alignItems: "center",
        background:
          "radial-gradient(circle at top, rgba(255,0,90,0.25), transparent 60%)",
      }}
    >
      {/* PAGE WIDTH WRAPPER */}
      <Box
        sx={{
          width: "80%",
          maxWidth: 1280,
          px: { xs: 3, sm: 4, md: 8, lg: 12 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            mb: 8,
            textAlign: "center",
            fontSize: { xs: "2rem", md: "2.6rem" },
          }}
        >
          Contact Us
        </Typography>

        {/* <Typography
          sx={{
            mb: 4,
            textAlign: "center",
            color: "#b0b0b0",
            fontSize: { xs: "1rem", md: "1.1rem" },
          }}
        >
          Booking inquiries, collaborations, or partnerships.
        </Typography> */}

        {/* MAIN GRID */}
        <Grid container spacing={6} justifyContent="center">
          {/* LEFT: CONTACT INFO */}
          <Grid item xs={12} md={12}>
            <Stack spacing={4}>
              {/* <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Get in touch
              </Typography> */}

              <Stack direction="row" spacing={4} alignItems="center">
                <EmailIcon />
                <Link
                  href="mailto:contact@degreemaster.ai"
                  underline="none"
                  color="inherit"
                >
                  kush@degreemaster.ai
                </Link>
              </Stack>

              <Stack direction="row" spacing={4} alignItems="center">
                <PhoneIcon />
                <Typography>+91 9958709191</Typography>
              </Stack>

              <Stack direction="row" spacing={2} alignItems="center">
                <LinkedInIcon />
                <Link
                  href="https://www.linkedin.com/company/degreemaster-ai"
                  target="_blank"
                  underline="none"
                  color="inherit"
                >
                  linkedin.com/company/degreemaster-ai
                </Link>
              </Stack>

              <Stack direction="row" spacing={2} alignItems="flex-start">
                <LocationOnIcon />
                <Typography>
                  RAW Coworking and Office Space<br/>
                  Plot no. 8, Govind Marg, Block-B, Malviya Nagar, Jaipur, Rajasthan 302017, India
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          {/* RIGHT: FORM */}
          {/* <Grid item xs={12} md={6}>
            <Paper
              sx={{
                width: "100%",
                maxWidth: 560,
                p: { xs: 3, md: 4 },
                mx: "auto",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid #ffffff",
                borderRadius: 3,
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Name" variant="outlined" />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Email" variant="outlined" />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    fullWidth
                    size="large"
                    variant="contained"
                    sx={{
                      py: 1.4,
                      fontWeight: 700,
                      background:
                        "linear-gradient(135deg, #ff1744, #d50000)",
                    }}
                  >
                    Send message
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid> */}
        </Grid>
      </Box>
    </Box>
  );
}
