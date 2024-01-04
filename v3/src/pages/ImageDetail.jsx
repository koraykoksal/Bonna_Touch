import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Container } from '@mui/material';

const ImageDetail = () => {

    const {state} = useLocation()
    const {id} = useParams()


  return (
    
    <Container sx={{display:'flex',justifyContent:'center'}}>
    
        <Card sx={{ maxWidth: 545,maxHeight:550 }} key={state.id}>
            <CardActionArea>
            
            <Box>
            
            {/* <CardMedia
                component="img"
                height="140"
                image={state.promptImg}
            /> */}

            <a href={state.promptImg} download={state.promptImg} target='_blank'><img src={state.promptImg}/></a>

            </Box>
            
            <CardContent sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>

            <Typography variant="body2" color="text.secondary">
                {state.prompt}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                Expiry:{state.endtime}
                </Typography>

            </CardContent>

            </CardActionArea>

        </Card>

    </Container>
    

  )
}

export default ImageDetail