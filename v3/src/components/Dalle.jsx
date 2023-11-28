import React from 'react'
import { StyleImg } from './Dalle.style'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import useDalleCall from '../hooks/useDalleCall';
import bonna_bonnatouch from '../assets/img/bonna_bonnatouch.png'
import { saveAs } from 'file-saver'
import generateGift from '../assets/gift/generateGift.gif'
import imgV from '../assets/img/imgV.png'
import axios from 'axios';
import moment from 'moment';


export const Dalle = () => {


  const { loadingGeneration, firstRender, dalleImage,dalleData } = useSelector((state) => state.touch)
  const currentTime = moment().format()

  
  console.log("dalleImage: ",dalleImage)
  console.log("dalleData: ",dalleData)
  return (


    <>



      <Box sx={{ backgroundColor: '#dddddd' }}>

        {loadingGeneration && (

          <Box sx={{ display: 'flex', justifyContent: 'center', height: '350px' }} >

            <img src={generateGift} alt="" style={{ objectFit: 'cover' }} />


          </Box>

        )
        }


        {
          dalleImage.filter(item => moment(currentTime) < moment(item.imgTime)).map((data, index) => (

            <CardActionArea key={index} sx={{ maxWidth: 500 }} style={{ margin: "auto", marginTop: "3.5rem", marginBottom: "3.5rem" }}>


              <a href={data.imgUrl} target='_blank'>
                <CardMedia
                  component="img"
                  height="450"
                  src={data.imgUrl}
                  sx={{ borderRadius: '0.5rem' }}
                />
              </a>

              <CardContent>
                <Typography variant="body2" color="text.secondary" textAlign={'center'} overflow={'auto'} style={{ wordWrap: 'break-word' }}>
                  {data.prompt}
                </Typography>
              </CardContent>


            </CardActionArea>

          ))

        }


      </Box>


    </>
  )


}
