import Select from '@mui/material/Select';
import { Box, FormControl, InputLabel, MenuItem } from '@mui/material'
import React from 'react'
import {generateData_cuisine} from "../../helper/dalleGenerate"

const Coisine_Choice = () => {


  return (

    <Box sx={{p:3}}>


    <FormControl fullWidth>
      <InputLabel id="coisineType">Coisine Type</InputLabel>
      <Select
       labelId="coisineType"
       id="coisineType"
       name='coisineType'
       label="coisineType"
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