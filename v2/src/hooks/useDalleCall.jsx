
import React from 'react'
import { fetchDownload, fetchEnd, fetchFail, fetchStart, fetchSuccess, fetchVariantSuccess } from '../features/touchSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import {toastInfoNotify,toastSuccessNotify,toastErrorNotify} from '../helper/ToastNotify'
import img1 from '../assets/img/img1.png'


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


  

    //! varyasyon oluşturma
    const getImageVariationData=async (url,formdata,userdata)=>{

        dispatch(fetchStart())    //api isteği öncesi çalışacan reducer

        try {
            
        axios.post(`${process.env.REACT_APP_DALLE_GENERATE_ADDRESS}/${url}`,formdata,{
        headers:{
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
        }
        })
        .then(response => {
        //   console.log('İstek başarılı:', response.data.data[0].url);
          dispatch(fetchVariantSuccess({response,userdata}))
          dispatch(fetchEnd())
        })
        .catch(err => {
            console.log("hata oluştuuu !!")
            console.log(err)
            dispatch(fetchFail())
            toastErrorNotify(err)
        });
        } catch (error) {
            toastErrorNotify(error)
        }


    }


    return {getImageData,getImageVariationData}

}

export default useDalleCall




















