import React from 'react'
import { Headers } from '../components/Headers'
import {NavBar}  from '../components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { Home } from '../pages/Home'
import History from '../pages/History'

export const AppRouter = () => {




  return (
    
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='history' element={<History/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}
