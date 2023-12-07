import Select from '@mui/material/Select';
import { Box, FormControl, InputLabel, MenuItem } from '@mui/material'
import React from 'react'
import { generateData_colors } from "../../helper/dalleGenerate"
import { useDispatch, useSelector } from 'react-redux'
import { updatePrompts } from '../../features/touchSlice';

const Colors_Choice = () => {

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target;

    dispatch(updatePrompts({ [name]: value }))

  }

  return (

    <Box sx={{ p: 3 }}>


      <FormControl fullWidth>
        <InputLabel id="colorType">Color Type</InputLabel>
        <Select
          labelId="colorType"
          id="colorType"
          name='colorType'
          label="colorType"
          onChange={handleChange}
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