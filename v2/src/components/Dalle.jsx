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
  const [progress, setProgress] = useState(0)
  const {dalleImage,userPrompt,loading,dalleData} = useSelector((state)=>state.touch)

  let currentTime = new Date().toLocaleTimeString()
  
  let d = new Date()
  let h = new Date().getHours()
  d.setHours(h+2)

  console.log(d.toLocaleTimeString())

  const handleVariation=(file)=>{

    //const reader = new FileReader()

    getImageVariationData('variations',file)

  }

  const downloadImage=()=>{
    // saveAs(`${new Date().getTime()}`,`${dalleImage}.png`)
    saveAs('koray',dalleImage)
  }
  
  return( 


  <>


    {loading && (

    <Box sx={{ display: 'flex',justifyContent:'center',mt:'5rem'}} >

     <CircularProgress color="success" sx={{scale:'3'}} />
      
    </Box>


    )}

    {dalleImage && (

    
    <CardActionArea key={dalleData.id} sx={{maxWidth: 500}} style={{ margin: "auto", marginTop: "3.5rem", marginBottom: "3.5rem" }}>

      <CardMedia
        component="img"
        height="440"
        image={dalleImage}
        alt=""
        sx={{borderRadius:'0.5rem'}}
        onClick={downloadImage}
        />
        
      <CardContent>
        <Typography variant="body2" color="text.secondary" textAlign={'center'} overflow={'auto'} style={{ wordWrap: 'break-word' }}>
          {userPrompt}
        </Typography>
      </CardContent>

      <Box textAlign={'center'} padding={'0.3rem'}>
        <Button variant='outlined' sx={{'&:hover':{backgroundColor:'#3AB0FF',color:'#ffff'}}}>Variation</Button>
      </Box>

    </CardActionArea>

    )}


  </>
  )


}
