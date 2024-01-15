
import React from 'react'
import {
    fetchStartGeneration,
    fetchEndGeneration,
    fetchFailGeneration,
    fetchSuccess_Generation,
    fetchSuccess_AllGeneration,
    fetchSuccessLeonardoGeneration,
    fetchSuccessLeonardoGenerationData,
    fetchSuccessLeonardoGenerationAllData,

} from '../features/touchSlice'
import { fetchStartVariation, fetchSuccessVariation, fetchEndVariation, fetchFailVariation } from '../features/variationSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { toastInfoNotify, toastSuccessNotify, toastErrorNotify } from '../helper/ToastNotify'
import { useState } from 'react'


const useDalleCall = () => {

    const dispatch = useDispatch()


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
                    "prompt": "red plate",
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
                    "prompt": "red plate",
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



    const create_Leonardo_Image = async (data) => {

        const userPrompt = data?.cuisineType + " pattern, " + data?.styleType + "," + data?.prompt + ", " + data?.colorType + " a round flat porcelain plate with a clear, blurred background, showcasing a top-down view. Remove noise and interference."


        dispatch(fetchStartGeneration())

        const options = {
            method: 'POST',
            url: `${process.env.REACT_APP_LEONARDO_CREATE_IMAGE_ADDRESS}`,
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json',
                'authorization': `Bearer ${process.env.REACT_APP_LEONARDO_APIKEY}`
            },
            data: {
                "alchemy": true,
                "elements": [],
                "expandedDomain": true,
                "guidance_scale": 7,
                "height": 512,
                "highContrast": false,
                "modelId": "1e60896f-3c26-4296-8ecc-53e2afecc132",
                "negative_prompt": "",
                "nsfw": true,
                "num_images": 2,
                "num_inference_steps": 10,
                "photoReal": false,
                "presetStyle": "DYNAMIC",
                "prompt": userPrompt,
                "public": false,
                "scheduler": "LEONARDO",
                "sd_version": "SDXL_0_9",
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
                    dispatch(fetchSuccessLeonardoGeneration(data))
                }

            })
            .catch(function (error) {
                console.error(error);
            });

    }


    const get_Leonarda_Image = async (id,info) => {


        const options = {
            method: 'GET',
            url: `${process.env.REACT_APP_LEONARDO_GET_IMAGE_ADDRESS}/${id}`,
            headers: {
                'accept': 'application/json',
                'authorization': `Bearer ${process.env.REACT_APP_LEONARDO_APIKEY}`
            }
        };

        try {

            let response = await axios(options);

            // "COMPLETE" olana kadar döngü içinde isteği tekrar et
            while (response?.data?.generations_by_pk?.status === "PENDING") {
                await new Promise(resolve => setTimeout(resolve, 3000)); // 3 saniye bekle
                response = await axios(options); // Tekrar istek gönder
            }

            // "COMPLETE" olduğunda işlem yap
            dispatch(fetchSuccessLeonardoGenerationData(response?.data?.generations_by_pk));
            dispatch(fetchSuccessLeonardoGenerationAllData(response?.data?.generations_by_pk,info))


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
        create_Leonardo_Image,
        get_Leonarda_Image

    }

}

export default useDalleCall




















