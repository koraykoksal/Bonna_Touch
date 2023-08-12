
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";



const initialState={
    loading:"",
    error:"",
    dalleData:[],
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
        fetchSuccess:(state,action)=>{

            //state.dalleData=action.payload.searchData

            return {
                dalleData:[...state.dalleData,{id:new Date().getTime(),prompt:action.payload.searchData,promptImg:action.payload.data.data[0].url}]
            }
            
            //console.log(first)

        }


    }


})


export const {fetchStart,fetchFail,fetchSuccess}=touchSlice.actions

//slice oluşturulduktan sonra export default olarak export edilmeli ve reducer ifadesi belirtilmelidir.
export default touchSlice.reducer






