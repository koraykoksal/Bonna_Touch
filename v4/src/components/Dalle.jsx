import React from 'react'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import generateGift from '../assets/gift/generationGift2.gif'
import { useState, useEffect } from 'react';
import { bgColor } from '../styles/Global.styles';

export const Dalle = () => {


  const { loadingGeneration, leonardoGenerationAllData, leonardoGenerationData } = useSelector((state) => state.touch)
  const [urls, setUrls] = useState([])


  useEffect(() => {

    const lastTwoData = leonardoGenerationAllData.slice(-2)
    const newData = lastTwoData.map(item => ({
      url: item.url
    }))

    setUrls(newData)

  }, [leonardoGenerationAllData])


  console.log(leonardoGenerationData)

  return (




    <Box>

      {loadingGeneration ? (

        <Box sx={{ display: 'flex', justifyContent: 'center', height: '350px', p: 3 }} >

          <img src={generateGift} alt="generateGift" style={{ objectFit: 'cover' }} />

        </Box>

      )
        : (

          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2}} >

            {
              urls?.map((data, index) => (

                <CardActionArea key={index} sx={{ maxWidth: 500 }} style={{ margin: "auto", marginTop: "3.5rem", marginBottom: "3.5rem" }}>

                  <a href={data.url} target='_blank'>
                    <CardMedia
                      component="img"
                      height="450"
                      src={data.url}
                      sx={{ borderRadius: '0.5rem' }}
                    />
                  </a>

                </CardActionArea>

              ))

            }


          </Box>

        )
      }




    </Box>



  )


}
