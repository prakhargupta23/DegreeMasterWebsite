import { AppBar, Toolbar, Typography, Box, Button, Stack, IconButton, Drawer, MenuItem, Link as MuiLink } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useTheme } from "../useTheme";
import logo from "../assets/logo.png";
// import blogPreviewImage from "../assets/blogs/blog_preview.png";

export default function Layout({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  // Check if we are on the home page for specific styling
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ensure page always scrolls to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const navLinks = [
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
  ];

  const navbarBg = scrolled || !isHome
    ? theme.navBarSolid
    : "transparent";

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: theme.bgGlow, position: "relative", overflow: "hidden" }}>
      {/* Subtle flowing data-stream background */}
      <Box
        aria-hidden="true"
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.18,
          backgroundImage: theme.flowStreamBackgroundImage,
          backgroundSize: "1200px 300px, 900px 260px, 820px 240px, 760px 220px, 700px 210px, 650px 200px",
          backgroundRepeat: "repeat",
          animation: "flowStreams 0.6s linear infinite",
          "@keyframes flowStreams": {
            "0%": { backgroundPosition: "0 0, -200px 0, -400px 0" },
            "100%": { backgroundPosition: "1200px 0, 700px 0, 300px 0" }
          },
          "@media (prefers-reduced-motion: reduce)": {
            animation: "none",
            opacity: 0.05
          }
        }}
      />
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          background: navbarBg,
          backdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "all 0.3s ease",
          borderBottom: scrolled ? `1px solid ${theme.overlayWhite10}` : "none",
          zIndex: 1000,
        }}
      >
        <Toolbar disableGutters sx={{ width: "100%", maxWidth: "1500px", mx: "auto", px: { xs: 2, md: 4 } }}>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              fontSize: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: 1
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: theme.white, display: "flex", alignItems: "center" }}>
              <Box
                component="img"
                src={logo}
                alt="DegreeMaster.ai"
                sx={{ height: 40, width: "auto", mr: 1.5, borderRadius: "4px" }}
              />
              DegreeMaster.ai
            </Link>
          </Typography>

          {/* Desktop Navigation */}
          <Stack direction="row" spacing={4} alignItems="center" sx={{ display: { xs: "none", md: "flex" } }}>
            {navLinks.map((link) => (
              <MuiLink
                key={link.label}
                component={Link}
                to={link.path}
                underline="none"
                sx={{
                  color: theme.white,
                  opacity: 0.8,
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  "&:hover": { opacity: 1, color: theme.primary }
                }}
              >
                {link.label}
              </MuiLink>
            ))}



            <Stack direction="row" spacing={2} alignItems="center">
            <Button
              component={Link}
              to="/contact"
              endIcon={<ArrowOutwardIcon fontSize="small" />}
              sx={{
                borderRadius: "30px",
                background: theme.black,
                color: theme.white,
                px: 3,
                py: 1,
                textTransform: "none",
                fontSize: "0.95rem",
                fontWeight: 600,
                border: `1px solid ${theme.overlayWhite20}`,
                "&:hover": {
                  background: theme.primary,
                  borderColor: theme.primary
                }
              }}
            >
              Get started
            </Button>
            </Stack>
          </Stack>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "flex", md: "none" }, color: theme.white }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            background: theme.navDrawerBg,
            color: theme.white,
            width: 250,
          },
        }}
      >
        <Box sx={{ pt: 4, display: "flex", flexDirection: "column" }}>
          {navLinks.map((link) => (
            <MenuItem
              key={link.label}
              component={Link}
              to={link.path}
              onClick={toggleDrawer(false)}
              sx={{ py: 2, px: 3, fontSize: "1.1rem" }}
            >
              {link.label}
            </MenuItem>
          ))}
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ width: "100%", position: "relative", zIndex: 1 }}>
        {children}
      </Box>

      {/* Footer */}
      <Box sx={{ py: { xs: 4, md: 8 }, background: theme.bgGlow, color: theme.textFooter, borderTop: `1px solid ${theme.overlayWhite08}`, position: "relative", zIndex: 1 }}>
        <Box sx={{ maxWidth: "1440px", mx: "auto", px: { xs: 4, md: 8 } }}>
          <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" spacing={8}>

            {/* Brand Column */}
            <Box>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                <Link to="/" style={{ textDecoration: "none", color: theme.white, display: "flex", alignItems: "center", gap: "8px" }}>
                  <Box
                    component="img"
                    src={logo}
                    alt="DegreeMaster.ai"
                    sx={{ height: 32, width: "auto", borderRadius: "4px" }}
                  />
                  DegreeMaster.ai
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ maxWidth: "350px", lineHeight: 1.8, opacity: 0.85, mb: 3, color: theme.textSoft }}>
                Transforming public sector operations with production-grade Artificial Intelligence.
                Built for scale, security, and impact.
              </Typography>
              {/* <Box
                component="img"
                // src={blogPreviewImage}
                alt="Blog preview"
                sx={{
                  width: "100%",
                  maxWidth: 280,
                  borderRadius: "12px",
                  border: `1px solid ${theme.overlayWhite08}`,
                  mb: 3,
                  display: "block"
                }}
              /> */}

              {/* FOLLOW Section */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                <Box sx={{ p: 1, borderRadius: "8px", bgcolor: theme.primary + "11", color: theme.primary }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: theme.textMeta, display: "block", fontSize: "0.7rem", letterSpacing: "0.5px" }}>FOLLOW</Typography>
                  <Typography
                    component="a"
                    href="https://www.linkedin.com/company/degreemaster-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: theme.white,
                      fontWeight: 500,
                      fontSize: "0.9rem",
                      textDecoration: "none",
                      transition: "color 0.2s",
                      "&:hover": { color: theme.primary }
                    }}
                  >
                    DegreeMaster AI
                  </Typography>
                </Box>
              </Box>


            </Box>

            {/* Links Columns */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 8, md: 12 }}>

              <Box>
                <Typography variant="subtitle2" sx={{ color: theme.white, fontWeight: 700, mb: 3, letterSpacing: "1px" }}>COMPANY</Typography>
                <Stack spacing={1.5}>
                  {['About', 'Contact', 'Services'].map(item => (
                    <Link
                      key={item}
                      to={item === 'Services' ? "/services" : `/${item.toLowerCase()}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <Typography
                        sx={{
                          fontSize: "0.9rem",
                          color: theme.textSoft,
                          transition: "color 0.2s",
                          "&:hover": { color: theme.primary }
                        }}
                      >
                        {item}
                      </Typography>
                    </Link>
                  ))}
                </Stack>
              </Box>

            </Stack>
          </Stack>

          <Box sx={{ borderTop: `2px solid ${theme.overlayWhite08}`, mt: 4, pt: 3, display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: "center", gap: 2 }}>
            <Typography variant="body2" sx={{ fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.02em", color: theme.textLight, opacity: 0.85 }}>
              © {new Date().getFullYear()} DegreeMaster Technologies Pvt. Ltd 
            </Typography>
            <Stack direction="row" spacing={3}>
              {['Privacy Policy', 'Terms of Service'].map((text) => (
                <Typography
                  key={text}
                  variant="body2"
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    color: theme.textLight,
                    opacity: 0.7,
                    transition: "all 0.2s ease",
                    "&:hover": { opacity: 1, color: theme.primary }
                  }}
                >
                  {text}
                </Typography>
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>

    </Box>
  );
}









