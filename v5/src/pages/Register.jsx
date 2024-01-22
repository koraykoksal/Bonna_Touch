import React from 'react'
import { Link } from 'react-router-dom'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, Container, TextField, FormControlLabel, FormGroup } from '@mui/material';
import { useState } from 'react';
import { countries, companyType, jobType } from "../helper/data"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useAuthCall from '../hooks/useAuthCall';
import Checkbox from '@mui/material/Checkbox';
import bonnaLogo from "../assets/img/bonna-logo.png"
import okudum from "../assets/documents/PrivacyPolicy.pdf"
import { bgColor, fontStyle } from '../styles/GlobalStyle';



export const Register = () => {

  const { register } = useAuthCall()
  const [okudumAnladim, setokudumAnladim] = useState(false)
  const [info, setInfo] = useState({
    name: "",
    surname: "",
    job: "",
    company: "",
    country: "",
    email: "",
    tel: "",
    age: "",
    companyType: "",
    read: true

  })


  const handleOkudumAnladim = (e) => {

    if (!okudumAnladim) {
      window.open(okudum, '_blank')
      setokudumAnladim(true)
    }
    else {
      // window.open(okudum, '_blank')
      setokudumAnladim(false)
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

    <Box display={'flex'} flexDirection={'column'} gap={3} alignItems={'center'} p={3} sx={{ backgroundColor: bgColor, height: '100%' }}>


      <img
        src={bonnaLogo}
        alt="bonnaLogo"
        width='200px'
        style={{ scale: '1.3px', padding: 5 }}
      />


      <Typography align='center' variant='subtitle2' p={1} color={'black'} fontSize={'18px'} fontFamily={fontStyle} letterSpacing={5}>Register</Typography>


      <Container sx={{ display: 'flex', flexDirection: 'column', gap: 5, p: 3 }} maxWidth='md' component={'form'} onSubmit={handleSubmit}>

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

          <FormControl fullWidth>
            <InputLabel id="job">Job</InputLabel>
            <Select
              required
              labelId="job"
              id="job"
              name='job'
              label="job"
              value={info.job}
              onChange={handleChage}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 300, // Bu değeri istediğiniz maksimum yüksekliğe göre ayarlayabilirsiniz
                    overflow: 'auto',
                  },
                },
              }}
            >
              {
                jobType?.map(({ title, index }) => (
                  <MenuItem key={index} value={title}>{title}</MenuItem>
                ))
              }
            </Select>
          </FormControl>

          <TextField
            fullWidth
            required
            type='email'
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
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 300, // Bu değeri istediğiniz maksimum yüksekliğe göre ayarlayabilirsiniz
                    overflow: 'auto',
                  },
                },
              }}
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
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 300, // Bu değeri istediğiniz maksimum yüksekliğe göre ayarlayabilirsiniz
                    overflow: 'auto',
                  },
                },
              }}
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

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, my: 3, alignItems: 'center' }}>

          <FormControlLabel sx={{ fontStyle }} required control={<Checkbox />} label="I have read and understood the information provided" />

          <Link onClick={handleOkudumAnladim} style={{ fontFamily: 'Catamaran', color: 'black' }}>Read</Link>

        </Box>

        <Button variant='contained' sx={{ fontStyle, letterSpacing: 5 }} type='submit'>Register</Button>

        <Link to={'/login'} style={{ display: 'flex', justifyContent: 'center', letterSpacing: 2, color: 'black', fontFamily: fontStyle }}>I have an account.</Link>


      </Container>


    </Box>



  )
}
