import React from 'react'
import { Box, Button, Container, FormControl, Grid, TextField, Typography } from '@mui/material'
import { Dalle } from '../components/Dalle'
import useDalleCall from '../hooks/useDalleCall'
import { useState, useEffect } from 'react'
import { IoSend } from "react-icons/io5";
import { toastWarnNotify } from '../helper/ToastNotify'
import { useDispatch, useSelector } from 'react-redux'
import { generateData_cuisine, generateData_colors, generateData_style } from "../helper/dalleGenerate"
import { InputLabel, MenuItem } from '@mui/material'
import Select from '@mui/material/Select';
import PromptInfo from '../components/PromptInfo'

export const Home = () => {

  const { create_Leonardo_Image, get_Leonarda_Image } = useDalleCall()
  const dispatch = useDispatch()
  const {leonardoGenerationID } = useSelector((state) => state.touch)
  const [colors, setColors] = useState([])

  const [info, setInfo] = useState({
    prompt: "",
    cuisineType: "",
    colorType: "",
    styleType: ""
  })


  // input girişleri olduğunda çalıştır
  const handleChange = (e) => {
    const { name, value } = e.target
    setInfo({ ...info, [name]: value })
  }


  // renk seçimi yapıldığında çalıştır
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


  // enter tuşlandığınd çalıştır
  const handleEnterPress = (e) => {
    e.preventDefault()

    if (info.prompt) {

      if (e.key === 'Enter') {
        create_Leonardo_Image(info)
      }
    }
    else {
      toastWarnNotify('Please enter prompt field !')
    }
  }

  // submit butonu tuşlandığında çalıştır
  const handleSubmit = (e) => {
    e.preventDefault()

    if (info.prompt) {
      create_Leonardo_Image(info)
    }
    else {
      toastWarnNotify('Please enter prompt field !')
    }
  }


  // leonardodan gelen image ID bilgisi true olduğu zaman çalıştır
  useEffect(() => {
    if (leonardoGenerationID) {
      get_Leonarda_Image(leonardoGenerationID)
    }
  }, [leonardoGenerationID])


  
  return (

    <div style={{ backgroundColor: '#dddddd', height: '100vh' }}>


      <Box sx={{ display: 'flex', flexDirection: 'column' }}>


        <Dalle />

        <PromptInfo handleChange={handleChange} info={info} colors={colors} setColors={setColors} handleColorChange={handleColorChange} handleSubmit={handleSubmit} handleEnterPress={handleEnterPress} />



      </Box>


    </div>

  )
}
