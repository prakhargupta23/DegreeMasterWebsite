import { AppBar, Toolbar, Typography, Box, Button, Stack, IconButton, Drawer, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Layout({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const navLinks = [
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Clients", path: "/clients" },
    { label: "Contact", path: "/contact" },
  ];

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
            backgroundImage:
          "radial-gradient(circle at top, rgba(255,0,90,0.25), transparent 60%)",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
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

            {/* Desktop Navigation */}
            <Stack direction="row" spacing={2} alignItems="center" sx={{ display: { xs: "none", md: "flex" } }}>
                <Button component={Link} to="/about" color="inherit">
                About
                </Button>
                <Button component={Link} to="/services" color="inherit">
                Services
                </Button>
                <Button component={Link} to="/clients" color="inherit">
                Clients
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

            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            background: "rgba(2,3,10,0.95)",
            backdropFilter: "blur(12px)",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
          },
        }}
      >
        <Box
          sx={{
            width: 250,
            pt: 2,
          }}
        >
          {navLinks.map((link) => (
            <MenuItem
              key={link.path}
              component={Link}
              to={link.path}
              onClick={toggleDrawer(false)}
              sx={{
                color: "#e6e6e6",
                py: 1.5,
                px: 3,
              }}
            >
              {link.label}
            </MenuItem>
          ))}
        </Box>
      </Drawer>

      {/* PAGE CONTENT */}
        <Box
        sx={{
            width: { xs: "80%", md: "80%" },
            minHeight: "100vh",
            mx: "auto",
            px: { xs: 3, sm: 4, md: 8, lg: 12 },
            pr: { xs: 5 },
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
          © {new Date().getFullYear()} Degreemaster Technologies Pvt. Ltd.
        </Typography>
      </Box>
    </Box>
  );
}
