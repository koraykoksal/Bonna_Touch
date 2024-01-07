import Select from '@mui/material/Select';
import { Box, FormControl, InputLabel, MenuItem } from '@mui/material'
import React from 'react'
import {generateData_style} from "../../helper/dalleGenerate"
import { useDispatch, useSelector } from 'react-redux'
import { updatePrompts } from '../../features/touchSlice';
import { useState } from 'react';



const Style_Choice = () => {


  const dispatch = useDispatch()
  const [info, setInfo] = useState({
    styleType:""
  })

  const handleChange=(e)=>{

    const {name,value} = e.target;
    setInfo({...info,[name]:value})
    dispatch(updatePrompts({['styleType']:value}))
  }


  return (
    

    <Box sx={{p:3}}>


    <FormControl fullWidth>
      <InputLabel id="styleType">Style Type</InputLabel>
      <Select
       labelId="styleType"
       id="styleType"
       name='styleType'
       label="styleType"
       value={info.styleType}
       onChange={handleChange}
      >
        {
          generateData_style.map((item,index)=>(
            <MenuItem key={index} value={item.style}>{item.style}</MenuItem>
          ))
        }
      </Select>
    </FormControl>


    </Box>

  )
}

export default Style_Choice