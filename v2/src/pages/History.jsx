import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import { useSelector } from 'react-redux';
import {BiDownload} from 'react-icons/bi'
import axios from 'axios'
import ImgModal from '../components/modal/ImgModal';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function History() {


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const navi=useNavigate()

  const {dalleData} = useSelector((state)=>state.touch)

  const [choice, setchoice] = useState({})

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
            onClick={()=>{
              handleOpen()
              navi(`/${data.id}`,{state:data})
            }}
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

        <ImgModal open={open} setOpen={setOpen} handleOpen={handleOpen}/>
       
        </Card>

      ))}

     
        

    </div>
  );
}