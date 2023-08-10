
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";


const getChatGPT = async (state)=>{

    try {

        const apiUrl = 'https://api.openai.com/v1/chat/completions';
        const apiKey =  process.env.REACT_APP_GPT_KEY;


        const requestBody = {
            messages: [{ role: 'user', content: state.promptGpt }],
        }; 

        const response = await axios.post(apiUrl, requestBody, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`,
            },
        });

        state.responseGPT=response.data
        
    } catch (error) {
        console.log(error)
    }
}


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
            getChatGPT(state)
        }



    }


})


export const {setpromptGpt}=touchSlice.actions

//slice oluşturulduktan sonra export default olarak export edilmeli ve reducer ifadesi belirtilmelidir.
export default touchSlice.reducer






