
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createElement, useEffect } from "react";



const initialState={
    loading:"",
    error:"",
    userPrompt:"",
    dalleData:[],
    dalleImage:[],
}

const touchSlice=createSlice({

    name:"touch",
    initialState,
    reducers:{
        
       
        fetchStart:(state)=>{
            state.loading =true;
            state.error = false;
            //fetchStart her başladığında dalleImage de kayıtlı olan url bilgisi silinecek ve generate işlemi yapılırken progress bar çalışacak
            state.dalleImage = []
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

            const d = new Date()

            const hour = d.getHours()+1
            const minute = d.getMinutes()
            const year = d.getFullYear()
            const month = d.getMonth()+1
            const day = d.getDate()

            const datetime = `${year}-${month}-${day} ${hour}:${minute}`


            return {

                dalleImage:[{...state.dalleImage,imgUrl:payload.res.data[0].url,userPrompt:payload.data.prompt,imgTime:datetime,status:true}],

                dalleData:[...state.dalleData,{id:payload.res.created,prompt:payload.data.prompt,promptImg:payload.res.data[0].url,imgTime:datetime}],

      

            }
        }



    }


}) 



export const {
    fetchStart,
    fetchEnd,
    fetchFail,
    fetchSuccess,
    fetchTemizle,
    fetchDownload}=touchSlice.actions

//slice oluşturulduktan sonra export default olarak export edilmeli ve reducer ifadesi belirtilmelidir.
export default touchSlice.reducer






