import { useEffect, useRef, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function Header({ onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [themeMode, setThemeMode] = useState('light');
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(window.scrollY);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const links = [
    {
      category: 'Services',
      items: [
        { label: 'Graffiti Removal', href: '/graffiti-removal' },
        { label: 'Glass Restoration', href: '/glass-restoration' },
        { label: 'Anti-Graffiti', href: '/anti-graffiti' },
        { label: 'Exterior Cleaning', href: '/exterior-cleaning' },
        { label: 'Window Film Removal', href: '/window-film-removal' },
        { label: 'Window Cleaning', href: '/window-cleaning' },
      ],
    },
    {
      category: 'Information',
      items: [
        { label: 'About', href: '/about' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Blog', href: '/blog' },
        { label: 'FAQ', href: '/faq' },
      ],
    },
    {
      category: 'Contact',
      items: [
        { label: 'Contact Form', href: '/contact' },
        { label: 'Call', href: 'tel:484-779-9515' },
        { label: 'Email', href: 'mailto:info@rgrpowerwashing.com' },
      ],
    },
  ];

  const handleCategoryToggle = (category, target) => {
    if (openCategory === category) {
      setOpenCategory(null);
      setAnchorEl(null);
    } else {
      setOpenCategory(category);
      setAnchorEl(target);
    }
  };

  const handleCategoryClose = () => {
    setOpenCategory(null);
    setAnchorEl(null);
  };

  const handleNavClick = (event, href) => {
    if (onNavigate && href.startsWith('/')) {
      event.preventDefault();
      onNavigate(href);
    }
    setIsMenuOpen(false);
    handleCategoryClose();
  };

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light';
    setThemeMode(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const goingDown = current > lastScrollY.current;
      if (current > 80 && goingDown) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = current;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={{
        backgroundColor: 'var(--color-bg)',
        color: 'var(--color-text)',
        borderBottom: '1px solid #e5e9f0',
        boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
        transition: 'transform 0.35s ease, opacity 0.35s ease',
        transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
        opacity: hidden ? 0 : 1,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            gap: 2,
            minHeight: 76,
            display: 'flex',
            alignItems: 'center',
            paddingY: 1,
          }}
        >
          <Button
            href="/"
            variant="text"
            onClick={(e) => handleNavClick(e, '/')}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.25,
              padding: 0,
              textTransform: 'none',
              color: 'inherit',
              '&:hover': { background: 'transparent' },
            }}
          >
            <Box
              component="img"
              src="/rgr-logo.webp"
              alt="RGR Power Washing"
              sx={{ height: 100, width: 'auto', objectFit: 'contain' }}
            />
          </Button>

          {!isDesktop && (
            <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton
                aria-label="Toggle color theme"
                onClick={toggleTheme}
                sx={{ color: 'var(--color-text)' }}
              >
                {themeMode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
              <IconButton
                aria-label="Open navigation"
                onClick={() => setIsMenuOpen(true)}
                sx={{ color: 'var(--color-text)' }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          )}

          {isDesktop && (
            <Box
              component="nav"
              aria-label="Primary"
              sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 2 }}
            >
              <Stack direction="row" spacing={3} alignItems="center">
                {links.map((group) => (
                  <Box key={group.category}>
                    <Button
                      variant="text"
                      endIcon={
                        openCategory === group.category ? <ExpandLessIcon /> : <ExpandMoreIcon />
                      }
                      onClick={(e) => handleCategoryToggle(group.category, e.currentTarget)}
                      aria-haspopup="menu"
                      aria-expanded={openCategory === group.category ? 'true' : 'false'}
                      sx={{
                        color: 'var(--color-text)',
                        textTransform: 'none',
                        fontWeight: 700,
                        letterSpacing: 0.4,
                        paddingX: 0.5,
                        '&:hover': { color: 'var(--color-primary)' },
                      }}
                    >
                      {group.category}
                    </Button>

                    <Menu
                      anchorEl={anchorEl}
                      open={openCategory === group.category}
                      onClose={handleCategoryClose}
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                      slotProps={{
                        paper: {
                          sx: {
                            minWidth: 200,
                            paddingY: 0.5,
                            backgroundColor: 'var(--color-bg)',
                            color: 'var(--color-text)',
                          },
                        },
                      }}
                    >
                      {group.items.map((item) => (
                        <MenuItem
                          key={item.href}
                          component="a"
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          sx={{ fontWeight: 600 }}
                        >
                          {item.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                ))}
              </Stack>
              <IconButton
                aria-label="Toggle color theme"
                onClick={toggleTheme}
                sx={{ color: 'var(--color-text)' }}
              >
                {themeMode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        PaperProps={{
          sx: {
            width: 320,
            paddingTop: 1,
            paddingX: 2,
            backgroundColor: 'var(--color-bg)',
            color: 'var(--color-text)',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingY: 1 }}>
          <IconButton
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
            sx={{ color: 'var(--color-text)' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List sx={{ paddingX: 0 }} aria-label="Mobile navigation">
          {links.map((group, idx) => (
            <Box key={group.category}>
              <ListSubheader
                component="div"
                disableSticky
                sx={{ fontWeight: 700, color: 'var(--color-text)', bgcolor: 'transparent', paddingX: 0 }}
              >
                {group.category}
              </ListSubheader>
              {group.items.map((item) => (
                <ListItemButton
                  key={item.href}
                  component="a"
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  sx={{ borderRadius: 1 }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              ))}
              {idx < links.length - 1 && <Divider sx={{ marginY: 1.5 }} />}
            </Box>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}
