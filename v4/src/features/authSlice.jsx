import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    currentUser: "",
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
            state.currentUser = ""
            state.userInfo = []
        },
        fetchLoginSuccess: (state, { payload }) => {
            state.loading = false;
            state.error = false;

            const nameSurname = payload[0]?.name[0] + payload[0]?.surname

            state.currentUser = nameSurname;

            state.userInfo = payload[0]
        },
        fetchLogoutSuccess: (state) => {
            state.loading = false;
            state.currentUser = null;
            state.token = null;
            state.userInfo = []
        },
        fetchRegisterSuccess: (state, { payload }) => {
            state.loading = false;
            state.error = false;

            const nameSurname = payload?.name + " " + payload?.surname

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


















