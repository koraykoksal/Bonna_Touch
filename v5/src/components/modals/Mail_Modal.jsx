import React from 'react'
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { fontStyle, typoStyle } from "../../styles/GlobalStyle"
import { salesData } from "../../helper/data"
import { useState, useEffect } from 'react';
import { Button, Container, FormControl, Grid, TextField } from '@mui/material'
import { InputLabel, MenuItem } from '@mui/material'
import Select from '@mui/material/Select';
import useDalleCall from '../../hooks/useDalleCall';
import { useSelector } from 'react-redux';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 560,
    height: 400,
    borderRadius: '5px',
    // bgcolor: 'background.paper',
    bgcolor: '#dddddd',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Mail_Modal = ({ open, handleClose, userInfo }) => {

    const mailSubject = 'Bonna Touch Design AI Support Information'
    const {sendMail} = useDalleCall()
    const {leonardoGenerationAllData} = useSelector((state)=>state.touch)
    const [data, setdata] = useState([])
    const [info, setinfo] = useState({
        selectedSales: ""
    })

    useEffect(() => {
        let dizi = []
        salesData.forEach(element => {
            if (element.country == userInfo.country) {
                dizi.push(element)
                return { ...element, element }
            }
        })

        setdata(dizi)

    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setinfo({ ...info, [name]: value })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        sendMail(info,leonardoGenerationAllData,mailSubject)
    }


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



                    <Box display={'flex'} flexDirection={'column'} gap={2} mt={3} p={5} component={'form'} onSubmit={handleSubmit}>

                        <Typography variant='subtitle1' style={fontStyle} align='left'>Choice Sales Personnel</Typography>

                        <FormControl fullWidth>
                            <InputLabel id="selectedSales">Sales Personnel</InputLabel>
                            <Select
                                required
                                labelId="selectedSales"
                                id="selectedSales"
                                name='selectedSales'
                                label="selectedSales"
                                value={info.selectedSales}
                                onChange={handleChange}
                                style={{ borderRadius: 25, fontSize: '15px', fontStyle }}
                            >
                                {
                                    data.map((item, index) => (
                                        <MenuItem key={index} value={item.mail} sx={{ fontStyle }}>{item.salesPersonel}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>


                        <Button variant='contained' type='submit' sx={{ fontStyle, borderRadius: 20, mt: 5,letterSpacing:5 }}>Send</Button>

                    </Box>



                </Box>



            </Modal>

        </div>
    )
}

export default Mail_Modal