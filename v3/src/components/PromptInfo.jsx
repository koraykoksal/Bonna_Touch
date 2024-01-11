import React from 'react'
import { Box, Button, Container, FormControl, Grid, TextField, Typography } from '@mui/material'
import { generateData_cuisine, generateData_colors, generateData_style } from "../helper/dalleGenerate"
import { InputLabel, MenuItem } from '@mui/material'
import Select from '@mui/material/Select';


const PromptInfo = ({ handleChange, info }) => {

    return (
        <div>


            <Container sx={{ mt: 5, justifyContent: 'center', display: 'flex', alignItems: 'center', gap: 5 }}>

                <FormControl fullWidth style={{ width: '200px'}}>
                    <InputLabel id="cuisineType"  sx={{fontSize:'15px',margin:'-5px 0 5px'}}>
                        Coisine Type
                    </InputLabel>
                    <Select
                        labelId="cuisineType"
                        id="cuisineType"
                        name='cuisineType'
                        label="cuisineType"
                        value={info.cuisineType}
                        onChange={handleChange}
                        style={{ maxHeight: '40px',borderRadius:20,fontSize:'15px' }}

                    >
                        {
                            generateData_cuisine.map((item, index) => (
                                <MenuItem key={index} value={item.cuisineType}>{item.cuisineType}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>

                <FormControl style={{ width: '200px' }}>
                    <InputLabel id="colorType" 
                    sx={{
                        fontSize: '15px',
                        margin:'-5px 0 5px'
                    }}
                    >
                        Color Type
                    </InputLabel>
                    <Select
                        labelId="colorType"
                        id="colorType"
                        name='colorType'
                        label="colorType"
                        value={info.colorType}
                        onChange={handleChange}
                        style={{ height: '45px',borderRadius:20 ,fontSize:'15px'}}
                    >
                        {
                            generateData_colors.map((item, index) => (
                                <MenuItem key={index} value={item.colorType}>{item.colorType}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>

                <FormControl style={{ width: '200px' }}>
                    <InputLabel id="styleType"
                    sx={{
                        fontSize: '15px',
                        margin:'-5px 0 5px'
                    }}
                    >
                        Style Type
                        
                    </InputLabel>
                    <Select
                        labelId="styleType"
                        id="styleType"
                        name='styleType'
                        label="styleType"
                        value={info.styleType}
                        onChange={handleChange}
                        style={{ height: '45px',borderRadius:20,fontSize:'15px' }}
                    >
                        {
                            generateData_style.map((item, index) => (
                                <MenuItem key={index} value={item.style}>{item.style}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>


            </Container>


        </div>
    )
}

export default PromptInfo