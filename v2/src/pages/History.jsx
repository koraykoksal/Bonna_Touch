import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import {BiDownload} from 'react-icons/bi'
import axios from 'axios'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function History() {


  const {dalleData} = useSelector((state)=>state.touch)

  const d = new Date()

  const hour = d.getHours()
  const minute = d.getMinutes()
  const year = d.getFullYear()
  const month = d.getMonth()+1
  const day = d.getDate()

  const datetime = `${year}-${month}-${day} ${hour}:${minute}`

  let sum = 0;

  const toplamImg=()=>{
    
    dalleData.filter(item => new Date(datetime) < new Date(item.imgTime)).forEach((e,i)=>{
      sum = i++
    });

    return sum+1
  }



  return ( 

    <>

      <Container sx={{padding:2,marginBottom:5,textAlign:'center'}}>
      <Typography variant='subtitle1' color="text.secondary">Total AI Images : {toplamImg()}</Typography>
      </Container>
      

      <Container sx={{display:'flex',flexWrap:'wrap-reverse',justifyContent:'center',alignItems:'center',gap:2,marginBottom:5}}>
        {dalleData.filter(item => new Date(datetime).toString() < new Date(item.imgTime).toString()).map((data)=>(

          <Card sx={{ maxWidth: 350,maxHeight:450 }} key={data.id}>

            <CardActionArea>
              
              <Box sx={{padding:0.5}}>
              <Typography variant="body2" color="text.secondary">
                 Expiry : {data.imgTime}
              </Typography>
              </Box>
              
              <Box>
              
              <a href={data.promptImg} download={data.promptImg} target='_blank'>
              <CardMedia
                component="img"
                height="140"
                image={data.promptImg}
              />
              </a>

              </Box>
              
              <CardContent sx={{maxHeight:'50px',overflow:'auto'}}>
              <Typography variant="body2" color="text.secondary">
                      {data.prompt}
                </Typography>
              </CardContent>

            </CardActionArea>

          </Card>

          ))}
      </Container>

    

     
        

    </>
  );
}