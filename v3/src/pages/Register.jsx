import React from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, Container, TextField, FormControlLabel, FormGroup } from '@mui/material';
import { useState } from 'react';
import { countries, companyType } from "../helper/data"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useAuthCall from '../hooks/useAuthCall';
import Checkbox from '@mui/material/Checkbox';
import ReadUnderstood from '../components/ReadUnderstood';


export const Register = () => {

  const { register } = useAuthCall()
  const [okudumAnladim, setokudumAnladim] = useState(false)
  const [info, setInfo] = useState({
    name: "",
    surname: "",
    job: "",
    companyName: "",
    country: "",
    email: "",
    tel: "",
    age: "",
    companyType: "",

  })

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
  }

  const handleOkudumAnladim = (e) => {

    if (!okudumAnladim) {
      handleOpen()
      setokudumAnladim(true)
    }
    else {
      setokudumAnladim(false)
      setOpen(false)
    }

  }

  const handleChage = (e) => {

    const { name, value } = e.target

    setInfo({ ...info, [name]: value })


  }

  const handleSubmit = (e) => {

    e.preventDefault()
    register("register", info)

  }




  return (

    <div style={{ backgroundColor: '#dddddd', height: '100vh' }}>


      <Box display={'flex'} flexDirection={'column'} gap={5} alignItems={'center'} p={3}>

        <Typography align='center' fontWeight={700} variant='subtitle2' p={3} color={'black'} fontSize={'22px'} letterSpacing={5}>Register</Typography>


        <Container sx={{ display: 'flex', flexDirection: 'column', gap: 5, p: 3 }} maxWidth='lg' component={'form'} onSubmit={handleSubmit}>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>

            <TextField
              fullWidth
              required
              type='text'
              id='name'
              name='name'
              label='Name'
              variant="outlined"
              onChange={handleChage}
            />

            <TextField
              fullWidth
              required
              type='text'
              id='surname'
              name='surname'
              label='Surname'
              variant="outlined"
              onChange={handleChage}
            />

          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>

            <TextField
              fullWidth
              required
              type='text'
              id='job'
              name='job'
              label='Job'
              variant="outlined"
              onChange={handleChage}
            />

            <TextField
              fullWidth
              required
              type='text'
              id='email'
              name='email'
              label='Email'
              variant="outlined"
              onChange={handleChage}
            />


            <FormControl fullWidth>
              <InputLabel id="country">Country</InputLabel>
              <Select
                required
                labelId="country"
                id="country"
                name='country'
                label="Country"
                value={info.country}
                onChange={handleChage}
              >
                {
                  countries?.map(({ name, index }) => (
                    <MenuItem key={index} value={name}>{name}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>

          </Box>


          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>

            <TextField
              fullWidth
              required
              type='text'
              id='company'
              name='company'
              label='Company'
              variant="outlined"
              onChange={handleChage}
            />


            <FormControl fullWidth>
              <InputLabel id="companyType">Company Type</InputLabel>
              <Select
                required
                labelId="companyType"
                id="companyType"
                name='companyType'
                label="CompanyType"
                value={info.companyType}
                onChange={handleChage}
              >
                {
                  companyType?.map(({ name, index }) => (
                    <MenuItem key={index} value={name}>{name}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>

          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>

            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }} fullWidth>
              <TextField
                fullWidth
                type='text'
                id='tel'
                name='tel'
                label='Phone'
                variant="outlined"
                onChange={handleChage}
              />
              <Typography variant='subtitle2' color={'#B6BBC4'}>Optional</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>

              <TextField
                fullWidth
                type='text'
                id='age'
                name='age'
                label='Age'
                variant="outlined"
                onChange={handleChage}
              />
              <Typography variant='subtitle2' color={'#B6BBC4'}>Optional</Typography>
            </Box>

          </Box>

          <Container sx={{ display: 'flex', justifyContent: 'center', gap: 2, my: 3 }}>

            <FormGroup style={{ padding: 10 }}>
              <FormControlLabel required control={<Checkbox onClick={handleOkudumAnladim} />} label="I have read and understood the information provided" />
            </FormGroup>

          </Container>


          <Button variant='contained' sx={{ letterSpacing: 5 }} type='submit'>Register</Button>

          <Box display={'flex'} justifyContent={'center'} color={'black'} letterSpacing={2} >
            <Link to={'/login'} >I have an account.</Link>
          </Box>

        </Container>

        <ReadUnderstood open={open} handleClose={handleClose}/>

      </Box>

    </div>

  )
}
