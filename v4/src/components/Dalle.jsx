import React from 'react'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import BonnaTouchSlogan from '../assets/gift/BonnaTouchSlogan.gif'
import { useState, useEffect } from 'react';
import ImageDetail_Modal from './modals/ImageDetail_Modal';
import bonna_bonnatouch from '../assets/img/bonna-touch-logo.png'

export const Dalle = () => {


  const { loadingGeneration, showLogo, leonardoGenerationAllData, leonardoGenerationData } = useSelector((state) => state.touch)
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
      url: item.url,
      text: item.text
    }))

    setUrls(newData)

  }, [leonardoGenerationAllData])


  const handleCardClick = (data) => {
    setSelectedData(data);
    setOpen(true);
  };



  return (


    // <Box>

    //   {loadingGeneration ? (

    //     <Box sx={{ display: 'flex', justifyContent: 'center', height: '350px', p: 3 }} >

    //       <img src={BonnaTouchSlogan} alt="generateGift" style={{ objectFit: 'cover' }} />

    //     </Box>

    //   )
    //     : (

    //       <Container sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 3 }} >

    //         {
    //           urls?.map((data, index) => (

    //             <CardActionArea key={index} sx={{ maxWidth: 500 }} style={{ margin: "auto", marginTop: "3.5rem", marginBottom: "3.5rem" }}>

    //                 <CardMedia
    //                   component="img"
    //                   height="450"
    //                   src={data.url}
    //                   sx={{ borderRadius: '0.5rem' }}
    //                   onClick={() => handleCardClick(data)}
    //                 />

    //             </CardActionArea>

    //           ))

    //         }

    //         <ImageDetail_Modal open={open} handleClose={handleClose} selectedData={selectedData} />

    //       </Container>

    //     )
    //   }




    // </Box>



    <Box>

      {
        loadingGeneration ? (

          <Box sx={{ display: 'flex', justifyContent: 'center', height: '350px', p: 3 }} >

            <img src={BonnaTouchSlogan} alt="generateGift" style={{ objectFit: 'cover', height: 'auto' }} />

          </Box>

        )
          : (
            <Container sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 3 }} >

              {
                urls.map((data, index) => (

                  <CardActionArea key={index} sx={{ maxWidth: 500 }} style={{ margin: "auto", marginTop: "3.5rem", marginBottom: "3.5rem" }}>

                    <CardMedia
                      component="img"
                      height="450"
                      src={data.url}
                      sx={{ borderRadius: '0.5rem', height: 'auto' }}
                      onClick={() => handleCardClick(data)}
                    />

                  </CardActionArea>

                ))

              }

              <ImageDetail_Modal open={open} handleClose={handleClose} selectedData={selectedData} />

            </Container>
          )
      }

      {
        showLogo &&
        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
          <img src={bonna_bonnatouch} alt="bonnatouchlogo" style={{ objectFit: 'cover', maxWidth: '60%', height: 'auto' }} />
        </Container>
      }




    </Box>


  )


}
