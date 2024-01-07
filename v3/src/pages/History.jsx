import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { BiDownload } from 'react-icons/bi'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import moment from 'moment'

export default function History() {


  const { dalleData } = useSelector((state) => state.touch)
  const currentTime = moment().format()

  console.log(dalleData)

  return (

    <>

      <Box sx={{ backgroundColor: '#dddddd', height: '900px' }}>


        <Box sx={{ display: 'flex', flexWrap: 'wrap-reverse', justifyContent: 'center', gap: 2, pt: 5 }}>

          {dalleData?.filter(item => moment(currentTime) < moment(item.imgTime)).map((data) => (

            <Card sx={{ maxWidth: 380,boxShadow: 0, backgroundColor: '#dddddd' }} key={data.id}>

              <CardActionArea>


                <Typography variant="subtitle2" color="text.secondary" p={0.5}>
                  Expiry : {moment(data.imgTime).format('LT')}
                </Typography>


                <Box>
                  <a href={data.imgUrl} target='_blank'>
                    <CardMedia
                      component="img"
                      height="140"
                      image={data.imgUrl}
                      sx={{borderRadius:'0.5rem'}}
                    />
                  </a>
                </Box>

                <CardContent sx={{ maxHeight: '50px', overflow: 'auto' }}>
                  <Typography variant="subtitle2" color="text.secondary">
                    {data.prompt}
                  </Typography>
                </CardContent>

              </CardActionArea>

            </Card>

          ))}

        </Box>
      </Box>

    </>
  );
}