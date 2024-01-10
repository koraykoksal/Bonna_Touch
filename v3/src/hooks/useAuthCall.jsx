import React from 'react'
import { auth } from "../auth/firebase.js"
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { toastInfoNotify, toastSuccessNotify, toastErrorNotify, toastWarnNotify } from '../helper/ToastNotify'
import { uid } from "uid";
import { getDatabase,set,ref} from "firebase/firestore";
import { fetchFail, fetchStart, loginSuccess, logoutSuccess, registerSuccess } from "../features/authSlice";




const useAuthCall = () => {



  const register=async(url,info)=>{


    // try {

    //   const uID = uid()
    //   const newDb = getDatabase()

    //   await set(ref(newDb,`${url}/${uID}`),info)
    //   toastSuccessNotify('Register Success')
      
    // } catch (error) {
    //   toastWarnNotify('Register Error')
    //   console.log("register, ",error)
    // }


  }


  const login=()=>{

  }





  return {

    register,
    login

  }


}

export default useAuthCall