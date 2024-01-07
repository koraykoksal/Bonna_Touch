
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createElement, useEffect } from "react";
import moment from "moment";
import { uid } from "uid";

const initialState = {
    loadingGeneration: false,
    error: false,
    dalleData: [],
    dalleImage: [],
    userPrompt: "",
    dalleUser_PromptInfo: {
        prompt:"",
        cuisineType:"",
        colorType:"",
        styleType:""
    },
    leonardoGenerationID: "",
}

const touchSlice = createSlice({

    name: "touch",
    initialState,
    reducers: {


        fetchStartGeneration: (state) => {
            state.loadingGeneration = true;
            state.error = false;
            state.dalleImage = []
            state.leonardoGenerationID = ""
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

            state.loadingGeneration = false
            const createdTime = moment().add(1, 'hours').format()
            const uID = uid()

            state.dalleImage.push({
                id:uID,
                imgTime: createdTime,
                imgUrl: payload?.res?.data[0].url,
                revisedPrompt: payload?.res?.data[0].revised_prompt,
                userInfo:{...state.dalleUser_PromptInfo}
            });
        },
        fetchSuccess_AllGeneration: (state, { payload }) => {

            state.loadingGeneration = false
            const createdTime = moment().add(1, 'hours').format()
            const uID = uid()

            state.dalleData.push({
                id:uID,
                imgTime: createdTime,
                imgUrl: payload?.res?.data[0].url,
                revisedPrompt: payload?.res?.data[0].revised_prompt,
                userInfo:{...state.dalleUser_PromptInfo}
            });
        },
        updatePrompts: (state, { payload }) => {
            console.log("update : ", payload)
            state.dalleUser_PromptInfo = {...state.dalleUser_PromptInfo,...payload}
        },
        fetchSuccessLeonardoGeneration: (state, { payload }) => {
            state.loadingGeneration = false
            state.leonardoGenerationID = payload
        }



    }


})



export const {


    fetchStartGeneration,
    fetchEndGeneration,
    fetchFailGeneration,
    fetchSuccess_Generation,
    fetchSuccess_AllGeneration,
    updatePrompts,
    fetchSuccessLeonardoGeneration


} = touchSlice.actions

//slice oluşturulduktan sonra export default olarak export edilmeli ve reducer ifadesi belirtilmelidir.
export default touchSlice.reducer






