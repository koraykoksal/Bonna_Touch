import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import styleIcon from "../assets/img/styleIcon.png"
import { CardMedia, ListItemButton, ListItemText } from '@mui/material';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router';
import { RiLogoutCircleRLine } from "react-icons/ri";
import { MdDashboardCustomize } from "react-icons/md";
import bonna_bonnatouch from '../assets/img/bonnaTouchLogo.png'
import PromptStyle_Modal from './modals/PromptStyle_Modal';


const pages = [
    {
        title: "Home",
        url: "/"
    },
    {
        title: "Variation",
        url: "/variation"
    },
    {
        title: 'History',
        url: '/history'
    },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);

    const navigate = useNavigate()

    const { dalleImage } = useSelector((state) => state.touch)

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };




    return (

        <AppBar position="static" sx={{ backgroundColor: '#dddddd', boxShadow: 0 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', p: 3 }}>

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} >
                        <img
                            src={bonna_bonnatouch}
                            alt="bonnaLogo"
                            width='200px'
                            style={{ scale: '1.3px', cursor: 'pointer' }}
                            onClick={() => window.open('https://www.bonna.com.tr', '_blank')}
                        />
                    </Box>


                    {/* MOBILE PAGE MENU */}

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            // color="inherit"
                            color='#000000'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page, index) => (
                                // <MenuItem key={index} onClick={() => {
                                //     navigate(page.url)
                                //     handleCloseNavMenu()
                                // }}>

                                //     <ListItemButton sx={{ textTransform: 'none' }}>
                                //         <ListItemText>{page.title}</ListItemText>
                                //     </ListItemButton>

                                // </MenuItem>
                                <Box key={index}>
                                    <Button sx={{textTransform:'none',color:'#000000',fontSize:'16px'}} onClick={()=>{
                                        navigate(page.url)
                                        handleCloseNavMenu()
                                    }}>{page.title}</Button>
                                </Box>
                            ))}
                        </Menu>
                    </Box>


                    {/* PAGES MENU */}

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end', gap: 5, alignItems: 'center' }}>
                        {pages.map((page, index) => (
                            <Button
                                key={index}
                                onClick={() => {
                                    navigate(page.url)
                                    handleCloseNavMenu()
                                }}
                                sx={{ my: 2, fontSize: '18px', color: '#000000', display: 'block', '&:hover': { color: '#ffffff', backgroundColor: 'transparent' }, textTransform: 'none' }}
                            >
                                {page.title}
                            </Button>
                        ))}

                    </Box>

                    {/* STYLE BAR BUTTON */}
                    <MdDashboardCustomize cursor='pointer' size={33} style={{ color: '#000000', marginLeft: 50 }} onClick={handleOpen} />

                    {/* SETTINGS MENU */}

                    {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 3, mr: 1 }}>
                        {/* {
              currentUser && (<Typography>{currentUser || null}</Typography>)
            }
            {
              currentUser && (<RiLogoutCircleRLine size={22} color='#B31312' cursor='pointer' onClick={() => logout()} />)
            } */}
                    </Box>

                </Toolbar>

            </Container>



            <Box>
                <Outlet />
            </Box>

            <PromptStyle_Modal handleOpen={handleOpen} open={open} setOpen={setOpen} />


        </AppBar>

    )
}

export default NavBar