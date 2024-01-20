import React from 'react'
import { useNavigate } from 'react-router'
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Container } from '@mui/material';
import notFound from "../assets/img/notfound.png"
import { RiHomeLine } from "react-icons/ri";
import { IoReturnDownBack } from "react-icons/io5";



export const NotFound = () => {

  const navigate = useNavigate()

  return (

    <>

      <Box display={'flex'} flexDirection={'column'} minHeight={'1100px'} gap={5} alignItems={'center'}>

        <Container sx={{display:'flex',justifyContent:'center',p:5,mt:10}}>
        <img
          src={notFound}
          height={'500px'}
          style={{objectFit:'contain'}}
        />
        </Container>

        <Container sx={{display:'flex',justifyContent:'space-evenly',gap:5,p:5}}>
          <RiHomeLine size={50} cursor={'pointer'} onClick={()=>navigate('/home')}/>
          <IoReturnDownBack size={50} cursor={'pointer'} onClick={()=>navigate(-1)}/>
        </Container>

      </Box>
    </>

  )
}
