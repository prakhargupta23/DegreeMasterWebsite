import { AppBar, Toolbar, Typography, Box, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <Box
        sx={{
            minHeight: "100vh",
            width: "100vw",          // 🔥 THIS IS KEY
            maxWidth: "100vw",
            background: "#000", // no dark bg
            color: "#e6e6e6",
            fontFamily: "Inter, system-ui",
            overflowX: "hidden",     // prevent horizontal bleed
        }}
    >

      <AppBar
        position="sticky"
        elevation={0}
        sx={{
            background: "rgba(2,3,10,0.85)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
        >
        <Toolbar disableGutters sx={{ width: "100%" }}>
            {/* INNER CONTAINER */}
            <Box
            sx={{
                width: "100%",
                maxWidth: 1280,
                mx: "auto",
                px: { xs: 3, sm: 4, md: 8, lg: 12 },
                display: "flex",
                alignItems: "center",
            }}
            >
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 800 }}>
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                Degreemaster AI
                </Link>
            </Typography>

            <Stack direction="row" spacing={2} alignItems="center">
                <Button component={Link} to="/about" color="inherit">
                About
                </Button>

                <Button
                component={Link}
                to="/contact"
                sx={{
                    border: "1px solid rgba(255,255,255,0.25)",
                    px: 3,
                    whiteSpace: "nowrap", // 🔒 prevents wrap
                }}
                >
                Contact
                </Button>
            </Stack>
            </Box>
        </Toolbar>
        </AppBar>


      {/* PAGE CONTENT */}
        <Box
        sx={{
            width: "100%",
            mx: "auto",
            px: { xs: 3, sm: 4, md: 8, lg: 12 },
        }}
        >
        {children}
        </Box>


      <Box
        sx={{
          py: 4,
          mt: 8,
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Typography variant="body2" sx={{ color: "#9e9e9e" }}>
          © {new Date().getFullYear()} Degreemaster Live · Concerts · Experiences
        </Typography>
      </Box>
    </Box>
  );
}
