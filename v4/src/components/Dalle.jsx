import React from 'react'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import generateGift from '../assets/gift/generationGift2.gif'
import moment from 'moment';


export const Dalle = () => {


  const {loadingGeneration,leonardoGenerationData} = useSelector((state)=>state.touch)


  return (


    <div>

      <Box sx={{ backgroundColor: '#dddddd' }}>

        {loadingGeneration ? (

          <Box sx={{ display: 'flex', justifyContent: 'center', height: '350px', p: 3 }} >

            <img src={generateGift} alt="generateGift" style={{ objectFit: 'cover' }} />

          </Box>

        )
          : (

            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 3 }} >

              {/* {
                leonardoGenerationData?.map((data, index) => (

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

              } */}
            </Box>

          )
        }




      </Box>


    </div>
  )


}
