import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const PrivateRouter = () => {


  // const {currentUser} = useSelector((state)=>state.auth)
  const currentUser = true

  return (
    
    currentUser ? <Outlet/> : <Navigate to={'/'}/>
  )
}

export default PrivateRouter