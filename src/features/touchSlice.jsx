
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState={
    promptGpt:""
}

const API_KEY=process.env.REACT_APP_GPT_KEY

const getDataFromGPT=()=>{
    fetch(`https://api.openai.com/v1/chat/completions/`,{
        model:"gpt-4",
        message:initialState.promptGpt,
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
        },
        
    })
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
}

const touchSlice=createSlice({

    name:"touch",
    initialState,
    reducers:{
        
        setpromptGpt:(state,action)=>{
            state.promptGpt=action.payload
            getDataFromGPT()
            console.log(API_KEY)
        }

    }


})


export const {setpromptGpt}=touchSlice.actions

//slice oluşturulduktan sonra export default olarak export edilmeli ve reducer ifadesi belirtilmelidir.
export default touchSlice.reducer






