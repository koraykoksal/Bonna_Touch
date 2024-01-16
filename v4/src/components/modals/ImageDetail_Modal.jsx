import React from 'react'
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const ImageDetail_Modal = ({ open, handleClose, selectedData }) => {


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


                    <Box display={'flex'} justifyContent={'center'} gap={1}>
                        <Typography variant='subtitle2' color={'black'}>Cuisine Type: {selectedData?.text?.cuisineType} - Style Type: {selectedData?.text?.styleType}</Typography>
                    </Box>

                    <img src={selectedData.url} height={'600'} style={{display:'flex',justifyContent:'center'}}/>


                </Box>



            </Modal>

        </div>
    )
}

export default ImageDetail_Modal