import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Register } from '../pages/Register'
import { Home } from '../pages/Home'
import History from '../pages/History'
import { NotFound } from '../pages/NotFound'
import ImageDetail from '../pages/ImageDetail'
import Variation from '../pages/Variation'
import NavBar from '../components/NavBar'
import Login from '../pages/Login'
import PrivateRouter from './PrivateRouter'

export const AppRouter = () => {


  return (

    <>
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='login' element={<Login />} />

          <Route path='' element={<PrivateRouter />}>
            <Route element={<NavBar/>}>
            <Route path='home' element={<Home />} />
            <Route path='history' element={<History />} />
            <Route path='variation' element={<Variation />} />
            </Route>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}
