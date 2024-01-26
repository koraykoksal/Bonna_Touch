import React from 'react'
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { typoStyle } from "../../styles/GlobalStyle"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '80%',
    height: 'auto',
    borderRadius:'5px',
    // bgcolor: 'background.paper',
    bgcolor: '#dddddd',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



const ImageDetail_Modal = ({ open, handleClose, selectedData }) => {

    const colors = selectedData?.text?.colorType ? selectedData.text.colorType.join('-') : '';


    
    return (
        <div>
            <Modal
                open={open}
                onClose={() => { handleClose() }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                
            >
                <Box sx={style}>

                    <CloseIcon sx={{ color: '#C70039', fontSize: 28, mr: 1, '&:hover': { cursor: 'pointer', color: '#900C3F' } }} onClick={() => { handleClose() }} />


                    <Box display={'flex'} justifyContent={'center'} gap={3} p={1}>
                        <Typography variant='subtitle2' style={typoStyle}>Cuisine Type: {selectedData?.text?.cuisineType}</Typography>

                        <Typography variant='subtitle2' style={typoStyle}>Style Type: {selectedData?.text?.styleType}</Typography>

                        <Typography variant='subtitle2' style={typoStyle}>Colors: {colors}</Typography>
                    </Box>

                    <Box display={'flex'} justifyContent={'center'}>
                        <img src={selectedData.url}  style={{ display: 'flex', justifyContent: 'center',borderRadius:'5px' ,maxWidth:'100%',height:'auto' }} />
                    </Box>




                </Box>



            </Modal>

        </div>
    )
}

export default ImageDetail_Modal