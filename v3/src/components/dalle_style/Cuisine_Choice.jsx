import Select from '@mui/material/Select';
import { Box, FormControl, InputLabel, MenuItem } from '@mui/material'
import React from 'react'
import {generateData_cuisine} from "../../helper/dalleGenerate"
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { updatePrompts } from '../../features/touchSlice';


const Coisine_Choice = () => {

  const dispatch = useDispatch()

  const handleChange=(e)=>{

    const {name,value} = e.target;

    dispatch(updatePrompts({[name]:value}))
  }



  return (

    <Box sx={{p:3}}>


    <FormControl fullWidth>
      <InputLabel id="cuisineType">Coisine Type</InputLabel>
      <Select
       labelId="cuisineType"
       id="cuisineType"
       name='cuisineType'
       label="cuisineType"
       onChange={handleChange}
      >
        {
          generateData_cuisine.map((item,index)=>(
            <MenuItem key={index} value={item.cuisineType}>{item.cuisineType}</MenuItem>
          ))
        }
      </Select>
    </FormControl>


    </Box>
  )
}

export default Coisine_Choice