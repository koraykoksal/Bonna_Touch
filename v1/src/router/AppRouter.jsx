import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { Home } from '../pages/Home'
import History from '../pages/History'
import { NotFound } from '../pages/NotFound'
import NavBars from '../components/NavBars'

export const AppRouter = () => {


  return (
    
    <>
    <BrowserRouter>
      <NavBars/>
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
