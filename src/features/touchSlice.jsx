
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";



const initialState={
    loading:"",
    error:"",
    promptsReq:[],
    propmptsRes:[],
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
        }



    }


})


export const {fetchStart,fetchFail}=touchSlice.actions

//slice oluşturulduktan sonra export default olarak export edilmeli ve reducer ifadesi belirtilmelidir.
export default touchSlice.reducer






