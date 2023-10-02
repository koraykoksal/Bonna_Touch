
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createElement, useEffect } from "react";
import moment from "moment";


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

            const datetime = moment().add(1,'hours').format()
            const currenttime = moment().format()

            
            return {

                dalleImage:[...state.dalleImage.filter(item=>moment(currenttime) < moment(item.imgTime)),{imgUrl:payload.res.data[0].url,userPrompt:payload.data.prompt,imgTime:datetime,status:true}],

                dalleData:[...state.dalleData.filter(item=>moment(currenttime) < moment(item.imgTime)),{id:payload.res.created,prompt:payload.data.prompt,promptImg:payload.res.data[0].url,imgTime:datetime}],
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






