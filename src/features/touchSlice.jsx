
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
        fetchEnd:(state)=>{
            state.loading =false;
            state.error = false;
        },
        fetchFail:(state)=>{
            state.loading=false;
            state.error=true;
        },
        fetchSuccess:(state,{payload})=>{

            console.log(payload)
            // return {
            //     dalleData:[...state.dalleData,{id:payload.data.created,prompt:payload.prompt,promptImg:payload.data.data[0].url}],
                
            // }
            return {
                dalleData:[...state.dalleData,{id:payload.res.created,prompt:payload.data.prompt,promptImg:payload.res.data[0].url}],
                
            }
        },
        fetchSuccess2:(state,{payload})=>{
            // state.dalleImage = payload.data.data[0].url
            // state.userPrompt = payload.prompt
            state.dalleImage = payload.res.data[0].url
            state.userPrompt = payload.data.prompt
        }



    }


}) 



export const {fetchStart,fetchEnd,fetchFail,fetchSuccess,fetchSuccess2}=touchSlice.actions

//slice oluşturulduktan sonra export default olarak export edilmeli ve reducer ifadesi belirtilmelidir.
export default touchSlice.reducer






