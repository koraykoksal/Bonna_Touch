import React from 'react'
import { Headers } from '../components/Headers'
import { Box, Container, FormControl, TextField } from '@mui/material'
import { useSelector } from 'react-redux'
import { Dalle } from '../components/Dalle'
import useDalleCall from '../hooks/useDalleCall'
import { useState } from 'react'


export const Home = () => {


  const [prompt, setprompt] = useState("")

  const { getImageData } = useDalleCall()

  const lastSentenceSupport = `A ${prompt} round, flat plate with a clear, blurred background, showcasing a top-down view.`;


  const handleEnterPress = (e) => {
    e.preventDefault()

    prompt.toLocaleLowerCase().trim()

    const generateData = {
      url: 'generations',
      searchData: lastSentenceSupport,
      prompt: prompt,
    }

    if (e.key === 'Enter') {
      getImageData(generateData)
    }
  }

  return (

    <>


      <Box sx={{ backgroundColor: '#dddddd', height: '800px', display: 'flex', flexDirection: 'column'}}>

        <Container >
          <Dalle />
        </Container>


        <Container sx={{mt:5,justifyContent:'center',display:'flex'}}>


          <TextField
          
            required
            fullWidth
            label='Prompt'
            variant='outlined'
            type='text'
            value={prompt}

            onChange={(e) => setprompt(e.target.value)}
            onKeyUp={handleEnterPress}

            inputProps={{
              style: { height: '15px' }
            }}

          />

        </Container>

      </Box>


    </>

  )
}
