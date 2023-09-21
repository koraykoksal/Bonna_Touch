import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setpromptGpt } from '../features/touchSlice'
import axios from 'axios'
import { Dalle } from './Dalle'
import useDalleCall from '../hooks/useDalleCall'
import { Box, Button, Container, Input, TextField } from '@mui/material'
import { Form, Formik } from "formik"
import FormControl from '@mui/material/FormControl';

export const Headers = () => {



  const [prompt, setprompt] = useState("")
  const [finalprompt, setfinalprompt] = useState("")

  const {getImageData}=useDalleCall()

  const lastSentenceSupport = `A ${prompt} round, flat plate with a clear, blurred background, showcasing a top-down view.`;

  const handleSearch=(e)=>{
    
    e.preventDefault();

    prompt.toLocaleLowerCase().trim()

    const generateData={
      url:'generations',
      searchData:lastSentenceSupport,
      prompt:prompt,
    }

    getImageData(generateData)


  }



  return (
    
    <>

    <Container>


      
      <Box >

        <form onSubmit={handleSearch} style={{display:'flex',justifyContent:'center',padding:2}}>

   
        <TextField
        required
        fullWidth
        label="Prompt"
        name='prompt'
        id='prompt'
        type='text'
        variant='outlined'
        multiline
        value={prompt}
        onChange={(e)=>setprompt(e.target.value)}
        />


        <Button variant='contained' type='submit'>
          Generate
        </Button>

        </form>
   
      </Box>
      
    </Container>
    
    <Dalle/>
    </>

  )
}
