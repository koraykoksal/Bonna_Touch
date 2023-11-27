import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";



const initialState={

    loadingVariation:false,
    error:false,
    imgVariation:[],
}



const variationSlice=createSlice({

name:"variation",
initialState,

reducers:{


    fetchStartVariation:(state)=>{
        state.loadingVariation =true;
        state.error = false;
        state.imgVariation=[]
    },
    fetchEndVariation:(state)=>{
        state.loadingVariation =false;
        state.error = false;
    },
    fetchFailVariation:(state)=>{
        state.loadingVariation=false;
        state.error=true;
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


export const{
    fetchStartVariation,
    fetchEndVariation,
    fetchFailVariation,
    fetchSuccessVariation} = variationSlice.actions

export default variationSlice.reducer
