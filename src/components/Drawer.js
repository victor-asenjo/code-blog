import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom'
import { classes } from 'istanbul-lib-coverage';
import routes from '../constantes/routes'
import menuItem from '../constantes/menuItems'
import { Routes, Route } from 'react-router-dom';
import { ExpandLess, ExpandMore } from '@mui/icons-material';


const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [openItems, setOpenItems] = React.useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  function handleNestedListToggle(itemPath) {
    setOpenItems((prevOpenItems) => {
      const isOpen = prevOpenItems.includes(itemPath);
      if (isOpen) {
        navigate(itemPath); // Navigate to the path when collapsing the nested list
        return prevOpenItems.filter((path) => path !== itemPath);
      } else {
        return [...prevOpenItems, itemPath];
      }
    });
  }
  

  function isNestedListOpen(itemPath) {
    return openItems.includes(itemPath);
  }

  function renderMenuItem(item, isNested = false) {
    const { text, icon, path, children } = item;
  
    const listItem = (
      <ListItem
        key={path || text}
        disablePadding
        onClick={() => navigate(path)}
        className={location.pathname === path ? classes.active : null}
      >
        <ListItemButton>
          <ListItemIcon sx={{ marginLeft: 'auto' }}>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    );
  
    if (children && children.length > 0) {
      const nestedListOpen = isNestedListOpen(path);
  
      return (
        <React.Fragment key={path || text}>
          <ListItem
            disablePadding
            onClick={() => handleNestedListToggle(path)}
          >
            <ListItemButton>
              <ListItemIcon sx={{ marginLeft: 'auto' }}>{icon}</ListItemIcon>
              <ListItemText primary={text} />
              <ListItemIcon sx={{ marginLeft: 'auto' }}>
                {nestedListOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <List component="div" disablePadding>
            {nestedListOpen &&
              children.map((child) => renderMenuItem(child, true))}
          </List>
        </React.Fragment>
      );
    }
  
    return listItem;
  }
  


  const drawer = (
    <div>
        <div>
        <Typography variant="h5">
            Code tips
        </Typography>
        </div>
      <Toolbar />
      <Divider />
      <List>
      {menuItem.map((item) => renderMenuItem(item))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
            {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
         {/* Add a Route component to render the content based on the route */}
         <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>        
      </Box>
      
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
