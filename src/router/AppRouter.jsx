import React from 'react'
import { Headers } from '../components/Headers'
import { NavBar } from '../components/NavBar'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { Home } from '../pages/Home'

export const AppRouter = () => {
  return (
    
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </>
  )
}
