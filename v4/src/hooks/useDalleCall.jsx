
import React from 'react'
import {
    fetchStartGeneration,
    fetchEndGeneration,
    fetchFailGeneration,
    fetchSuccessLeonardoGeneration,
    fetchSuccessLeonardoGenerationData,
    fetchSuccessLeonardoGenerationAllData
} from '../features/touchSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { toastInfoNotify, toastSuccessNotify, toastErrorNotify, toastWarnNotify } from '../helper/ToastNotify'
import { useState } from 'react'
import { uid } from "uid";
import { getDatabase, onValue, ref, remove, set, update, get } from "firebase/database";


const useDalleCall = () => {

    const dispatch = useDispatch()
    const { userInfo, currentUser } = useSelector((state) => state.auth)

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


    const get_Leonarda_Image = async (id, info) => {



        const options = {
            method: 'GET',
            url: `${process.env.REACT_APP_LEONARDO_GET_IMAGE_ADDRESS}/${id}`,
            headers: {
                'accept': 'application/json',
                'authorization': `Bearer ${process.env.REACT_APP_LEONARDO_APIKEY}`
            }
        };

        try {

            const uID = uid()
            let response = await axios(options);

            // "COMPLETE" olana kadar döngü içinde isteği tekrar et
            while (response?.data?.generations_by_pk?.status === "PENDING") {
                await new Promise(resolve => setTimeout(resolve, 3000)); // 3 saniye bekle
                response = await axios(options); // Tekrar istek gönder
            }


            const data = response?.data?.generations_by_pk?.generated_images.map(element => ({
                url: element.url,
                text: info,
                id: element.id,

            }));

            // "COMPLETE" olduğunda işlem yap
            // dispatch(fetchSuccessLeonardoGenerationData(response?.data?.generations_by_pk));
            dispatch(fetchSuccessLeonardoGenerationData());
            dispatch(fetchSuccessLeonardoGenerationAllData(data))



        } catch (error) {
            console.log("get_Leonarda_Image: ", error)
        }


    }


    const post_imageDataDB = async (id, data, { likeStatus }) => {

        const combinedObject = { ...userInfo, ...data }

        try {

            const uID = uid()
            const db = getDatabase()
            const res = ref(db, 'customerLikeData')
            const snapshot = await get(res)

            if (likeStatus) {
                // await set(ref(db, `customerAIdata/${userInfo.name + userInfo.surname}/${uID}`), combinedObject)
                await set(ref(db, `customerLikeData/${currentUser}/${uID}`), combinedObject)
                toastSuccessNotify('Liked')
            }
            else {

                if (snapshot.exists()) {

                    const dizi = []

                    Object.values(snapshot.val()).forEach(item => {

                        if (typeof item == 'object' && item != null) {

                            const result = Object.keys(item).map(key => { return { IDs: key, ...item[key] } })

                            result.map(item => {
                                dizi.push(item)
                                return { ...item, item }
                            })

                        }

                    })

                    const unLikedData = dizi.filter(item=>item.id == id)
                    console.log(unLikedData)

                    if(unLikedData.length>0){
                        await remove(ref(db, `customerLikeData/${currentUser}/${unLikedData[0].IDs}`))
                        toastWarnNotify('Unliked')
                    }


                }
            }

        } catch (error) {
            console.log("register, ", error)
        }

    }


    return {
        create_Leonardo_Image,
        get_Leonarda_Image,
        post_imageDataDB,
        post_imageDataDB

    }

}

export default useDalleCall




















