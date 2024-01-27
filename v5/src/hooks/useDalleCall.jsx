
import React from 'react'
import {
    fetchStartGeneration,
    fetchEndGeneration,
    fetchFailGeneration,
    fetchSuccessLeonardoGeneration,
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
    const [loading, setLoading] = useState(false);

    const create_Leonardo_Image = async (data) => {

        const userPrompt = data?.cuisineType + "," + data?.styleType + " style, " + data?.prompt + " " + data?.colorType + " tones single porcelain plate. show only top view. Remove background, plate holder and interference. Don't show material or food."
    

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
                // "alchemy": true,
                // "elements": [],
                // "expandedDomain": true,
                // "guidance_scale": 7,
                // "height": 512,
                // "highContrast": false,
                // "modelId": "1e60896f-3c26-4296-8ecc-53e2afecc132",
                // "negative_prompt": "Remove background, noise, plate holder and interference.",
                // "nsfw": true,
                // "num_images": 2,
                // "num_inference_steps": 10,
                // "photoReal": false,
                // "presetStyle": "NONE",
                // "prompt": userPrompt,
                // "public": false,
                // "scheduler": "LEONARDO",
                // "sd_version": "SDXL_0_9",
                // "tiling": false,
                // "weighting": 0.75,
                // "width": 768

                "alchemy": true,
                "contrastRatio": 0.5,
                "elements": [],
                "expandedDomain": true,
                "guidance_scale": 15,
                "height": 512,
                "highContrast": true,
                "highResolution": false,
                "negative_prompt": "",
                "nsfw": true,
                "num_images": 2,
                "num_inference_steps": 10,
                "photoReal": true,
                "photoRealStrength": 0.55,
                "presetStyle": "NONE",
                "prompt": userPrompt,
                "public": false,
                "scheduler": "LEONARDO",
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

            // `generated_images`'ın varlığını ve içeriğini kontrol et
            const generatedImages = response?.data?.generations_by_pk?.generated_images;
            if (!generatedImages || generatedImages.length === 0) {
                // `generated_images` boş veya tanımsızsa, uygun bir işlem yap
                console.log('generated_images boş veya tanımsız.');
                // Burada boş bir dizi göndermek veya bir hata mesajı göndermek gibi işlemler yapabilirsiniz.
                dispatch(fetchSuccessLeonardoGenerationAllData([]));
            } else {
                // `generated_images` var ve içerik içeriyorsa, işlem yap
                const data = generatedImages.map(element => ({
                    url: element.url,
                    text: info,
                    id: element.id,
                }));
                dispatch(fetchSuccessLeonardoGenerationAllData(data));
            }


        } catch (error) {
            console.log("get_Leonarda_Image: ", error)
        }


    }


    const post_imageDataDB = async (id, data, { likeStatus }) => {

        const combinedObject = { ...userInfo, ...data }


        try {
            const uID = uid();
            const db = getDatabase();
            const res = ref(db, 'customerLikeData');
            const snapshot = await get(res);

            if (likeStatus) {
                await set(ref(db, `customerLikeData/${currentUser}/${uID}`), combinedObject);
                toastSuccessNotify('Liked');
            } else {
                if (snapshot.exists()) {
                    const dizi = [];
                    Object.entries(snapshot.val()).forEach(([key, item]) => {
                        if (item && typeof item === 'object') {
                            Object.entries(item).forEach(([innerKey, value]) => {
                                dizi.push({ IDs: innerKey, ...value });
                            });
                        }
                    });

                    const unLikedData = dizi.find(item => item.id === id);
                    if (unLikedData) {
                        await remove(ref(db, `customerLikeData/${currentUser}/${unLikedData.IDs}`));
                        toastWarnNotify('Unliked');
                    }
                }
            }
        } catch (error) {
            console.error("Error in postImageDataToDB: ", error);
        }


    }


    const sendMail = async (mailInfo, imageInfo, mailSubject) => {

        const config = {
            method: 'post',
            url: process.env.REACT_APP_MAIL_SERVER, // Eğer .env değişkeni yoksa, doğrudan URL
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                to: mailInfo?.selectedSales, //zorunlu alan
                note: mailInfo?.note,
                subject: mailSubject || "", //zorunlu alan
                data: imageInfo || "" //zorunlu alan
            },
            timeout: 5000
        };

        try {

            const res = await axios(config);

            if (res?.data?.response?.status == 200) {
                toastSuccessNotify('Mail Sent Successfully');
            } else {
                toastWarnNotify('Mail Sending Failed');
            }

        } catch (error) {
            console.error('Send Mail Error:', error.message || error);
            toastErrorNotify('Error in Sending Mail');
        }


    }



    return {
        create_Leonardo_Image,
        get_Leonarda_Image,
        post_imageDataDB,
        post_imageDataDB,
        sendMail

    }

}

export default useDalleCall




















