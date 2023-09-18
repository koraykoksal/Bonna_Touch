import React from 'react'
import { StyleImg } from './Dalle.style'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import useDalleCall from '../hooks/useDalleCall';
import imageFile from '../assets/img/img1.png'
import {saveAs} from 'file-saver'

export const Dalle = () => {

  

  const dispatch = useDispatch()

  const {getImageVariationData} = useDalleCall()

  const {dalleImage,dalleData,loading} = useSelector((state)=>state.touch)

  

  let d = new Date()
  let currentime = d.toLocaleTimeString()

  let imageFiltering=dalleImage.filter(function(dalleImage){

    return currentime <= dalleImage.ImgTime
  })




  return( 


  <>


    {loading && (

    <Box sx={{ display: 'flex',justifyContent:'center',mt:'15rem'}} >

     <CircularProgress color="success" sx={{scale:'2'}} />
      
    </Box>


    )}

    {imageFiltering.map((data)=>(

      // <CardActionArea  sx={{maxWidth: 500}} style={{ margin: "auto", marginTop: "3.5rem", marginBottom: "3.5rem" }}>

                                
      // <CardMedia
      //   component="img"
      //   height="440"
      //   image={dalleImage[0]?.currentImgUrl}
      //   alt=""
      //   sx={{borderRadius:'0.5rem'}}
      //   />


      // <CardContent>
      //   <Typography variant="body2" color="text.secondary" textAlign={'center'} overflow={'auto'} style={{ wordWrap: 'break-word' }}>
      //     {dalleImage[0]?.userPrompt}
      //   </Typography>
      // </CardContent>

      // <Box textAlign={'center'} padding={'0.3rem'}>
      //   <Button variant='outlined' sx={{'&:hover':{backgroundColor:'#3AB0FF',color:'#ffff'}}}>Variation</Button>
      // </Box>

      // </CardActionArea>

      <CardActionArea  sx={{maxWidth: 500}} style={{ margin: "auto", marginTop: "3.5rem", marginBottom: "3.5rem" }}>

                                
      <CardMedia
        component="img"
        height="440"
        image={data.currentImgUrl}
        alt=""
        sx={{borderRadius:'0.5rem'}}
        />


      <CardContent>
        <Typography variant="body2" color="text.secondary" textAlign={'center'} overflow={'auto'} style={{ wordWrap: 'break-word' }}>
          {data.userPrompt}
        </Typography>
      </CardContent>

      <Box textAlign={'center'} padding={'0.3rem'}>
        <Button variant='outlined' sx={{'&:hover':{backgroundColor:'#3AB0FF',color:'#ffff'}}}>Variation</Button>
      </Box>

      </CardActionArea>

    ))}




  </>
  )


}
