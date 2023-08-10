import React from 'react'
import { StyleImg } from './Dalle.style'

export const Dalle = ({dalleImage}) => {


  return (


    <div className='flex items-center text-center mt-8 mb-12 w-[75%] m-auto'>

        <img src={dalleImage} alt="" className='m-auto max-h-[90%] max-w-[90%] rounded-xl' />

    </div>

  )
}
