import Select from '@mui/material/Select';
import { Box, FormControl, InputLabel, MenuItem } from '@mui/material'
import React from 'react'
import {generateData_colors} from "../../helper/dalleGenerate"

const Colors_Choice = ({test}) => {

  const handleChange=()=>{

    
  }

  return (

    <Box sx={{ p: 3 }}>


      <FormControl fullWidth>
        <InputLabel id="coisineType">Color Type</InputLabel>
        <Select
          labelId="coisineType"
          id="coisineType"
          name='coisineType'
          label="coisineType"
        >
          {
            generateData_colors.map((item, index) => (
              <MenuItem key={index} value={item.colorType}>{item.colorType}</MenuItem>
            ))
          }
        </Select>
      </FormControl>


    </Box>

  )
}

export default Colors_Choice