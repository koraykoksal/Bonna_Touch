import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    currentUser: "",
    loading: false,
    error: false,
    token: "",
    userInfo: [],
    managerPersonels: [],
    twiserAccesToken: "",
    twiserRefreshToken: "",
    twiserUserId: "",
}

const authSlice = createSlice({

    name: "auth",

    initialState,

    reducers: {
        fetchStart: (state) => {
            state.loading = true;
            state.error = false;
        },
        fetchLoginSuccess: (state, { payload }) => {
            state.loading = false;
            state.error = false;
        },
        fetchLogoutSuccess: (state) => {
            state.loading = false;
            state.currentUser = null;
            state.token = null;
        },
        fetchRegisterSuccess: (state, { payload }) => {
            state.loading = false;
            state.error = false;

            const nameSurname = payload?.name +" "+payload?.surname

            state.currentUser = nameSurname;
        
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


















