import { Container, Typography, Box, Button } from '@mui/material'
import React from 'react'
import useDalleCall from '../hooks/useDalleCall';

const Variation = () => {

    const {getImageVariationData} = useDalleCall()

    let formdata=new FormData()

    const handleSubmit=async(e)=>{
  
      e.preventDefault();
  
      getImageVariationData('variations',formdata)
  
    }
  
    const onFileChange=(e)=>{
  
      console.log(e.target.files[0])
      if(e.target && e.target.files[0]){
        formdata.append("image",e.target.files[0])
      }
  
    }


  return (
    
    <Container sx={{justifyContent:'center',display:'flex',flexDirection:'column',alignItems:'center'}}>

        <Box padding={2}>
        <Typography variant='h5' align='center' mb={5} color='#FF6969'>
            Variation
        </Typography>
        </Box>
    
        <Box sx={{padding:5}}>
        <form id="formElem"  encType='multipart/form-data' onSubmit={handleSubmit}>

        Picture : <input type="file" id='file-input' name="image" onChange={onFileChange} />

        <Button variant='contained'>Varitaion</Button>

        </form>
        </Box>
    
    
    </Container>
  )
}

export default Variation