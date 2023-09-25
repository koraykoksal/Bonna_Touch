import React from 'react'
import { StyleImg } from './Dalle.style'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, Container, filledInputClasses } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import useDalleCall from '../hooks/useDalleCall';
import imageFile from '../assets/img/img1.png'
import {saveAs} from 'file-saver'
import generateGift from '../assets/gift/generateGift.gif'
import imgV from '../assets/img/imgV.png'


export const Dalle = () => {


  const {getImageVariationData} = useDalleCall()

  const {loading,dalleImage} = useSelector((state)=>state.touch)

  const d = new Date()

  const hour = d.getHours()
  const minute = d.getMinutes()
  const year = d.getFullYear()
  const month = d.getMonth()+1
  const day = d.getDate()

  const datetime = `${year}-${month}-${day} ${hour}:${minute}`


  const [formD, setformD] = useState({})


  const [nn, setn] = useState("2")
  const [imgg, setimg] = useState()
  const [sizee, setsize] = useState("1024x1024")

  const handleChange=(e)=>{

    let imgName= ""
    const input = e.target;

    for (let i = 0; i < input.files.length; i++) {
      console.log(input.files[i]);
      imgName=input.files[i]
    }

    setimg({...imgg,image:imgName,n:2,size:'1024x1024'})

    // setimg({...imgg,[e.target.files]:e.target.files[0],n:2,size:'1024x1024'})

  }
  



  const handleVariation=(e)=>{
    e.preventDefault();

    //setformD({...formD,image:imgg,n:nn,size:sizee})

    getImageVariationData('variations',imgg)

  }

  

  return( 


  <>

    <Container sx={{padding:5}}>
    <form id="formElem" onChange={handleChange} onSubmit={handleVariation}>

      Picture : <input type="file" id='file-input' name="image" accept="image/*"  />

      <input type="submit" />

    </form>
    </Container>
    

    {loading && (

    <Box sx={{ display: 'flex',justifyContent:'center',mt:'5rem'}} >

      <img src={generateGift} alt="" />
      

    </Box>


    )}



    {/* {
        dalleImage.filter(item => new Date(datetime) <= new Date(item.imgTime)).map((data)=>(

          <CardActionArea  sx={{maxWidth: 500}} style={{ margin: "auto", marginTop: "3.5rem", marginBottom: "3.5rem" }}>
                                
          <CardMedia
            component="img"
            height="440"
            image={data.imgUrl}
            alt=""
            sx={{borderRadius:'0.5rem'}}
            />




          <CardContent>
            <Typography variant="body2" color="text.secondary" textAlign={'center'} overflow={'auto'} style={{ wordWrap: 'break-word' }}>
              {data.userPrompt}
            </Typography>
          </CardContent>

          <Box textAlign={'center'} padding={'0.3rem'}>
            <Button variant='outlined' sx={{'&:hover':{backgroundColor:'#3AB0FF',color:'#ffff'}}} onClick={handleVariation}>Variation</Button>
          </Box>

          </CardActionArea> 
        
        ))
    } */}







  </>
  )


}
