import React from 'react'
import { auth } from "../auth/firebase.js"
import { useSelector } from 'react-redux'
import axios from 'axios'
import { toastInfoNotify, toastSuccessNotify, toastErrorNotify, toastWarnNotify } from '../helper/ToastNotify'
import { uid } from "uid";
import { fetchFail, fetchLogoutSuccess, fetchRegisterSuccess, fetchStart, loginSuccess, logoutSuccess, registerSuccess } from "../features/authSlice";
import { getDatabase, onValue, ref, remove, set, update } from "firebase/database";
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"



const useAuthCall = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const register = async (url, info) => {

    dispatch(fetchStart())


    try {

      const uID = uid()
      const newDb = getDatabase()

      await set(ref(newDb, `${url}/${uID}`), info)
      dispatch(fetchRegisterSuccess(info))

      navigate('/home')
      toastSuccessNotify('Register Success')

    } catch (error) {
      toastWarnNotify('Register Error')
      console.log("register, ", error)
    }


  }


  const logout = () => {

    dispatch(fetchStart())

    dispatch(fetchLogoutSuccess())
    toastSuccessNotify('Logout Successful.')
    navigate('/')

  }





  return {

    register,
    logout

  }


}

export default useAuthCall