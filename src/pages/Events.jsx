import { Container, Typography, Grid, Paper } from "@mui/material";

export default function Events() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
      <Typography variant="h3" sx={{ fontWeight: 800, mb: 4 }}>
        Upcoming Events
      </Typography>

      <Grid container spacing={4}>
        {[1, 2, 3].map((event) => (
          <Grid item xs={12} md={4} key={event}>
            <Paper
              sx={{
                p: 3,
                height: "100%",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 3,
              }}
            >
              <Typography variant="h6" fontWeight={700}>
                Live Concert #{event}
              </Typography>
              <Typography sx={{ color: "#b0b0b0", mt: 1 }}>
                High-energy performance with immersive sound and lighting.
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
