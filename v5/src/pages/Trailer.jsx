import React from 'react'
import { Box, Button, Container, FormControl, Grid, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router'
import { fontStyle } from "../styles/GlobalStyle"
import { useState, useEffect } from 'react'
import bonna_bonnatouch from '../assets/img/bonna-touch-logo.png'

const Trailer = () => {

    const navigate = useNavigate()

    // Video ID'sini YouTube video URL'sinden alın
    const videoId = "vqd6rY6r7n4"; // Örnek bir video ID'si

    // Embed URL'sini oluşturun
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&mute=1`;
    // const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0`;


    return (

        <div>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'center', p: 3 }}>

                <img
                    src={bonna_bonnatouch}
                    alt="bonnaLogo"
                    width='200px'
                    style={{ scale: '1.3px' }}
                />


                <Box display={'flex'} justifyContent={'center'} width={'903px'} height={'508px'} p={3}>

                    <iframe
                        src={embedUrl}
                        title="YouTube Video"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>


                </Box>


                <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant='outlined' onClick={() => navigate('/register')} sx={{ textTransform: 'none', fontStyle, letterSpacing: 5, fontSize: 18 , color:'#000000',borderColor:'#000000'}}>
                        Try Bonna Touch
                    </Button>
                </Container>


            </Box>

        </div>
    )
}

export default Trailer