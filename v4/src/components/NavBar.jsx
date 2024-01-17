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
import { CardMedia, ListItemButton, ListItemText } from '@mui/material';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router';
import bonna_bonnatouch from '../assets/img/bonna-touch-logo.png'
import useAuthCall from '../hooks/useAuthCall';
import { bgColor } from '../styles/GlobalStyle';
import generateIcon from "../assets/img/generate-icon.png"
import historyIcon from "../assets/img/history-icon.png"
import accountIcon from "../assets/img/account-icon.png"
import sendIcon from "../assets/img/send-icon.png"

const pages = [
    {
        title: "Generate",
        url: "/home",
    },
    // {
    //     title: "Variation",
    //     url: "variation"
    // },
    {
        title: 'History',
        url: '/history'
    },
];


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = () => {

    const { currentUser } = useSelector((state) => state.auth)

    const { logout } = useAuthCall()

    let avatarName = ""

    const navigate = useNavigate()


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


    //avatarın name bilgisi
    const avatarNick = () => {
        const name = currentUser[0]
        const boslukIndex = currentUser.indexOf(" ")
        const surname = currentUser[boslukIndex + 1]

        avatarName = name + surname

        return avatarName
    }


    return (

        <AppBar position="static" sx={{ backgroundColor: '#d8d8d8', boxShadow: 0 }}>

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
                                <Box key={index}>
                                    <Button sx={{ textTransform: 'none', color: '#000000', fontSize: '16px' }} onClick={() => {
                                        navigate(page.url)
                                        handleCloseNavMenu()
                                    }}>{page.title}</Button>
                                </Box>
                            ))}
                        </Menu>
                    </Box>



                    {/* PAGES MENU */}

                    {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end', gap: 5, alignItems: 'center' }}>
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

                    </Box> */}

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end', gap: 5, alignItems: 'center' }}>
                        <img src={generateIcon} style={{ cursor: 'pointer', height: '35px', objectFit: 'cover' }} onClick={() => {
                            navigate('/home')
                            handleCloseNavMenu()
                        }} />

                        <img src={historyIcon} style={{ cursor: 'pointer', height: '35px', objectFit: 'cover' }} onClick={() => {
                            navigate('/history')
                            handleCloseNavMenu()
                        }} />

                        <img src={sendIcon} style={{ cursor: 'pointer', height: '36px', objectFit: 'cover' }} onClick={() => {
                            alert('here..')
                        }} />

                    </Box>


                    {/* USER MENU */}

                    <Box display={'flex'} justifyContent={'center'} gap={3} alignItems={'center'} marginLeft={5}>

                        {/* STYLE BAR BUTTON */}

                        <Box sx={{ flexGrow: 0, display: 'flex', justifyContent: 'center', gap: 1, alignItems: 'center' }}>

                            <Box>

                                {/* <Avatar onClick={handleOpenUserMenu} sx={{ cursor: 'pointer', backgroundColor: 'black' }} >{avatarNick()}</Avatar> */}

                                <Avatar onClick={handleOpenUserMenu} sx={{ cursor: 'pointer', backgroundColor: 'transparent' }}
                                >
                                    <img src={accountIcon} style={{ height: '38px', objectFit: 'cover' }} />
                                </Avatar>



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
                                    <Box display={'flex'} flexDirection={'column'}>
                                        <Button sx={{ color: '#C70039', textTransform: 'none' }} onClick={() => logout()}>Logout</Button>
                                    </Box>

                                </Menu>
                            </Box>


                        </Box>
                    </Box>

                </Toolbar>

            </Container>



            <Box>
                <Outlet />
            </Box>


        </AppBar>

    )
}

export default NavBar