
import React from 'react'
import { fetchFail, fetchStart, fetchSuccess,fetchSuccess2 } from '../features/touchSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import {toastInfoNotify,toastSuccessNotify,toastErrorNotify} from '../helper/ToastNotify'

const useDalleCall = () => {

    const dispatch=useDispatch()
  

    const getImageData=(searchData,prompt)=>{

        dispatch(fetchStart())    //api isteği öncesi çalışacan reducer
        
        toastInfoNotify('Please Wait Image Generating ')


        try {
            
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
    
         
                dispatch(fetchSuccess({data,searchData,prompt}))
                dispatch(fetchSuccess2({data,searchData,prompt}))
                toastSuccessNotify('Image Genereted')
    
            })
            .catch((err)=>{
    
                console.log("hata oluştuuu !!")
                console.log(err)
                dispatch(fetchFail())
                toastErrorNotify(err)
            })

        } catch (error) {
         console.log("try cath error : ",error)   
        }


    }

    return {getImageData}

}

export default useDalleCall




















