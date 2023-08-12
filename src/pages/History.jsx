import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useSelector } from 'react-redux';

export default function History() {

  const {dalleData} = useSelector((state)=>state.touch)

  console.log("dalle data:",dalleData)

  return (

    <div className='flex flex-wrap justify-center items-center gap-5 my-12'>

      {dalleData.map((data) =>(

        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={data.promptImg}
            
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {data.prompt}
            </Typography>
          </CardContent>
        </CardActionArea>
        </Card>
      ))}



    </div>
  );
}