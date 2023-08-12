import React from 'react'
import { StyleImg } from './Dalle.style'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea } from '@mui/material';
import { useSelector } from 'react-redux';

export const Dalle = ({dalleImage,finalprompt}) => {

  const dalleData = useSelector((state)=>state.touch.dalleData)

  console.log("deger:",dalleData)

  return(
  <>

    <Card sx={{ maxWidth: 500 }} style={{ margin: "auto", marginTop: "3.5rem", marginBottom: "3.5rem" }}>
      
      <Typography textAlign={'center'} color={'#B91C1C'}></Typography>

      {/* servisten gelen image state içi dolunca çalışacak */}
      {dalleData && (

        <CardActionArea>

          <CardMedia
            component="img"
            height="440"
            image={dalleData[0]?.promptImg}
            alt="" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" textAlign={'center'} overflow={'auto'} style={{ wordWrap: 'break-word' }}>
              {}
            </Typography>
          </CardContent>

          <Box textAlign={'center'} padding={'0.3rem'}>
            <Button variant='outlined'>Variation</Button>
          </Box>

        </CardActionArea>
      )}



    </Card>
  </>
  )


}
