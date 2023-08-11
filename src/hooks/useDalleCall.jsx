
import React from 'react'
import { fetchFail, fetchStart } from '../features/touchSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'

const useDalleCall = () => {

    const dispatch=useDispatch()
  

    const getImageData=async()=>{

        dispatch(fetchStart()())    //api isteği öncesi çalışacan reducer


        
        try {

            const {data} = await axios.post(`${process.env.REACT_APP_DALLE_ADDRESS}`,{

                method:'post',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
                },
                body: JSON.stringify({
                    "prompt": searchData,
                    "n": 1,
                    "size": "1024x1024"
                }),
                cache:'default'
            })

            
        } catch (error) {
            console.log(error)
            dispatch(fetchFail())

        }

    }

}

export default useDalleCall




















