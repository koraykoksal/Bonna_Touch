import React from 'react'
import { StyleImg } from './Dalle.style'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, Container, adaptV4Theme, filledInputClasses } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import useDalleCall from '../hooks/useDalleCall';
import imageFile from '../assets/img/img1.png'
import {saveAs} from 'file-saver'
import generateGift from '../assets/gift/generateGift.gif'
import imgV from '../assets/img/imgV.png'
import axios from 'axios';


export const Dalle = () => {


  const {getImageVariationData} = useDalleCall()
  const {loading,dalleImage} = useSelector((state)=>state.touch)



  const formdata=new FormData()


  // const handleVariation=(e)=>{
  //   e.preventDefault();
  //   getImageVariationData('variations')
  // }

  const handleSubmit=(e)=>{

    e.preventDefault();

    const yakala = document.getElementById('file-input')

    formdata.append('file',yakala.files[0])

    getImageVariationData('variations',formdata.get('file'))
  
    console.log(formdata.get('file'))
    console.log(formdata.has('file'))
  }


  return( 


  <>

    <Container sx={{padding:5}}>
    <form id="formElem"  onSubmit={handleSubmit}>

      Picture : <input type="file" id='file-input' name="image" accept="image/*"  />

      <input type="submit" />

    </form>
    </Container>
    

    {loading && (

    <Box sx={{ display: 'flex',justifyContent:'center',mt:'5rem'}} >

      <img src={generateGift} alt="" />
      

    </Box>


    )}

    {
        dalleImage.map((data)=>(

          <CardActionArea  sx={{maxWidth: 500}} style={{ margin: "auto", marginTop: "3.5rem", marginBottom: "3.5rem" }}>
                                

            <a>
            <CardMedia
            component="img"
            height="440"
            image={data.imgUrl}
            alt=""
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
