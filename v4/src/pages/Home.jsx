import React from 'react'
import { Box, Button, Container, FormControl, Grid, TextField, Typography } from '@mui/material'
import { Dalle } from '../components/Dalle'
import useDalleCall from '../hooks/useDalleCall'
import { useState, useEffect } from 'react'
import { IoSend } from "react-icons/io5";
import { toastWarnNotify } from '../helper/ToastNotify'
import { useDispatch, useSelector } from 'react-redux'
import { InputLabel, MenuItem } from '@mui/material'
import Select from '@mui/material/Select';
import PromptInfo from '../components/PromptInfo'
import { generateData_cuisine, generateData_colors, generateData_style } from "../helper/dalleGenerate"


export const Home = () => {

  const { create_Leonardo_Image, get_Leonarda_Image } = useDalleCall()
  const { leonardoGenerationID, promptData } = useSelector((state) => state.touch)

  const [colors, setColors] = useState([])

  const [info, setInfo] = useState({
    prompt: "",
    cuisineType: "",
    colorType: "",
    styleType: ""
  })

  const [randomData, setRandomData] = useState({
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


  // create for me butonu
  const handleRandom = () => {

    setRandomData({
      prompt: "",
      cuisineType: "",
      colorType: "",
      styleType: ""
    })

    // Rastgele bir indeks oluştur
    const cuisineTypeIndex = Math.floor(Math.random() * generateData_cuisine.length);
    const styleTypeIndex = Math.floor(Math.random() * generateData_style.length);
    const colorTypeIndex = Math.floor(Math.random() * generateData_colors.length);


    // Rastgele seçilen mutfak tipini al
    const selectedCuisineType = generateData_cuisine[cuisineTypeIndex].cuisineType;
    const selectedStyleType = generateData_style[styleTypeIndex].style;
    const selectedColorType = generateData_colors[colorTypeIndex];

    setRandomData({
      ...randomData,
      ['cuisineType']: selectedCuisineType,
      ['styleType']: selectedStyleType,
      ['colorType']: [selectedColorType],
    })
    setColors([selectedColorType])

  }


  // enter tuşlandığınd çalıştır
  const handleEnterPress = (e) => {
    e.preventDefault()

    create_Leonardo_Image(info)

  }

  // submit butonu tuşlandığında çalıştır
  const handleSubmit = (e) => {
    e.preventDefault()

    create_Leonardo_Image(info)

  }



  // leonardodan gelen image ID bilgisi true mu kontrol et
  // info bilgisini ve randomData bilgisine göre get isteği gönder
  useEffect(() => {
    if (leonardoGenerationID) {
      (info.cuisineType && info.colorType && info.styleType) ? get_Leonarda_Image(leonardoGenerationID, info) : get_Leonarda_Image(leonardoGenerationID, randomData)

    }
  }, [leonardoGenerationID])


  // randomData bilgisine göre image generation işlemi yap
  useEffect(() => {
    if (randomData.cuisineType) {
      create_Leonardo_Image(randomData)
    }
  }, [randomData])





  return (


    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '900px', gap: 5 }}>

      <Dalle />

      <PromptInfo handleChange={handleChange} randomData={randomData} info={info} colors={colors} setColors={setColors} handleColorChange={handleColorChange} handleSubmit={handleSubmit} handleEnterPress={handleEnterPress} handleRandom={handleRandom} />

    </Box>


  )
}
