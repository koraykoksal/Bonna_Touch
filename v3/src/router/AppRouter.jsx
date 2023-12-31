import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { Home } from '../pages/Home'
import History from '../pages/History'
import { NotFound } from '../pages/NotFound'
import ImageDetail from '../pages/ImageDetail'
import Variation from '../pages/Variation'
import NavBar from '../components/NavBar'

export const AppRouter = () => {


  return (
    
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='history' element={<History/>}/>
      <Route path='variation' element={<Variation/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}
