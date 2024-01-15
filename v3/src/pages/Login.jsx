import React from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, Container, TextField } from '@mui/material';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useAuthCall from '../hooks/useAuthCall';
import bonnaLogo from "../assets/img/bonna-logo.png"

const Login = () => {

    const { login } = useAuthCall()

    const [info, setInfo] = useState({

        email: "",

    })

    const handleChage = (e) => {

        const { name, value } = e.target

        setInfo({ ...info, [name]: value })


    }

    const handleSubmit = (e) => {

        e.preventDefault()
        login('register', info)

    }


    return (
        <div>

            <Box display={'flex'} flexDirection={'column'} gap={5} alignItems={'center'} p={3} sx={{ backgroundColor: '#dddddd', height: '100vh' }}>


                <img
                    src={bonnaLogo}
                    alt="bonnaLogo"
                    width='200px'
                    style={{ scale: '1.3px', cursor: 'pointer' }}
                />

                <Typography align='center' variant='subtitle2' p={1} color={'black'} fontSize={'18px'} letterSpacing={5}>Login</Typography>

                <Container sx={{ display: 'flex', flexDirection: 'column', gap: 5, p: 3 }} maxWidth='lg' component={'form'} onSubmit={handleSubmit}>

                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>

                        <TextField
                            fullWidth
                            required
                            type='text'
                            id='email'
                            name='email'
                            label='Email'
                            variant="outlined"
                            onChange={handleChage}
                        />

                    </Box>

                    <Button variant='contained' sx={{ letterSpacing: 5 }} type='submit'>Login</Button>

                    <Link to={'/'} style={{ display: 'flex', justifyContent: 'center', color: 'black',letterSpacing:2 }}>Don't you have an account.</Link>

                </Container>

            </Box>

        </div>
    )
}

export default Login