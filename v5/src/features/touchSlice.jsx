import { createSlice } from "@reduxjs/toolkit";
import { uid } from "uid";

const initialState = {
    loadingGeneration: false,
    showLogo:true,
    error: false,
    promptData: {},
    user_PromptInfo: {
        prompt: "",
        cuisineType: "",
        colorType: [],
        styleType: ""
    },
    leonardoGenerationID: "",
    leonardoGenerationData: [],
    leonardoGenerationAllData: [],
    leonardoLikedImages:[]
}

const touchSlice = createSlice({

    name: "touch",

    initialState,

    reducers: {

        fetchStartGeneration: (state) => {
            state.loadingGeneration = true;
            state.loadingStatus = true
            state.showLogo=false
            state.error = false;
            state.leonardoGenerationID = ""
            state.leonardoGenerationData=[]
        },
        fetchEndGeneration: (state) => {
            state.loadingGeneration = false;
            state.error = false;
        },
        fetchFailGeneration: (state) => {
            state.loadingGeneration = false;
            state.error = true;
        },
        //! post isteği atıldığında leonardo tarafından gelen ID bilgisi
        fetchSuccessLeonardoGeneration: (state, { payload }) => {
            state.leonardoGenerationID = payload
        },
        fetchSuccessLeonardoGenerationAllData: (state, { payload }) => {
            return {
                leonardoGenerationAllData: [...state.leonardoGenerationAllData, ...payload]
            };
        },
        fetchLikedData:(state,{payload})=>{
            return {
                leonardoLikedImages: [...state.leonardoLikedImages, ...payload]
            };
        },
        fetchLogOutLeonardoData: (state) => {
            state.error = false;
            state.leonardoGenerationID = ""
            state.leonardoGenerationData=[]
            state.leonardoGenerationAllData=[]
        },


    }


})



export const {


    fetchStartGeneration,
    fetchEndGeneration,
    fetchFailGeneration,
    fetchSuccessLeonardoGeneration,
    fetchSuccessLeonardoGenerationAllData,
    fetchLogOutLeonardoData,
    fetchLikedData


} = touchSlice.actions

//slice oluşturulduktan sonra export default olarak export edilmeli ve reducer ifadesi belirtilmelidir.
export default touchSlice.reducer






