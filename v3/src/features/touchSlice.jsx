
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createElement, useEffect } from "react";
import moment from "moment";


const initialState = {
    loadingGeneration: false,
    error: false,
    dalleData: [],
    dalleImage: [],
    userPrompt: "",
}

const touchSlice = createSlice({

    name: "touch",
    initialState,
    reducers: {


        fetchStartGeneration: (state) => {
            state.loadingGeneration = true;
            state.error = false;
            state.dalleImage = []
        },
        fetchEndGeneration: (state) => {
            state.loadingGeneration = false;
            state.error = false;
        },
        fetchFailGeneration: (state) => {
            state.loadingGeneration = false;
            state.error = true;
        },
        fetchSuccess_Generation: (state, { payload }) => {
        console.log(payload)
            state.loadingGeneration = false
            // const datetime = moment().add(1, 'hours').format()
            // const currenttime = moment().format()
            const createdTime = moment().add(1, 'hours').format()

            // Eğer payload beklenen yapıda değilse, doğrudan çıkın.
            if (!payload || !payload.res || !payload.res.data || !payload.res.data[0]) {
                console.error('Invalid payload structure:', payload);
                return; // Burada bir şey dönmemeye dikkat edin.
            }

            state.dalleImage.push({
                imgTime: createdTime,
                imgUrl: payload?.res?.data[0].url,
                revisedPrompt: payload?.res?.data[0].revised_prompt,
                prompt:payload?.data?.prompt,
                searchData:payload?.data?.searchData
            });


        },
        fetchSuccess_AllGeneration: (state, { payload }) => {
         console.log(payload)
            state.loadingGeneration = false
            // const datetime = moment().add(1, 'hours').format()
            // const currenttime = moment().format()
            const createdTime = moment().add(1, 'hours').format()

            state.dalleData.push({
                imgTime: createdTime,
                imgUrl: payload?.res?.data[0].url,
                revisedPrompt: payload?.res?.data[0].revised_prompt,
                prompt:payload?.data?.prompt,
                searchData:payload?.data?.searchData
            });


        },



    }


})



export const {


    fetchStartGeneration,
    fetchEndGeneration,
    fetchFailGeneration,
    fetchSuccess_Generation,
    fetchSuccess_AllGeneration,


} = touchSlice.actions

//slice oluşturulduktan sonra export default olarak export edilmeli ve reducer ifadesi belirtilmelidir.
export default touchSlice.reducer






