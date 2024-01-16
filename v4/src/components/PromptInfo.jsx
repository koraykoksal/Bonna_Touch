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


const inputStyle = {
    backgroundColor: 'transparent',
    border: '2px solid #858484',
    borderRadius: '20px',
    height: '45px',
    width: '80%',
    padding: 10,
    color: '#000000'
}


const allColors = [
    "Blue",
    "Green",
    "Beige",
    "Brown",
    "Earth Tones",
    "Gray",
    "Black",
    "Colourful",

]

const PromptInfo = ({ handleChange, info, colors, setColors, handleColorChange,handleSubmit,handleEnterPress }) => {


    return (

        <div style={{backgroundColor:'#dddddd'}}>

            <Box display={'flex'} flexDirection={'column'} gap={6} p={5}>

                <Container sx={{ mt: 5, justifyContent: 'center', display: 'flex', alignItems: 'center', gap: 5 }}>


                    <FormControl fullWidth style={{ width: '200px' }}>
                        <InputLabel id="cuisineType" sx={{ fontSize: '15px', margin: '-5px 0 5px' }}>
                            Coisine
                        </InputLabel>
                        <Select
                            required
                            labelId="cuisineType"
                            id="cuisineType"
                            name='cuisineType'
                            label="cuisineType"
                            value={info.cuisineType}
                            onChange={handleChange}
                            style={{ maxHeight: '40px', borderRadius: 20, fontSize: '15px' }}

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
                                <MenuItem key={color} value={color}>
                                    <Checkbox checked={colors.indexOf(color) > -1} size='xsmall' />
                                    <ListItemText primary={color} />
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
                                    <MenuItem key={index} value={item.style}>{item.style}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>

                </Container>

                <Box display={'flex'} justifyContent={'center'} gap={3} alignItems={'center'}>
                    <input type='text' required name='prompt' value={info.prompt} onChange={handleChange} style={inputStyle} placeholder='Prompt' onKeyUp={handleEnterPress}/>
                    {/* <IoSend size={35} color='#000000' cursor='pointer' onClick={handleSubmit} /> */}
                    <BsArrowRightSquare size={35} color='#858484' cursor='pointer' onClick={handleSubmit} />
                </Box>
            </Box>




        </div>
    )
}

export default PromptInfo