import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import { useSelector } from 'react-redux';
import {BiDownload} from 'react-icons/bi'
import axios from 'axios'

export default function History() {

  const {dalleData} = useSelector((state)=>state.touch)

  let d = new Date()
  let currentime = d.toLocaleTimeString()

  let imageFiltering=dalleData.filter(function(dalleData){

    return currentime <= dalleData.endtime
  })




  return ( 

    <div className='flex flex-wrap justify-center items-center gap-5 my-12'>

      {imageFiltering.map((data)=>(

        <Card sx={{ maxWidth: 345,maxHeight:450 }} key={data.id}>
        <CardActionArea>
          
        
          <Box>
          
          <CardMedia
            component="img"
            height="140"
            image={data.promptImg}
            
          />
          </Box>
          
          <CardContent sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>

          <Typography variant="body2" color="text.secondary">
              {data.prompt}
            </Typography>

            <Typography variant="body2" color="text.secondary">
            Expiry:{data.endtime}
            </Typography>

          </CardContent>

        </CardActionArea>
        </Card>


      ))}




    </div>
  );
}