import { Container, Typography, Box, Button,CardActionArea } from '@mui/material'
import React from 'react'
import useDalleCall from '../hooks/useDalleCall';
import CardMedia from '@mui/material/CardMedia';
import { useSelector } from 'react-redux';
import generateGift from '../assets/gift/generateGift.gif'
import moment from 'moment'


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
      
      console.log(e.target.files[0])
      if(e.target && e.target.files[0]){
        formdata.append("image",e.target.files[0])
      }
  
    }

    console.log("imgVariation :",imgVariation)

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
                <Box sx={{padding:5}}>
                <form id="formElem"  encType='multipart/form-data' onSubmit={handleSubmit}>

                Picture : <input type="file" required id='file-input' name="image" onChange={onFileChange} />

                <Button variant='contained' type='submit'>Varitaion</Button>

                </form>
                </Box>
            )
        }

        {imgVariation.filter((item) => moment(currentTime) < moment(item.imgTime)).map((data,index)=>(

            <CardActionArea key={index} sx={{maxWidth: 500}} style={{ margin: "auto", marginTop: "3.5rem", marginBottom: "3.5rem" }}>
                                               
            <a href={data.imgUrl} target='_blank'>
            <CardMedia
            component="img"
            height="440"
            src={data.imgUrl}
            sx={{borderRadius:'0.5rem'}}
            />
            </a>

            </CardActionArea> 

        ))}
    
    
    </Container>
  )
}

export default Variation