
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";



const initialState={
    promptGpt:"",
    responseGPT:"",
}


const touchSlice=createSlice({

    name:"touch",
    initialState,
    reducers:{
        
        setpromptGpt:(state,action)=>{
            state.promptGpt=action.payload
            
        }



    }


})


export const {setpromptGpt}=touchSlice.actions

//slice oluşturulduktan sonra export default olarak export edilmeli ve reducer ifadesi belirtilmelidir.
export default touchSlice.reducer






