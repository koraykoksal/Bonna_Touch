
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
    user_PromptInfo: {
        prompt:"",
        cuisineType:"",
        colorType:[],
        styleType:""
    },
    leonardoGenerationID: "",
    leonardoGenerationData:[],
    leonardoGenerationAllData:[]
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
        fetchSuccessLeonardoGeneration: (state, { payload }) => {
            // state.loadingGeneration = false
            state.leonardoGenerationID = payload
        },
        fetchSuccessLeonardoGenerationData:(state,{payload})=>{
            state.loadingGeneration = false
            state.leonardoGenerationData = payload

        },
        fetchSuccessLeonardoGenerationAllData:(state,{payload})=>{
            // state.loadingGeneration = false
            console.log(payload)
            const uID = uid()
            return {

                leonardoGenerationAllData:[...state.leonardoGenerationAllData,{id:uID,url:payload}]
            }


        }


    }


})



export const {


    fetchStartGeneration,
    fetchEndGeneration,
    fetchFailGeneration,
    fetchSuccess_Generation,
    fetchSuccess_AllGeneration,
    fetchSuccessLeonardoGeneration,
    fetchSuccessLeonardoGenerationData,
    fetchSuccessLeonardoGenerationAllData


} = touchSlice.actions

//slice oluşturulduktan sonra export default olarak export edilmeli ve reducer ifadesi belirtilmelidir.
export default touchSlice.reducer






