import React from 'react'
import { StyleImg } from './Dalle.style'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import useDalleCall from '../hooks/useDalleCall';
import imageFile from '../assets/img/img1.png'
import {saveAs} from 'file-saver'
import generateGift from '../assets/gift/generateGift.gif'
import imgV from '../assets/img/imgV.png'
import axios from 'axios';
import moment from 'moment';


export const Dalle = () => {


  const {loadingGeneration,loadingVariation,dalleImage,imgVariation} = useSelector((state)=>state.touch)
  const currentTime = moment().format()


  console.log("img dalle :",dalleImage)
  console.log("img variation :",imgVariation)
  console.log("load variation :",loadingVariation)
  
  return( 


  <>

    

    {loadingGeneration && (

    <Box sx={{ display: 'flex',justifyContent:'center',mt:'5rem'}} >

      <img src={generateGift} alt="" />
      

    </Box>


    )}

    {
        dalleImage.filter(item => moment(currentTime) < moment(item.imgTime)).map((data,index)=>(

          <CardActionArea key={index}  sx={{maxWidth: 500}} style={{ margin: "auto", marginTop: "3.5rem", marginBottom: "3.5rem" }}>
                                
            
            <a href={data.imgUrl} target='_blank'>
            <CardMedia
            component="img"
            height="440"
            src={data.imgUrl}
            sx={{borderRadius:'0.5rem'}}
            />
            </a>

          <CardContent>
            <Typography variant="body2" color="text.secondary" textAlign={'center'} overflow={'auto'} style={{ wordWrap: 'break-word' }}>
              {data.userPrompt}
            </Typography>
          </CardContent>

          {/* <Box textAlign={'center'} padding={'0.3rem'}>
            <Button variant='outlined' sx={{'&:hover':{backgroundColor:'#3AB0FF',color:'#ffff'}}} onClick={handleVariation}>Variation</Button>
          </Box> */}

          </CardActionArea> 
        
        ))
    }







  </>
  )


}
