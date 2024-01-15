import React from 'react'
import { auth } from "../auth/firebase.js"
import { useSelector } from 'react-redux'
import axios from 'axios'
import { toastInfoNotify, toastSuccessNotify, toastErrorNotify, toastWarnNotify } from '../helper/ToastNotify'
import { uid } from "uid";
import { fetchFail, fetchLoginSuccess, fetchLogoutSuccess, fetchRegisterSuccess, fetchStart, loginSuccess, logoutSuccess, registerSuccess } from "../features/authSlice";
import { getDatabase, onValue, ref, remove, set, update, get } from "firebase/database";
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"



const useAuthCall = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const register = async (url, info) => {

    dispatch(fetchStart())

    try {

      // const uID = uid()
      // const newDb = getDatabase()

      // await set(ref(newDb, `${url}/${uID}`), info)
      // dispatch(fetchRegisterSuccess(info))

      // navigate('/home')
      // toastSuccessNotify('Register Success')

      const db = getDatabase()
      const res = ref(db, `${url}`)
      const snapshot = await get(res)


      if (!snapshot.exists()) {
        toastWarnNotify('There is not data !')
      }
      else {

        const array = Object.values(snapshot.val())

        const result = array.filter(item => (item.email === info.email))

        if (result.length > 0) {
          navigate('/login')
          toastWarnNotify('This email address is being used, please login.')
        }
        else {

          const uID = uid()

          await set(ref(db, `${url}/${uID}`), info)
          dispatch(fetchRegisterSuccess(info))

          navigate('/home')
          toastSuccessNotify('Register Success')

        }

      }


    } catch (error) {
      toastWarnNotify('Register Error')
      console.log("register, ", error)
    }


  }


  const login = async (url, info) => {

    dispatch(fetchStart())

    try {

      const db = getDatabase()
      const res = ref(db, `${url}`)
      const snapshot = await get(res)


      if (!snapshot.exists()) {
        toastWarnNotify('There is not data !')
      }
      else {

        const array = Object.values(snapshot.val())

        const result = array.filter(item => (item.email === info.email))

        if (result.length > 0) {
          navigate('/home')
          toastSuccessNotify('Login Success')
          dispatch(fetchLoginSuccess(result))
        }
        else {
          toastWarnNotify(`${info.email} this email address is not registered !`)
        }

      }

    } catch (error) {
      console.log("login: ", error)
      toastErrorNotify('Login Error ! Go to Register Page Please ')
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
    login,
    logout

  }


}

export default useAuthCall