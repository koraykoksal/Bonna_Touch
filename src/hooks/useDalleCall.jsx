
import React from 'react'
import { fetchEnd, fetchFail, fetchStart, fetchSuccess,fetchSuccess2 } from '../features/touchSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import {toastInfoNotify,toastSuccessNotify,toastErrorNotify} from '../helper/ToastNotify'

const useDalleCall = () => {

    const dispatch=useDispatch()
  
    // url,searchData,prompt
    const getImageData=(data)=>{

        dispatch(fetchStart())    //api isteği öncesi çalışacan reducer
        
        //toastInfoNotify('Please Wait Image Generating ')


        try {
            
            fetch(`https://api.openai.com/v1/images/${data.url}`,{

                method:'post',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
                },
                body: JSON.stringify({
                    "prompt": data.searchData,
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
            .then((res)=>{
    
         
                // dispatch(fetchSuccess({res,searchData,prompt}))
                // dispatch(fetchSuccess2({res,searchData,prompt}))
                dispatch(fetchSuccess({res,data}))
                dispatch(fetchSuccess2({res,data}))
                toastSuccessNotify('Image Genereted')
                dispatch(fetchEnd())
    
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




















