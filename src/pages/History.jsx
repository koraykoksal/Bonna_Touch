import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function History() {


  return (

    <div className='flex flex-wrap justify-center items-center gap-2'>

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://oaidalleapiprodscus.blob.core.windows.net/private/org-ihc78FUMtIFOcUTA1SSoRdA2/user-07fJVeRAgJCFGlAVQnh9phcH/img-toRbQQnkrw7dMWfSU5Qe1ybA.png?st=2023-08-11T06%3A33%3A51Z&se=2023-08-11T08%3A33%3A51Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-08-10T20%3A58%3A29Z&ske=2023-08-11T20%3A58%3A29Z&sks=b&skv=2021-08-06&sig=Y2zBGaXHzg8iiN386ErKQJml8/l%2BfOe/w/g4k%2BV1SYI%3D"
          alt="BonnaTouch Image Generate"
          
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}