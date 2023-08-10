
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";


const getChatGPT = async ()=>{

    try {

        const apiUrl = 'https://api.openai.com/v1/chat/completions';
        const apiKey =  process.env.REACT_APP_GPT_KEY;

        const requestBody = {
            messages: [{ role: 'user', content: initialState.promptGpt }],
        }; 

        const response = await axios.post(apiUrl, requestBody, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`,
            },
        });

        console.log(response)
        
    } catch (error) {
        console.log(error)
    }
}


const initialState={
    promptGpt:""
}


const touchSlice=createSlice({

    name:"touch",
    initialState,
    reducers:{
        
        setpromptGpt:(state,action)=>{
            state.promptGpt=action.payload
            getChatGPT()
        }



    }


})


export const {setpromptGpt}=touchSlice.actions

//slice oluşturulduktan sonra export default olarak export edilmeli ve reducer ifadesi belirtilmelidir.
export default touchSlice.reducer






