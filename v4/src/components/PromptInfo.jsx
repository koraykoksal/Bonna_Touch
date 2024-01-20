import React from 'react'
import { Box, Button, Container, FormControl, Grid, TextField, Typography } from '@mui/material'
import { generateData_cuisine, generateData_colors, generateData_style } from "../helper/dalleGenerate"
import { InputLabel, MenuItem } from '@mui/material'
import Select from '@mui/material/Select';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import OutlinedInput from '@mui/material/OutlinedInput';
import { IoSend } from "react-icons/io5";
import { BsArrowRightSquare } from "react-icons/bs";
import { fontStyle, inputStyle } from '../styles/GlobalStyle';
import createGenerateIcon from "../assets/img/createGenerate-icon.png"
import { LuDices } from "react-icons/lu";



const ITEM_HEIGHT = 78;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 200,
        },
    },
};



const PromptInfo = ({ handleChange, info,colors, setColors, handleColorChange, handleSubmit, handleEnterPress, handleRandom }) => {

    console.log("colors: ",colors)
    
    return (


        <Container display={'flex'} flexDirection={'column'} gap={6} p={5}>

            <Container sx={{ mt: 5, justifyContent: 'center', display: 'flex', alignItems: 'center', gap: 5 }}>


                <FormControl fullWidth style={{ width: '200px' }}>
                    <InputLabel id="cuisineType" sx={{ fontSize: '15px', margin: '-5px 0 5px' }}>
                        Cuisine
                    </InputLabel>
                    <Select
                        required
                        labelId="cuisineType"
                        id="cuisineType"
                        name='cuisineType'
                        label="cuisineType"
                        value={info.cuisineType}
                        onChange={handleChange}
                        style={{ maxHeight: '40px',borderRadius: 20, fontSize: '15px' }}

                    >
                        {
                            generateData_cuisine.map((item, index) => (
                                <MenuItem key={index} value={item.cuisineType} sx={{ fontStyle }}>{item.cuisineType}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>


                <FormControl style={{ width: '200px' }}>
                    <InputLabel id="colorType"
                        sx={{
                            fontSize: '15px',
                            margin: '-5px 0 5px'
                        }}
                    >
                        Color
                    </InputLabel>
                    <Select
                        required
                        multiple
                        value={colors}
                        onChange={handleColorChange}
                        input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                        style={{ maxHeight: '40px', borderRadius: 20, fontSize: '15px' }}
                    >
                        {generateData_colors.map((color) => (
                            <MenuItem key={color} value={color} >
                                <Checkbox checked={colors.indexOf(color) > -1} size='xsmall' />
                                <ListItemText primary={color} sx={{ fontStyle }} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>


                <FormControl style={{ width: '200px' }}>
                    <InputLabel id="styleType"
                        sx={{
                            fontSize: '15px',
                            margin: '-5px 0 5px'
                        }}
                    >
                        Style

                    </InputLabel>
                    <Select
                        required
                        labelId="styleType"
                        id="styleType"
                        name='styleType'
                        label="styleType"
                        value={info.styleType}
                        onChange={handleChange}
                        style={{ height: '40px', borderRadius: 20, fontSize: '15px' }}
                    >
                        {
                            generateData_style.map((item, index) => (
                                <MenuItem key={index} value={item.style} sx={{ fontStyle }}>{item.style}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>

            </Container>

            <Box display={'flex'} justifyContent={'center'} gap={3} alignItems={'center'} mt={8}>


                <input style={inputStyle} type='text' name='prompt' value={info.prompt} onChange={handleChange} placeholder='Enter prompt here...' />


                <img src={createGenerateIcon} height={'50px'} style={{ cursor: 'pointer' }} onClick={handleSubmit} />

            </Box>

            <Container sx={{ display: 'flex', justifyContent: 'center', gap: 1, alignItems: 'center', mt: 3 }}>

                <Button variant='outlined' size='small' 
                onClick={handleRandom}
                startIcon={<LuDices color='black' size={20} />}
                sx={{
                    p: 0.3,
                    height:'auto',
                    fontSize: 15,
                    fontFamily: fontStyle,
                    textTransform: 'none',
                    letterSpacing: 3,
                    color: 'black',
                    border: 'none',
                    ':hover': { border: 'none', backgroundColor: 'transparent', textDecoration: 'underline' }
                }}>Create for me</Button>

            </Container>

        </Container>


    )
}

export default PromptInfo