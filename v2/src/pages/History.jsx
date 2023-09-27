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

  // let sum = 0;

  // const toplamImg=()=>{

  //   sum = dalleData.reduce((n,item)=>new Date(datetime) < new Date(item.imgTime) ? n+1:n,0)

  //   return sum
    
  // }

  const handleFilter=(data,currentDate)=>{
    const filtrelenmisDizi = data.filter((item)=>new Date(currentDate) < new Date(item.imgTime))
    return filtrelenmisDizi
  }

  const filtrelenmisData = handleFilter(dalleData,datetime)

  console.log("ham data : ",dalleData)
  console.log("filtrelenmis data : ", filtrelenmisData)

  return ( 

    <div style={{flexDirection:'column'}}>

      <Container sx={{display:'flex',flexWrap:'wrap-reverse',justifyContent:'center',alignItems:'center',gap:2,marginBottom:5}}>
        {/* {dalleData.filter(item => new Date(datetime) < new Date(item.imgTime)).map((data)=>(

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

          ))} */}
        {filtrelenmisData.map((data)=>(

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

    </div>
  );
}