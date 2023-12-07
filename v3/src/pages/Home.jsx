import React from 'react'
import { Box, Container, FormControl, TextField } from '@mui/material'
import { Dalle } from '../components/Dalle'
import useDalleCall from '../hooks/useDalleCall'
import { useState } from 'react'
import { RiSendPlane2Fill } from "react-icons/ri";
import InputAdornment from '@mui/material/InputAdornment';
import { toastWarnNotify } from '../helper/ToastNotify'
import { useDispatch, useSelector } from 'react-redux'
import { updatePrompts } from '../features/touchSlice';


export const Home = () => {


  const { dalleUser_PromptInfo } = useSelector((state) => state.touch)

  const dispatch = useDispatch()

  const [prompt, setprompt] = useState("")

  const { getImageData, getImageData2 } = useDalleCall()

  const lastSentenceSupport = `A plate round, flat plate with a clear, blurred background, showcasing a top-down view.${prompt}`;



  const handleEnterPress = (e) => {
    e.preventDefault()

    if (!prompt) {
      toastWarnNotify('Please enter prompt field !')
    }
    else {


      // prompt.toLocaleLowerCase().trim()

      // const generateData = {
      //   url: 'generations',
      //   searchData: lastSentenceSupport,
      //   prompt: prompt,
      // }

      if (e.key === 'Enter') {

        prompt.toLocaleLowerCase().trim()

        dispatch(updatePrompts({ ['prompt']: prompt }))

        getImageData2('generations')

      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!prompt) {
      toastWarnNotify('Please enter prompt field !')
    }
    else {

      prompt.toLocaleLowerCase().trim()

      dispatch(updatePrompts({ ['prompt']: prompt }))

      getImageData2('generations')

      // const generateData = {
      //   url: 'generations',
      //   searchData: lastSentenceSupport,
      //   prompt: prompt,
      // }
      // getImageData(generateData)
    }
  }

  console.log(prompt)
  console.log(dalleUser_PromptInfo)

  return (

    <>


      <Box sx={{ backgroundColor: '#dddddd', height: '800px', display: 'flex', flexDirection: 'column' }}>

        <Container >
          <Dalle />
        </Container>


        <Container sx={{ mt: 5, justifyContent: 'center', display: 'flex', alignItems: 'center', gap: 1 }}>


          <TextField

            required
            fullWidth
            name='prompt'
            label='Prompt'
            variant='outlined'
            type='text'
            value={prompt}
            onChange={(e) => setprompt(e.target.value)}
            // onChange={handleChange}
            onKeyUp={handleEnterPress}

            inputProps={{
              style: { height: '15px' },
            }}

          />

          <RiSendPlane2Fill size={35} color='#000000' cursor='pointer' onClick={handleSubmit} />

        </Container>

      </Box>


    </>

  )
}
