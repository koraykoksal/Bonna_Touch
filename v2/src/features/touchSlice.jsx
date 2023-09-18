
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createElement, useEffect } from "react";



const initialState={
    loading:"",
    error:"",
    userPrompt:"",
    dalleData:[],
    dalleImage:{},
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

            let d = new Date()
            let h = new Date().getHours()
            d.setHours(h+1.5)

            return {

                dalleData:[...state.dalleData,{id:payload.res.created,prompt:payload.data.prompt,promptImg:payload.res.data[0].url,endtime:d.toLocaleTimeString()}],

                dalleImage:[...state.dalleImage,{id:new Date().getTime(),currentImgUrl:payload.res.data[0].url,ImgTime:d.toLocaleTimeString(),userPrompt:payload.data.prompt}],

                // dalleImage:[payload.res.data[0].url,d.toLocaleTimeString(),payload.data.prompt],

                


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






