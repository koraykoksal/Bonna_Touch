import { Container, Typography, Box, Button,CardActionArea } from '@mui/material'
import React from 'react'
import useDalleCall from '../hooks/useDalleCall';
import CardMedia from '@mui/material/CardMedia';
import { useSelector } from 'react-redux';
import generateGift from '../assets/gift/generateGift.gif'
import moment from 'moment'
import { useState,useEffect } from 'react';
import { useRef } from 'react';

const Variation = () => {

    const {getImageVariationData} = useDalleCall()
    const {loadingVariation,imgVariation} = useSelector((state)=>state.variation)


    const currentTime = moment().format()

    let formdata=new FormData()



    const handleSubmit=async(e)=>{
      e.preventDefault();
      getImageVariationData('variations',formdata)
    }
  
    const onFileChange=(e)=>{

      //* inputdan yüklenen dosya gösterilir
      let chosenImage = document.getElementById('chosen-image')
      let reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload=()=>{
        chosenImage.setAttribute('src',reader.result)
      }
      
      //* yüklenen dosya yakalanır
      if(e.target && e.target.files[0]){
        formdata.append("image",e.target.files[0])
      }
      
    }

    


  return (
    
    <Container sx={{justifyContent:'center',display:'flex',flexDirection:'column',alignItems:'center',mb:5}}>

        <Box padding={2}>
        <Typography variant='h5' align='center' mb={5} color='#FF6969'>
            Variation
        </Typography>
        </Box>
    
        {
            loadingVariation ? (
                <Box sx={{ display: 'flex',justifyContent:'center',mt:'5rem'}} >
                <img src={generateGift} alt="" />
                </Box>
            ):(
                <Box sx={{padding:3,border:'1px solid #EEEEEE',borderRadius:'10px'}}>
                <form id="formElem"  encType='multipart/form-data' onSubmit={handleSubmit}>

                Picture : <input type="file" required id='file-input' name="image" onChange={onFileChange} accept='image/png' size='1900000'/>

                <Button variant='contained' type='submit'>Varitaion</Button>

                </form>
                </Box>
            )
        }

        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:3}}>

        <CardActionArea sx={{maxWidth: 500}} style={{ margin: "auto", marginTop: "3.5rem", marginBottom: "3.5rem" }}>

            <Typography variant='subtitle2' sx={{letterSpacing:3}}>Original Image</Typography>

            <CardMedia
            id='chosen-image'
            component="img"
            height="440"
            sx={{borderRadius:'0.5rem'}}
            />

          </CardActionArea> 

        {imgVariation.filter((item) => moment(currentTime) < moment(item.imgTime)).map((data,index)=>(

        <CardActionArea key={index} sx={{maxWidth: 500}} style={{ margin: "auto", marginTop: "3.5rem", marginBottom: "3.5rem" }}>

          <Typography variant='subtitle2' sx={{letterSpacing:3}}>Variation Image</Typography>

          <CardMedia
          component="img"
          height="440"
          src={data.imgUrl}
          sx={{borderRadius:'0.5rem'}}
          />

        </CardActionArea> 

        ))}

        </Box>
        




        
    
    
    </Container>
  )
}

export default Variation