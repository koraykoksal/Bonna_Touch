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
import generateGift from '../assets/gift/generateGift.gif'

export const Dalle = () => {

  

  const dispatch = useDispatch()

  const {getImageVariationData} = useDalleCall()

  const {loading,dalleImage} = useSelector((state)=>state.touch)

  // const {imgTime,status}=dalleImage

  const [filtering, setfiltering] = useState(false)

  const currentime = new Date().toLocaleString()

  const d = new Date()

  const hour = d.getHours()
  const minute = d.getMinutes()
  const year = d.getFullYear()
  const month = d.getMonth()+1
  const day = d.getDate()

  const datetime = `${year}-${month}-${day} ${hour}:${minute}`

  
  // const control=()=>{

  //   if(new Date(datetime) <= new Date(imgTime)){
  //     setfiltering(true)
  //   }

  // }
 
  // useEffect(() => {
  //   control();
  // }, [loading])



  return( 


  <>


    {loading && (

    <Box sx={{ display: 'flex',justifyContent:'center',mt:'5rem'}} >

     {/* <CircularProgress color="success" sx={{scale:'2'}} /> */}

      <img src={generateGift} alt="" />
      

    </Box>


    )}



    {
        dalleImage.filter(item => new Date(datetime) <= new Date(item.imgTime)).map((data)=>(

          <CardActionArea  sx={{maxWidth: 500}} style={{ margin: "auto", marginTop: "3.5rem", marginBottom: "3.5rem" }}>
                                
          <CardMedia
            component="img"
            height="440"
            image={data.imgUrl}
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
        
        ))
    }







  </>
  )


}
