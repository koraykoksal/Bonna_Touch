import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setpromptGpt } from '../features/touchSlice'
import axios from 'axios'
import { Dalle } from './Dalle'
import useDalleCall from '../hooks/useDalleCall'

export const Headers = () => {

  const [prompt, setprompt] = useState("")
  const [finalprompt, setfinalprompt] = useState("")

  const {getImageData}=useDalleCall()

  const lastSentenceSupport = "round a plate and clear white background and show top view";

  const handleSearch=(e)=>{
    e.preventDefault();

    const data = prompt.concat(" ",lastSentenceSupport).toLocaleLowerCase().trim()

    const generateData={
      url:'generations',
      searchData:data,
      prompt:prompt,
    }

    // getImageData("generations",data,prompt)
    getImageData(generateData)


  }


  return (
    
    <>
    <form className='w-full m-auto mt-[1.5rem]' onSubmit={handleSearch}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative w-[65%] m-auto">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <textarea
          type="text"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Your, Images..."
          required
          cols={4}
          rows={4}
          value={prompt}
          onChange={(e)=>setprompt(e.target.value)}
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Generate
        </button>
      </div>
    </form>
    <Dalle/>
    </>

  )
}
