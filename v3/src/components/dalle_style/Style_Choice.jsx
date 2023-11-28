import Select from '@mui/material/Select';
import { Box, FormControl, InputLabel, MenuItem } from '@mui/material'
import React from 'react'
import {generateData_style} from "../../helper/dalleGenerate"

const Style_Choice = () => {
  return (
    

    <Box sx={{p:3}}>


    <FormControl fullWidth>
      <InputLabel id="coisineType">Style Type</InputLabel>
      <Select
       labelId="coisineType"
       id="coisineType"
       name='coisineType'
       label="coisineType"
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