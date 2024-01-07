
import React from 'react'
import {
    fetchStartGeneration,
    fetchEndGeneration,
    fetchFailGeneration,
    fetchSuccess_Generation,
    fetchSuccess_AllGeneration,

} from '../features/touchSlice'
import { fetchStartVariation, fetchSuccessVariation, fetchEndVariation, fetchFailVariation } from '../features/variationSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { toastInfoNotify, toastSuccessNotify, toastErrorNotify } from '../helper/ToastNotify'



const useDalleCall = () => {

    const dispatch = useDispatch()
    const { dalleUser_PromptInfo } = useSelector((state) => state.touch)

    const info = dalleUser_PromptInfo.prompt + " " + dalleUser_PromptInfo.cuisineType + " " + dalleUser_PromptInfo.styleType + " " + dalleUser_PromptInfo.colorType + " a round and flat plate with a clear, blurred background, showcasing a top-down view. Remove noise and interference."

    const data = "";

    const getImageData = (data) => {

        dispatch(fetchStartGeneration())    //api isteği öncesi çalışacan reducer

        try {

            fetch(`${process.env.REACT_APP_DALLE_GENERATE_ADDRESS}/${data.url}`, {

                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
                },
                body: JSON.stringify({
                    "prompt": data.searchData,
                    "n": 1,
                    // "size": "1024x1024"
                    "size": "1792x1024",
                    "model": "dall-e-3"
                }),
                cache: 'default'
            })
                .then((res) => {


                    if (!res.ok) {

                        dispatch(fetchFailGeneration())
                        toastInfoNotify('There is something wrong !')

                    }
                    else {

                        return res.json()
                    }
                })
                .then((res) => {

                    console.log(res)

                    dispatch(fetchSuccess_Generation({ res, data }))
                    dispatch(fetchSuccess_AllGeneration({ res, data }))

                    dispatch(fetchEndGeneration())
                    toastSuccessNotify('Image Genereted')

                })
                .catch((err) => {

                    console.log("hata oluştuuu !!")
                    console.log(err)
                    dispatch(fetchFailGeneration())
                    toastErrorNotify(err)
                })


        } catch (error) {
            console.log("try cath error : ", error)
        }


    }


    const getImageData2 = (url) => {

        dispatch(fetchStartGeneration())    //api isteği öncesi çalışacan reducer

        try {

            fetch(`${process.env.REACT_APP_DALLE_GENERATE_ADDRESS}/${url}`, {

                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
                },
                body: JSON.stringify({
                    "prompt": info,
                    "n": 1,
                    // "size": "1024x1024"
                    "size": "1792x1024",
                    "model": "dall-e-3"
                }),
                cache: 'default'
            })
                .then((res) => {


                    if (!res.ok) {

                        dispatch(fetchFailGeneration())
                        toastInfoNotify('There is something wrong !')

                    }
                    else {

                        return res.json()
                    }
                })
                .then((res) => {

                    dispatch(fetchSuccess_Generation({ res, data }))
                    dispatch(fetchSuccess_AllGeneration({ res, data }))

                    dispatch(fetchEndGeneration())
                    toastSuccessNotify('Image Genereted')

                })
                .catch((err) => {

                    console.log("hata oluştuuu !!")
                    console.log(err)
                    dispatch(fetchFailGeneration())
                    toastErrorNotify(err)
                })


        } catch (error) {
            console.log("try cath error : ", error)
        }


    }



    const create_image = () => {

        const options = {
            method: 'POST',
            url: `${process.env.REACT_APP_LEONARDO_CREATE_IMAGE_ADDRESS}`,
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: `Bearer ${process.env.REACT_APP_LEONARDO_APIKEY}`
            },
            data: {
                // height: 512,
                // modelId: '6bef9f1b-29cb-40c7-b9df-32b51c1f67d3',
                // prompt: info,
                // width: 512,
                // alchemy: 'true',
                // presetStyle: 'DYNAMIC',
                // sd_version: 'v2'
                "alchemy": true,
                "controlnets": [],
                "elements": [],
                "expandedDomain": true,
                "guidance_scale": 7,
                "height": 512,
                "highContrast": false,
                "leonardoMagic": false,
                "modelId": "6bef9f1b-29cb-40c7-b9df-32b51c1f67d3",
                "negative_prompt": "",
                "nsfw": true,
                "num_images": 1,
                "num_inference_steps": 10,
                "photoReal": false,
                "poseToImage": false,
                "poseToImageType": "POSE",
                "presetStyle": "DYNAMIC",
                "prompt": info,
                "public": false,
                "scheduler": "LEONARDO",
                "sd_version": "SDXL_0_9",
                "tiling": false,
                "weighting": 0.75,
                "width": 768
            }
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });

    }




    //! varyasyon oluşturma
    const getImageVariationData = async (url, formdata) => {

        dispatch(fetchStartVariation())    //api isteği öncesi çalışacan reducer

        try {

            axios.post(`${process.env.REACT_APP_DALLE_GENERATE_ADDRESS}/${url}`, formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
                }
            })
                .then(response => {
                    dispatch(fetchSuccessVariation({ response }))
                    dispatch(fetchEndVariation())
                    toastSuccessNotify('Variation Successful')
                })
                .catch(err => {
                    console.log("hata oluştuuu !!")
                    console.log(err)
                    dispatch(fetchFailVariation())
                    toastErrorNotify(err)
                });
        } catch (error) {
            toastErrorNotify(error)
        }


    }


    return { 
        getImageData, 
        getImageVariationData, 
        getImageData2 ,
        create_image
    
    }

}

export default useDalleCall




















