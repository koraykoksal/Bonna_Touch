
import React from 'react'
import {
    fetchStartGeneration,
    fetchEndGeneration,
    fetchFailGeneration,
    fetchSuccess_Generation,
    fetchSuccess_AllGeneration,
    fetchSuccessLeonardoGeneration,

} from '../features/touchSlice'
import { fetchStartVariation, fetchSuccessVariation, fetchEndVariation, fetchFailVariation } from '../features/variationSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { toastInfoNotify, toastSuccessNotify, toastErrorNotify } from '../helper/ToastNotify'



const useDalleCall = () => {

    const dispatch = useDispatch()
    const { dalleUser_PromptInfo, leonardoGenerationID } = useSelector((state) => state.touch)

    const info = dalleUser_PromptInfo.cuisineType + ", " + dalleUser_PromptInfo.styleType + ", " + dalleUser_PromptInfo.colorType + ", " + dalleUser_PromptInfo.prompt + " a round and flat plate with a clear, blurred background, showcasing a top-down view. Remove noise and interference."




    const create_Dalle2_Image = (url) => {

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
                    "size": "1024x1024"
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

                    dispatch(fetchSuccess_Generation({ res }))
                    dispatch(fetchSuccess_AllGeneration({ res }))

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


    const create_Dalle3_Image = (url) => {

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

                    dispatch(fetchSuccess_Generation({ res }))
                    dispatch(fetchSuccess_AllGeneration({ res }))

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



    const create_Leonardo_Image = async () => {

        dispatch(fetchStartGeneration())

        const options = {
            method: 'POST',
            url: `${process.env.REACT_APP_LEONARDO_CREATE_IMAGE_ADDRESS}`,
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: `Bearer ${process.env.REACT_APP_LEONARDO_APIKEY}`
            },
            data: {
                // alchemy: true,
                // prompt: "red flowers Latin Handmade Beige a round and flat plate with a clear, blurred background, showcasing a top-down view. Remove noise and interference.",
                // num_images: 2,
                // num_inference_steps: 10,
                // scheduler: 'LEONARDO',
                // guidance_scale: 7,
                // presetStyle: 'DYNAMIC',

                "alchemy": true,
                "controlnets": [],
                "elements": [],
                "expandedDomain": true,
                "guidance_scale": 7,
                "height": 512,
                "highContrast": true,
                "leonardoMagic": true,
                "leonardoMagicVersion":"v3",
                "modelId": "1e60896f-3c26-4296-8ecc-53e2afecc132",
                "negative_prompt": "",
                "nsfw": true,
                "num_images": 2,
                "num_inference_steps": 10,
                "photoReal": false,
                "poseToImage": false,
                "poseToImageType": "POSE",
                "presetStyle": "DYNAMIC",
                "prompt": "red flowers Latin Handmade Beige a round and flat plate with a clear, blurred background, showcasing a top-down view. Remove noise and interference.",
                "public": false,
                "scheduler": "LEONARDO",
                "sd_version": "v2",
                "tiling": false,
                "weighting": 0.75,
                "width": 768

            }
        };

        await axios
            .request(options)
            .then(function (response) {

                if (response?.data) {
                    const data = response?.data?.sdGenerationJob?.generationId
                    console.log("image id: ", data)

                    dispatch(fetchSuccessLeonardoGeneration(data))

                    get_Leonarda_Image()
                }

            })
            .catch(function (error) {
                console.error(error);
            });

    }


    const get_Leonarda_Image = async () => {

        const options = {
            method: 'GET',
            url: `${process.env.REACT_APP_LEONARDO_GET_IMAGE_ADDRESS}/${leonardoGenerationID}`,
            headers: {
                accept: 'application/json',
                authorization: `Bearer ${process.env.REACT_APP_LEONARDO_APIKEY}`
            }
        };

        try {

            const res = await axios(options)
            console.log(res)

        } catch (error) {
            console.log("get_Leonarda_Image: ", error)
        }


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
        create_Dalle2_Image,
        getImageVariationData,
        create_Dalle3_Image,
        create_Leonardo_Image

    }

}

export default useDalleCall




















