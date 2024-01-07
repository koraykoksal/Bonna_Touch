import React from 'react'
import { Box, Container, FormControl, Grid, TextField, Typography } from '@mui/material'
import { Dalle } from '../components/Dalle'
import useDalleCall from '../hooks/useDalleCall'
import { useState } from 'react'
import { RiSendPlane2Fill } from "react-icons/ri";
import InputAdornment from '@mui/material/InputAdornment';
import { toastWarnNotify } from '../helper/ToastNotify'
import { useDispatch, useSelector } from 'react-redux'
import { updatePrompts } from '../features/touchSlice';


export const Home = () => {

  const { create_Dalle2_Image, create_Dalle3_Image, create_Leonardo_Image } = useDalleCall()
  const dispatch = useDispatch()

  const {dalleUser_PromptInfo} = useSelector((state)=>state.touch)

  const [info, setInfo] = useState({
    prompt: ""
  })



  const handleChange = (e) => {
    const { name, value } = e.target
    setInfo({ ...info, [name]: value })
    dispatch(updatePrompts({ ['prompt']: value }))
  }



  const handleEnterPress = (e) => {
    e.preventDefault()

    if (info) {

      if (e.key === 'Enter') {

        info.prompt.toLocaleLowerCase().trim()
        create_Dalle3_Image('generations')

      }
    }
    else {
      toastWarnNotify('Please enter prompt field !')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (info) {
      info.prompt.toLocaleLowerCase().trim()
      create_Dalle3_Image('generations')
    }
    else {
      toastWarnNotify('Please enter prompt field !')
    }
  }


  console.log(dalleUser_PromptInfo)

  return (

    <>


      <Box sx={{ backgroundColor: '#dddddd', height: '800px', display: 'flex', flexDirection: 'column' }}>

        <Container >
          <Dalle />
        </Container>

        <Container sx={{ mt: 5, justifyContent: 'center', display: 'flex', alignItems: 'center', gap: 5 }}>
          
          <Grid sx={{display:'flex',justifyContent:'center',gap:1}}>
          <Typography variant='subtitle2'>User Prompt :</Typography>
          <Typography variant='subtitle2' fontWeight={700}> {dalleUser_PromptInfo.prompt}</Typography>
          </Grid>
          
          <Grid sx={{display:'flex',justifyContent:'center',gap:1}}>
          <Typography variant='subtitle2'>Cuisine :</Typography>
          <Typography variant='subtitle2' fontWeight={700}>{dalleUser_PromptInfo.cuisineType}</Typography>
          </Grid>

          <Grid sx={{display:'flex',justifyContent:'center',gap:1}}>
          <Typography variant='subtitle2'>Color :</Typography>
          <Typography variant='subtitle2' fontWeight={700}>{dalleUser_PromptInfo.colorType}</Typography>
          </Grid>

          <Grid sx={{display:'flex',justifyContent:'center',gap:1}}>
          <Typography variant='subtitle2'>Style :</Typography>
          <Typography variant='subtitle2' fontWeight={700}>{dalleUser_PromptInfo.styleType}</Typography>
          </Grid>


        </Container>


        <Container sx={{ mt: 5, justifyContent: 'center', display: 'flex', alignItems: 'center', gap: 1 }}>


          <TextField
            required
            fullWidth
            name='prompt'
            label='Prompt'
            variant='outlined'
            type='text'
            value={info.prompt}
            onChange={handleChange}
            onKeyUp={handleEnterPress}

            inputProps={{
              style: { height: '15px' },
            }}

          />

          <RiSendPlane2Fill size={35} color='#000000' cursor='pointer' onClick={handleSubmit} />

        </Container>

      </Box>


    </>

  )
}
