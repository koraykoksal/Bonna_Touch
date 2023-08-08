import React from 'react'
import { Headers } from '../components/Headers'
import { useState } from 'react'


export const Home = () => {

    const [prompt, setprompt] = useState("")

    console.log(prompt)

  return (

    <div>
        <Headers prompt={prompt} setprompt={setprompt}/>
    </div>

  )
}
