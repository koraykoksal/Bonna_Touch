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
import moment from 'moment'

export default function History() {


  const {dalleData} = useSelector((state)=>state.touch)
  const currentTime = moment().format()

  // let sum = 0;

  // const toplamImg=()=>{

  //   sum = dalleData.reduce((n,item)=>new Date(datetime) < new Date(item.imgTime) ? n+1:n,0)

  //   return sum
    
  // }

  console.log(dalleData)

  return ( 

    <>

    <Box padding={2}>
    <Typography variant='h5' align='center' mb={5} color='#FF6969'>
      AI Image History
    </Typography>
    </Box>

      <Box sx={{display:'flex',flexWrap:'wrap-reverse',justifyContent:'center',gap:2,marginBottom:5}}>

        {dalleData?.filter(item => moment(currentTime) < moment(item.imgTime)).map((data)=>(

        <Card sx={{ maxWidth: 380,boxShadow:3 }} key={data.id}>

          <CardActionArea>
            
          
            <Typography variant="subtitle2" color="text.secondary" p={0.5}>
              Expiry : {moment(data.imgTime).format('LT')}
            </Typography>
          
            
            <Box>
            
            <a href={data.promptImg} download='koray' target='_blank'>
            <CardMedia
              component="img"
              height="140"
              image={data.promptImg}
            />
            </a>

            </Box>
            
            <CardContent sx={{maxHeight:'50px',overflow:'auto'}}>
            <Typography variant="subtitle2" color="text.secondary">
                    {data.prompt}
              </Typography>
            </CardContent>

          </CardActionArea>

        </Card>

        ))}

      </Box>

    </>
  );
}