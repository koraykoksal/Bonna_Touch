import { createSlice } from "@reduxjs/toolkit";
import { uid } from "uid";

const initialState = {
    loadingGeneration: false,
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
    leonardoGenerationAllData: []
}

const touchSlice = createSlice({

    name: "touch",

    initialState,

    reducers: {

        fetchStartGeneration: (state) => {
            state.loadingGeneration = true;
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
        fetchSuccessLeonardoGenerationData: (state, { payload }) => {
            state.loadingGeneration = false
            // state.leonardoGenerationData = payload?.generated_images;
        },
        fetchSuccessLeonardoGenerationAllData: (state, { payload }) => {
            return {
                leonardoGenerationAllData: [...state.leonardoGenerationAllData, ...payload]
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
    fetchSuccessLeonardoGenerationData,
    fetchSuccessLeonardoGenerationAllData,
    fetchLogOutLeonardoData


} = touchSlice.actions

//slice oluşturulduktan sonra export default olarak export edilmeli ve reducer ifadesi belirtilmelidir.
export default touchSlice.reducer






