import React from 'react'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import generateGift from '../assets/gift/generationGift2.gif'
import { useState, useEffect } from 'react';
import { bgColor } from '../styles/GlobalStyle';
import ImageDetail_Modal from './modals/ImageDetail_Modal';

export const Dalle = () => {


  const { loadingGeneration, leonardoGenerationAllData, leonardoGenerationData } = useSelector((state) => state.touch)
  const [urls, setUrls] = useState([])

  const [selectedData, setSelectedData] = useState([]);

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
  }


  useEffect(() => {

    const lastTwoData = leonardoGenerationAllData.slice(-2)
    const newData = lastTwoData.map(item => ({
      url: item.url
    }))

    setUrls(newData)

  }, [leonardoGenerationAllData])


  const handleCardClick = (data) => {
    setSelectedData(data);
    setOpen(true);
  };



  return (




    <Box>

      {loadingGeneration ? (

        <Box sx={{ display: 'flex', justifyContent: 'center', height: '350px', p: 3 }} >

          <img src={generateGift} alt="generateGift" style={{ objectFit: 'cover' }} />

        </Box>

      )
        : (

          <Container sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 3 }} >

            {
              urls?.map((data, index) => (

                <CardActionArea key={index} sx={{ maxWidth: 500 }} style={{ margin: "auto", marginTop: "3.5rem", marginBottom: "3.5rem" }}>

                  {/* <a href={data.url} target='_blank'> */}
                    <CardMedia
                      component="img"
                      height="450"
                      src={data.url}
                      sx={{ borderRadius: '0.5rem' }}
                      onClick={() => handleCardClick(data)}
                    />
                  {/* </a> */}

                </CardActionArea>

              ))

            }

            <ImageDetail_Modal open={open} handleClose={handleClose} selectedData={selectedData} />

          </Container>

        )
      }




    </Box>



  )


}
