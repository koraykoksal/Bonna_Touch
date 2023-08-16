import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useSelector } from 'react-redux';

export default function History() {

  const {dalleData} = useSelector((state)=>state.touch)

  let currentTime = new Date().toLocaleTimeString()
  
  let d = new Date()
  let h = new Date().getHours()
  d.setHours(h+2)

  console.log(d.toLocaleTimeString())


  return (

    <div className='flex flex-wrap justify-center items-center gap-5 my-12'>

      {dalleData.map((data) =>(

        <Card sx={{ maxWidth: 345 }} key={data.id}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={data.promptImg}
            
          />
          <CardContent sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <Typography variant="body2" color="text.secondary">
              {data.prompt}
            </Typography>
            <Typography>
            Expiry:{data.endtime}
            </Typography>
          </CardContent>
        </CardActionArea>
        </Card>
      ))}



    </div>
  );
}