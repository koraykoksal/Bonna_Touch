import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardMedia, ImageListItem } from '@mui/material';
import bonnaTouchLogo from '../assets/img/bonnaTouchLogoW.png'
import { useNavigate } from 'react-router';


const drawerWidth = 240;
const navItems = [
    {
        title:'Home',
        url:'/'
    },
    {
        title:'History',
        url:'/history'
    },
    {
      title:'Variation',
      url:'/variation'
  }
];

function Navs(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate()

const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>

      <Typography variant='h6' sx={{padding:3}}>
        BONNA TOUCH
      </Typography>

      <Divider />

      <List>
        {navItems.map((item,index) => (
          <ListItem key={index} disablePadding >
            <ListItemButton sx={{ textAlign: 'center' }} onClick={()=>navigate(item.url)}>
              <ListItemText primary={item.title}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>

      <CssBaseline />

      <AppBar component="nav" sx={{backgroundColor:'#000000'}}>
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            BONNA TOUCH
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
          <img src={bonnaTouchLogo} style={{maxHeight:'75px',objectFit:'cover',scale:'1.3'}} />
          </Box>

          
         
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item,index) => (
              <Button key={index} sx={{ color: '#fff','&:hover':{color:'#D80032'}}} onClick={()=>navigate(item.url)}>
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
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
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          
        </Typography>
      </Box>
    </Box>
  );
}


export default Navs;