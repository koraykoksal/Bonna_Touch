import React from 'react'
import { Box, Button, Container, FormControl, Grid, TextField, Typography } from '@mui/material'
import { Dalle } from '../components/Dalle'
import useDalleCall from '../hooks/useDalleCall'
import { useState, useEffect } from 'react'
import { IoSend } from "react-icons/io5";
import { toastWarnNotify } from '../helper/ToastNotify'
import { useDispatch, useSelector } from 'react-redux'
import { updatePrompts } from '../features/touchSlice';
import { generateData_cuisine, generateData_colors, generateData_style } from "../helper/dalleGenerate"
import { InputLabel, MenuItem } from '@mui/material'
import Select from '@mui/material/Select';
import PromptInfo from '../components/PromptInfo'

export const Home = () => {

  const { create_Leonardo_Image, get_Leonarda_Image } = useDalleCall()
  const dispatch = useDispatch()

  const { user_PromptInfo, leonardoGenerationID } = useSelector((state) => state.touch)
  const [colors, setColors] = useState([])

  const [info, setInfo] = useState({
    prompt: "",
    cuisineType: "",
    colorType: "",
    styleType: ""
  })

  const inputStyle = {
    backgroundColor: 'transparent',
    border: '0.7px solid #706b6b',
    borderRadius: '20px',
    height: '45px',
    width: '80%',
    padding: 10,
    color: '#000000'
  }


  const handleChange = (e) => {
    const { name, value } = e.target
    setInfo({ ...info, [name]: value })
    dispatch(updatePrompts({ [name]: value }))
  }


  const handleColorChange = (event) => {

    const {
      target: { value },
    } = event;
    setColors(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );

    setInfo({
      ...info,
      colorType: typeof value === 'string' ? value.split(',') : value,
    });

  };



  const handleEnterPress = (e) => {
    e.preventDefault()

    if (info.prompt) {

      if (e.key === 'Enter') {
        create_Leonardo_Image()
      }
    }
    else {
      toastWarnNotify('Please enter prompt field !')
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    if (info.prompt && user_PromptInfo) {
      create_Leonardo_Image()
    }
    else {
      toastWarnNotify('Please enter prompt field !')
    }
  }


  useEffect(() => {
    setInfo({
      prompt: user_PromptInfo.prompt,
      cuisineType: user_PromptInfo.cuisineType,
      colorType: user_PromptInfo.colorType,
      styleType: user_PromptInfo.styleType
    })

  }, [])


  useEffect(() => {
    get_Leonarda_Image(leonardoGenerationID)
  }, [leonardoGenerationID])


  const run = () => {
    get_Leonarda_Image(leonardoGenerationID)
  }


  console.log(info)


  return (

    <>


      <Box sx={{ backgroundColor: '#dddddd', height: '100vh', display: 'flex', flexDirection: 'column' }}>

        <Container >
          <Dalle />
        </Container>


        <Container>
          <PromptInfo handleChange={handleChange} info={info} colors={colors} setColors={setColors} handleColorChange={handleColorChange} />
        </Container>


        <Container sx={{ mt: 5, justifyContent: 'center', display: 'flex', alignItems: 'center', gap: 1 }}>


          {/* <TextField
            required
            fullWidth
            name='prompt'
            label='Prompt'
            variant='outlined'
            type='text'
            value={info.prompt}
            onChange={handleChange}
            // onKeyUp={handleEnterPress}
            style={{ borderRadius: '30px' }}
            inputProps={{
              style: { height: '15px'},
            }}
          /> */}

          <input type='text' required name='prompt' value={info.prompt} onChange={handleChange} style={inputStyle} placeholder='Prompt' />

          <IoSend size={35} color='#000000' cursor='pointer' onClick={handleSubmit} />
          <Button onClick={run}>
            RUN
          </Button>

        </Container>

      </Box>


    </>

  )
}
