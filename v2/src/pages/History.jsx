import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import { useSelector } from 'react-redux';
import {BiDownload} from 'react-icons/bi'
import axios from 'axios'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function History() {


  const navi=useNavigate()

  const {dalleData} = useSelector((state)=>state.touch)

  const [choice, setchoice] = useState({})
 
  const currentTime = new Date().getHours()

  const d = new Date()

  const hour = d.getHours()
  const minute = d.getMinutes()
  const year = d.getFullYear()
  const month = d.getMonth()+1
  const day = d.getDay()

  const datetime = `${year}-${month}-${day} ${hour}:${minute}`

  console.log(dalleData)
  

  return ( 

    <div className='flex flex-wrap justify-center items-center gap-5 my-12'>

      {dalleData.filter(item=>new Date(datetime) <= new Date(item.imgTime)).map((data)=>(

      <Card sx={{ maxWidth: 345,maxHeight:450 }} key={data.id}>
        <CardActionArea>
          

          <Box>
          

          <a href={data.promptImg} download={data.promptImg} target='_blank'>
          <CardMedia
            component="img"
            height="140"
            image={data.promptImg}
            // onClick={()=>{
            //   handleOpen()
            //   navi(`/${data.id}`,{state:data})
            // }}
          />
          </a>

          </Box>
          
          <CardContent sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>

          <Typography variant="body2" color="text.secondary">
              {data.prompt}
            </Typography>

            <Typography variant="body2" color="text.secondary">
            Expiry:{data.imgTime}
            </Typography>

          </CardContent>

        </CardActionArea>

      </Card>

      ))}

     
        

    </div>
  );
}