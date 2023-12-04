import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import coisineType_img from "../../assets/img/coisineType_img.png"
import colors_img from "../../assets/img/colors_img.png"
import style_img from "../../assets/img/style_img.png"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Select } from '@mui/material';
import Cuisine_Choice from '../dalle_style/Cuisine_Choice';
import Colors_Choice from '../dalle_style/Colors_Choice';
import Style_Choice from '../dalle_style/Style_Choice';
import { IoMdCloseCircle } from "react-icons/io";



const style = {
    position: 'absolute',
    top: '30%',
    left: '85%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#dddddd',
    // bgcolor: 'background.paper',
    // border: '2px solid #dddddd',
    // boxShadow: 24,
    p: 1,
    borderRadius: 3
};


const PromptStyle_Modal = ({ handleOpen, open, setOpen }) => {

    const handleClose = () => setOpen(false);

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const theme = createTheme({
        components: {
            MuiTab: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                    },
                },
            },
        },
    });


    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {/* <Typography id="modal-modal-title" variant="subtitle1" align='center'>
                        Plate Style
                    </Typography> */}

                    <Box sx={{p:2}}>
                    <IoMdCloseCircle size={30} cursor='pointer' style={{color:'#D80032'}} onClick={handleClose}/>
                    </Box>

                    <ThemeProvider theme={theme}>
                        <Tabs
                            variant="fullWidth"
                            scrollButtons
                            onChange={handleChange}
                            value={value}
                            sx={{ p: 1, alignItems: 'center', display: 'flex' }}
                        >


                            <Tab
                                label='Cuisine'
                                icon={<img src={coisineType_img} style={{ width: '50px', objectFit: 'cover' }} />}
                            />
                            <Tab
                                label='Colors'
                                icon={<img src={colors_img} style={{ width: '50px', objectFit: 'cover' }} />}
                            />
                            <Tab
                                label='Style'
                                icon={<img src={style_img} style={{ width: '50px', objectFit: 'cover' }} />}
                            />

                        </Tabs>

                        {value === 0 && <Cuisine_Choice />}
                        {value === 1 && <Colors_Choice />}
                        {value === 2 && <Style_Choice />}

                    </ThemeProvider>
                </Box>

            </Modal>


        </div>
    )
}

export default PromptStyle_Modal