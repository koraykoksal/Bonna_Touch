
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";



const initialState={
    loading:"",
    error:"",
    userPrompt:"",
    dalleData:[],
    dalleImage:"",
}



const touchSlice=createSlice({

    name:"touch",
    initialState,
    reducers:{
        
       
        fetchStart:(state)=>{
            state.loading =true;
            state.error = false;
        },
        fetchFail:(state)=>{
            state.loading=false;
            state.error=true;
        },
        fetchSuccess:(state,{payload})=>{

            return {
                dalleData:[...state.dalleData,{id:payload.data.created,prompt:payload.prompt,promptImg:payload.data.data[0].url}]
            }

            // state.dalleImage = payload.data.data[0].url,
            // state.userPrompt = payload.prompt
            

        }


    }


}) 



export const {fetchStart,fetchFail,fetchSuccess}=touchSlice.actions

//slice oluşturulduktan sonra export default olarak export edilmeli ve reducer ifadesi belirtilmelidir.
export default touchSlice.reducer






