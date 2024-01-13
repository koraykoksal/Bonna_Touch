import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    currentUser:"",
    userInfo: [],
    loading: false,
    error: false,
}

const authSlice = createSlice({

    name: "auth",

    initialState,

    reducers: {
        fetchStart: (state) => {
            state.loading = true;
            state.error = false;
            state.currentUser =""
            state.userInfo=[]
        },
        fetchLoginSuccess: (state, { payload }) => {
            state.loading = false;
            state.error = false;

            const nameSurname = payload[0]?.name +" "+payload[0]?.surname

            state.currentUser = nameSurname;

            state.userInfo = payload[0]

            // return {
            //     userInfo:[...state.userInfo,{
            //         nameSurname:payload[0]?.name+" "+payload[0]?.surname,
            //         job:payload[0]?.job,
            //         email:payload[0]?.email,
            //         country:payload[0]?.country,
            //         company:payload[0]?.company,
            //         companyType:payload[0]?.companyType,
            //         age:payload[0]?.age,
            //         tel:payload[0]?.tel
            //     }]
            // }
        },
        fetchLogoutSuccess: (state) => {
            state.loading = false;
            state.currentUser = null;
            state.token = null;
            state.userInfo=[]
        },
        fetchRegisterSuccess: (state, { payload }) => {
            state.loading = false;
            state.error = false;

            const nameSurname = payload?.name +" "+payload?.surname

            state.currentUser = nameSurname;

            state.userInfo = payload
        
        },
        fetchFail: (state) => {
            state.loading = false;
            state.error = true;
        },

    }
})


export const {

    fetchStart,
    fetchFail,
    fetchLoginSuccess,
    fetchLogoutSuccess,
    fetchRegisterSuccess

} = authSlice.actions

export default authSlice.reducer


















