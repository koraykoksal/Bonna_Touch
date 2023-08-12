import React from 'react'
import {NavBar}  from '../components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { Home } from '../pages/Home'
import History from '../pages/History'
import Navs from '../components/Navs'
import { NavNav } from '../components/NavNav'
import { NotFound } from '../pages/NotFound'
import NavvBars from '../components/NavvBars'

export const AppRouter = () => {


  return (
    
    <>
    <BrowserRouter>
    {/* <NavBar/> */}
    {/* <Navs/> */}
    {/* <NavNav/> */}
    <NavvBars/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='history' element={<History/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}
