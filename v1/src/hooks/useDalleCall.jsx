
import React from 'react'
import { fetchDownload, fetchEnd, fetchFail, fetchStart, fetchSuccess,fetchSuccess2, fetchTemizle } from '../features/touchSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import {toastInfoNotify,toastSuccessNotify,toastErrorNotify} from '../helper/ToastNotify'


const useDalleCall = () => {

    const dispatch=useDispatch()
  
    const getImageData=(data)=>{

   
        dispatch(fetchStart())    //api isteği öncesi çalışacan reducer
        
        try {

            fetch(`${process.env.REACT_APP_DALLE_GENERATE_ADDRESS}/${data.url}`,{

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
    
                dispatch(fetchSuccess({res,data}))
                dispatch(fetchSuccess2({res,data}))
                
                dispatch(fetchEnd())
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

    // const getImageVariationData=(url,file)=>{


    //     dispatch(fetchStart())    //api isteği öncesi çalışacan reducer
        
    //     try {

    //         fetch(`${process.env.REACT_APP_DALLE_GENERATE_ADDRESS}/${url}`,{
             
    //             method:'post',
    //             headers:{
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
    //             },
    //             body:{
    //                 "image": (file,'rb'),
    //                 "n": 2,
    //                 "size": "1024x1024",
    //             }
                
                
    //         })
    //         .then((res)=>{
    
    //             if(!res.ok){
    
    //                 dispatch(fetchFail())
    //                 toastInfoNotify('There is something wrong !')
    
    //             }
    //             else{
    
    //                 return res.json()
    //             }
    //         })
    //         .then((res)=>{
    
    //             console.log(res)
                
    //             dispatch(fetchEnd())
    //             //toastSuccessNotify('Image Genereted')
                
    
    //         })
    //         .catch((err)=>{
    
    //             console.log("hata oluştuuu !!")
    //             console.log(err)
    //             dispatch(fetchFail())
    //             toastErrorNotify(err)
    //         })


    //     } catch (error) {
    //      console.log("try cath error : ",error)   
    //     }


    // }


    return {getImageData}

}

export default useDalleCall




















