
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createElement, useEffect } from "react";



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
            //fetchStart her başladığında dalleImage de kayıtlı olan url bilgisi silinecek ve generate işlemi yapılırken progress bar çalışacak
            state.dalleImage = ""
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

            return {
                dalleData:[...state.dalleData,{id:payload.res.created,prompt:payload.data.prompt,promptImg:payload.res.data[0].url}],
                
            }
        },
        fetchSuccess2:(state,{payload})=>{
            state.dalleImage = payload.res.data[0].url
            state.userPrompt = payload.data.prompt
        },
        fetchDownload:(state,payload)=>{
            
            const element=document.createElement('a');
            let file = payload.res.data[0].url

            element.href=URL.createObjectURL(file)
            element.download('image.png')
        }



    }


}) 



export const {
    fetchStart,
    fetchEnd,
    fetchFail,
    fetchSuccess,
    fetchSuccess2,
    fetchTemizle,
    fetchDownload}=touchSlice.actions

//slice oluşturulduktan sonra export default olarak export edilmeli ve reducer ifadesi belirtilmelidir.
export default touchSlice.reducer






