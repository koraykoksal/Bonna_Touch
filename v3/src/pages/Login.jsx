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


const Login = () => {


    const [info, setInfo] = useState({

        email: "",

    })

    const handleChage = (e) => {

        const { name, value } = e.target
    
        setInfo({ ...info, [name]: value })
    
    
      }
    
      const handleSubmit=(e)=>{
    
        e.preventDefault()
    
      }


    return (
        <div>

            <Typography align='center' fontWeight={700} variant='subtitle2' p={3} color={'red'} fontSize={'22px'} letterSpacing={5}>Login</Typography>

            <Container sx={{ display: 'flex', flexDirection: 'column', gap: 5 }} maxWidth='lg' component={'form'} onSubmit={handleSubmit}>

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

                <Box display={'flex'} justifyContent={'center'} color={'black'} letterSpacing={2} >
                    <Link to={'/register'} >Don't you have an account.</Link>
                </Box>

            </Container>

        </div>
    )
}

export default Login