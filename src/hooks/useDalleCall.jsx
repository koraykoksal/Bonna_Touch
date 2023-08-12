
import React from 'react'
import { fetchFail, fetchStart, fetchSuccess } from '../features/touchSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import {toastInfoNotify} from '../helper/ToastNotify'

const useDalleCall = () => {

    const dispatch=useDispatch()
  

    const getImageData=(searchData)=>{

        dispatch(fetchStart())    //api isteği öncesi çalışacan reducer
        toastInfoNotify('Please Wait Image Generating ')

        fetch(`${process.env.REACT_APP_DALLE_ADDRESS}`,{

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
        .then((res)=>{

            if(!res.ok){

                dispatch(fetchFail())
                toastInfoNotify('There is something wrong !')

            }
            else{

                return res.json()
            }
        })
        .then((data)=>{

            console.log("api data : ",data,"searcData : ",searchData)
            
            dispatch(fetchSuccess({data,searchData}))

            
            

        })
        .catch((err)=>{

            console.log(err)
            dispatch(fetchFail())
            toastInfoNotify(err)
        })

    }

    return {getImageData}

}

export default useDalleCall




















