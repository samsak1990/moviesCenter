import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import React, { useState } from 'react';
import { Link as RouretLink } from 'react-router-dom';

import {
  iconComponents,
  MOVIE_LISTS,
  TOP_LIST,
} from '../../../Data/MenuLists/navItems.jsx';

const Icon = ({ icon }) => {
  const IconComponent = iconComponents[icon];
  return <IconComponent />;
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const trigger = useScrollTrigger({
    target: window,
  });
  const handleDrawerToggle = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar>
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Drawer open={isOpen} onClose={handleDrawerToggle}>
              <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
                <List>
                  {TOP_LIST.map(item => (
                    <Link key={item.title} component={RouretLink} to={item.url}>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <Icon icon={item.icon} />
                          </ListItemIcon>
                          <ListItemText primary={item.title} />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))}
                </List>
                <Divider />
                <List>
                  {MOVIE_LISTS.map(item => (
                    <Link key={item.title} component={RouretLink} to={item.url}>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <Icon icon={item.icon} />
                          </ListItemIcon>
                          <ListItemText primary={item.title} />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Box>
            </Drawer>
            <Typography
              sx={{ color: 'white', textDecoration: 'none' }}
              component={RouretLink}
              to="/"
              variant="h5"
            >
              MovieCenter
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
}
