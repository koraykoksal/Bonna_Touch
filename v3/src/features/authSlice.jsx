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



const authSlice=createSlice({

    name:"auth",

    initialState,

    reducers:{


    }
})


export const {

}=authSlice.actions

export default authSlice.reducer


















