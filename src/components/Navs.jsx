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
import { Image } from '@mui/icons-material';
import bonnaLogo from '../assets/img/bonnaTouchLogo.png'
import { useNavigate } from 'react-router';
import { ThemeContext } from '../context/ThemeContext'
import { lightIcon,darkIcon } from '../helper/themeIcon'
import { StyleButton } from './NavBar.style'
import { useContext } from 'react';

const drawerWidth = 240;
const navItems = [
  {
    title:"Home",
    url:"/"
  },
  {
    title:"History",
    url:"/history"
  },
  {
    title:"Login",
    url:"/login"
  },
  {
    title:"Register",
    url:"/register"
  }];

function Navs(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navigate = useNavigate()
  const {myTheme,setmyTheme}=useContext(ThemeContext)

  const handleChangeSyle=()=>{

    setmyTheme(prev=>(prev==="light" ? "dark":"light"))

  }
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  //*SAYFA MOBİL OLARAK GÖRÜNTÜLENMEK İSTETENDİĞİ ZAMAN ÇALIŞACAK OLAN YER
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography>
      <img src={bonnaLogo} alt="" style={{height:'6rem',margin:'auto'}}/>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item,i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item?.title} onClick={()=>navigate(item.url)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          {/* mobil görünümde çalışan alan */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <img src={bonnaLogo} alt="" style={{height:'6rem'}} />
          </Typography>


          <Box sx={{ display: { xs: 'none', sm: 'block',alignItems:'center' }}}>
            <StyleButton onClick={handleChangeSyle}>
                {myTheme==="light"?lightIcon:darkIcon}
            </StyleButton>
            {navItems.map((item,i) => (
              <Button key={i} sx={{ color: '#fff' }} onClick={()=>navigate(item.url)}>
                {item.title}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </AppBar>
      <Box component="nav">
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
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>

         
        </Typography>
      </Box>
    </Box>
  );
}

Navs.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navs;