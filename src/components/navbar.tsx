import { useState, useContext } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Switch,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  useMediaQuery,
  Button,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/theme-context';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { mode, toggleMode } = useContext(ThemeContext);

  // State for hover menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Use media query to detect desktop size and hide hamburger menu on large screens
  const isDesktop = useMediaQuery('(min-width:600px)');

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleHover = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Traditional', path: '/traditional' },
    { label: 'React Query', path: '/react-query' },
    { label: 'Mutations', path: '/mutations' },
    { label: 'Chart', path: '/chart' },
    { label: 'Data Visual', path: '/data-visual' },
    { label: 'Form Builder', path: '/form-builder' },
    { label: 'Autocomplete', path: '/auto-complete' },
    {
      label: 'Custom Hooks',
      path: '/custom-hooks',
      submenu: [
        { label: 'useDebounce', path: '/custom-hooks/use-debounce' },
        { label: 'useWindowSize', path: '/custom-hooks/use-window-size' },
        { label: 'useScrollPosition', path: '/custom-hooks/use-scroll-position' },
        { label: 'useFormValidation', path: '/custom-hooks/use-form-validation' },
        { label: 'useFetchList', path: '/custom-hooks/use-fetch-list' },
        { label: 'useFetchById', path: '/custom-hooks/use-fetch-by-id' },
        { label: 'useCreateResource', path: '/custom-hooks/use-create-resource' },
        { label: 'useFetchData', path: '/custom-hooks/use-fetch-data' },
        { label: 'CRUD', path: '/custom-hooks/crud' },
      ],
    },
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Hamburger Menu Icon (visible only on mobile) */}
          {!isDesktop && (
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          )}

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Application
          </Typography>

          {/* Desktop Menu Links (Visible only on desktop) */}
          {isDesktop && (
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexGrow: 1 }}>
              {menuLinks.map(link => (
                <Box
                  key={link.label}
                  onMouseEnter={link.submenu ? handleHover : undefined}
                  onMouseLeave={link.submenu ? handleMenuClose : undefined}
                >
                  {link.submenu ? (
                    <>
                      <Typography
                        variant="body1"
                        sx={{ cursor: 'pointer', fontWeight: 'bold', color: 'white' }}
                      >
                        {link.label}
                      </Typography>
                      <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        MenuListProps={{
                          onMouseLeave: handleMenuClose,
                        }}
                      >
                        {link.submenu.map(subLink => (
                          <MenuItem
                            key={subLink.path}
                            component={Link}
                            to={subLink.path}
                            onClick={handleMenuClose}
                          >
                            {subLink.label}
                          </MenuItem>
                        ))}
                      </Menu>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      style={{
                        textDecoration: 'none',
                        color: 'white',
                        fontWeight: 'bold',
                      }}
                    >
                      <Typography variant="body1">{link.label}</Typography>
                    </Link>
                  )}
                </Box>
              ))}
            </Box>
          )}

          {/* Theme Toggle */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1" sx={{ mr: 2 }}>
              {mode === 'light' ? 'Light Mode' : 'Dark Mode'}
            </Typography>
            <Switch checked={mode === 'dark'} onChange={toggleMode} />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 250 }}>
          <List>
            {menuLinks.map(link => (
              <Box key={link.label}>
                {link.submenu ? (
                  <>
                    <ListItem>
                      <ListItemText primary={link.label} />
                    </ListItem>
                    <List component="div" disablePadding>
                      {link.submenu.map(subLink => (
                        <ListItem
                          key={subLink.path}
                          button
                          component={Link}
                          to={subLink.path}
                          sx={{ pl: 4 }}
                        >
                          <ListItemText primary={subLink.label} />
                        </ListItem>
                      ))}
                    </List>
                  </>
                ) : (
                  <ListItem button component={Link} to={link.path}>
                    <ListItemText primary={link.label} />
                  </ListItem>
                )}
              </Box>
            ))}
          </List>
          <Box sx={{ padding: 2 }}>
            <Button onClick={toggleMode} sx={{ width: '100%' }}>
              {mode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
