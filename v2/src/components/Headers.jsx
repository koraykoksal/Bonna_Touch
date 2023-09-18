import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setpromptGpt } from '../features/touchSlice'
import axios from 'axios'
import { Dalle } from './Dalle'
import useDalleCall from '../hooks/useDalleCall'
import { Box, Button, Container, FormControl, Input, TextField } from '@mui/material'
import { Form } from "formik"


export const Headers = () => {



  const [prompt, setprompt] = useState("")
  const [finalprompt, setfinalprompt] = useState("")

  const {getImageData}=useDalleCall()

  const lastSentenceSupport = `A ${prompt} round, flat plate with a clear, blurred background, showcasing a top-down view.`;

  const handleSearch=(e)=>{
    e.preventDefault();

    //const data = prompt.concat(" ",lastSentenceSupport).toLocaleLowerCase().trim()

    prompt.toLocaleLowerCase().trim()

    const generateData={
      url:'generations',
      searchData:lastSentenceSupport,
      prompt:prompt,
    }

    getImageData(generateData)


  }

  console.log(lastSentenceSupport)


  return (
    
    <>

    <Container>

      <Box sx={{display:'flex',justifyContent:'center',padding:2}}>
        <TextField
        fullWidth
        label="Prompt"
        name='prompt'
        id='prompt'
        type='text'
        variant='outlined'
        multiline
        required
        onChange={(e)=>setprompt(e.target.value)}
        />

        <Button variant='contained' type='submit' onClick={handleSearch}>
          Generate
        </Button>
      </Box>
      
    </Container>
    
    <Dalle/>
    </>

  )
}
