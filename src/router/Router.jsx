import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Wishlist from '../pages/wishlist/Wishlist'
import Basket from '../pages/basket/Basket'
import Home from '../pages/home/Home'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/basket' element={<Basket/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router