
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createElement, useEffect } from "react";
import moment from "moment";


const initialState={
    loadingGeneration:false,
    loadingVariation:false,
    error:false,
    userPrompt:"",
    dalleData:[],
    dalleImage:[],
    imgVariation:[],
}

const touchSlice=createSlice({

    name:"touch",
    initialState,
    reducers:{
        
       
        fetchStartGeneration:(state)=>{
            state.loadingGeneration =true;
            state.error = false;
            state.dalleImage = []
        },
        fetchStartVariation:(state)=>{
            state.loadingVariation =true;
            state.error = false;
            state.imgVariation=[]
        },
        fetchEndGeneration:(state)=>{
            state.loadingGeneration =false;
            state.error = false;
        },
        fetchEndVariation:(state)=>{
            state.loadingVariation =false;
            state.error = false;
        },
        fetchFailGeneration:(state)=>{
            state.loadingGeneration=false;
            state.error=true;
        },
        fetchFailVariation:(state)=>{
            state.loadingVariation=false;
            state.error=true;
        },
        fetchSuccessGeneration:(state,{payload})=>{

            const datetime = moment().add(1,'hours').format()
            const currenttime = moment().format()

            
            return {

                dalleImage:[...state.dalleImage.filter(item=>moment(currenttime) < moment(item.imgTime)),{imgUrl:payload.res.data[0].url,userPrompt:payload.data.prompt,imgTime:datetime,status:true}],

                dalleData:[...state.dalleData.filter(item=>moment(currenttime) < moment(item.imgTime)),{id:payload.res.created,prompt:payload.data.prompt,promptImg:payload.res.data[0].url,imgTime:datetime}],
            }
        },
        fetchSuccessVariation:(state,{payload})=>{

            const datetime = moment().add(1,'hours').format()
            const currenttime = moment().format()

            return{
                imgVariation:[...state.imgVariation.filter(item=>moment(currenttime) < moment(item.imgTime)),{imgUrl:payload.response.data.data[0].url,imgTime:datetime,status:true}]
            }
        }



    }


}) 



export const {
    fetchStartGeneration,
    fetchStartVariation,
    fetchEndGeneration,
    fetchEndVariation,
    fetchFailGeneration,
    fetchFailVariation,
    fetchSuccessGeneration,
    fetchSuccessVariation,
    
    }=touchSlice.actions

//slice oluşturulduktan sonra export default olarak export edilmeli ve reducer ifadesi belirtilmelidir.
export default touchSlice.reducer






